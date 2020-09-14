import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { getMutationStatus, getStringOrPlaceholder } from "@saleor/misc";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";
import { useIntl } from "react-intl";

import PackageDeleteDialog from "../components/PackageDeleteDialog";
import PackageDetailsPage from "../components/PackageDetailsPage";
import { usePackageDelete, usePackageUpdate } from "../mutations";
import { usePackageDetails } from "../queries";
import { PackageUpdate as PackageUpdateData } from "../types/PackageUpdate";
import { packageListUrl, packageUrl, PackageUrlQueryParams } from "../urls";

export interface PackageCreateProps {
  id: string;
  params: PackageUrlQueryParams;
}

export const PackageDetailsView: React.FC<PackageCreateProps> = ({
  id,
  params
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();
  const { data, loading } = usePackageDetails({
    displayLoader: true,
    variables: { id }
  });

  const [updatePackage, updatePackageOpts] = usePackageUpdate({
    onCompleted: (data: PackageUpdateData) => {
      if (data.packageUpdate.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const updatePackageTransitionState = getMutationStatus(updatePackageOpts);

  const [deletePackage, deletePackageOpts] = usePackageDelete({
    onCompleted: data => {
      if (data.packageDelete.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });

        navigate(packageListUrl());
      }
    }
  });
  const deletePackageTransitionState = getMutationStatus(deletePackageOpts);

  const [openModal, closeModal] = createDialogActionHandlers(
    navigate,
    params => packageUrl(id, params),
    params
  );

  if (data?.package === null) {
    return <NotFoundPage onBack={() => navigate(packageListUrl())} />;
  }

  return (
    <>
      <WindowTitle title="Гадуур дагавар үүсгэх" />
      <PackageDetailsPage
        disabled={loading || updatePackageOpts.loading}
        errors={updatePackageOpts.data?.packageUpdate.errors || []}
        saveButtonBarState={updatePackageTransitionState}
        object={data?.package || null}
        onBack={() => navigate(packageListUrl())}
        onDelete={() => openModal("delete")}
        onSubmit={data =>
          updatePackage({
            variables: {
              id,
              input: {
                grossWeight: data.grossWeight,
                height: data.height,
                length: data.length,
                name: data.name,
                netWeight: data.netWeight,
                totalGrossAmount: data.totalGrossAmount,
                width: data.width
              }
            }
          })
        }
      />
      <PackageDeleteDialog
        confirmButtonState={deletePackageTransitionState}
        name={getStringOrPlaceholder(data?.package?.name)}
        onClose={closeModal}
        onConfirm={() => deletePackage({ variables: { id } })}
        open={params.action === "delete"}
      />
    </>
  );
};

PackageDetailsView.displayName = "PackageDetailsView";
export default PackageDetailsView;
