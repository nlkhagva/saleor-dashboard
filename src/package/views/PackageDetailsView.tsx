import { PackageUrlQueryParams, packageListUrl, packageUrl } from "../urls";
import { getMutationStatus, getStringOrPlaceholder } from "@saleor/misc";
import { usePackageDelete, usePackageUpdate } from "../mutations";

import { DEFAULT_INITIAL_SEARCH_DATA } from "@saleor/config";
import NotFoundPage from "@saleor/components/NotFoundPage";
import PackageDeleteDialog from "../components/PackageDeleteDialog";
import PackageDetailsPage from "../components/PackageDetailsPage";
import { PackageUpdate as PackageUpdateData } from "../types/PackageUpdate";
import React from "react";
import { WindowTitle } from "@saleor/components/WindowTitle";
import { commonMessages } from "@saleor/intl";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import useGaduurSearchSearch from "@saleor/searches/useGaduurSearch";
import { useIntl } from "react-intl";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { usePackageDetails } from "../queries";

export interface PackageCreateProps {
  id: string;
  routeParams: PackageUrlQueryParams;
}

export const PackageDetailsView: React.FC<PackageCreateProps> = ({
  id,
  routeParams
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();

  const {
    loadMore: loadMoreGaduurs,
    search: searchGaduur,
    result: searchGaduurOpts
  } = useGaduurSearchSearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });

  const { data, loading, refetch } = usePackageDetails({
    displayLoader: true,
    variables: { id }
  });

  const [updatePackage, updatePackageOpts] = usePackageUpdate({
    onCompleted: (data: PackageUpdateData) => {
      if (data.packageUpdate.errors.length === 0) {
        refetch();
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
    routeParams
  );

  if (data?.package === null) {
    return <NotFoundPage onBack={() => navigate(packageListUrl())} />;
  }

  return (
    <>
      <WindowTitle title="Илгээмж" />
      <PackageDetailsPage
        disabled={loading || updatePackageOpts.loading}
        errors={updatePackageOpts.data?.packageUpdate.errors || []}
        fetchGaduurs={searchGaduur}
        gaduurs={(searchGaduurOpts.data?.search.edges || []).map(
          edge => edge.node
        )}
        fetchMoreGaduurs={{
          hasMore: searchGaduurOpts.data?.search.pageInfo.hasNextPage,
          loading: searchGaduurOpts.loading,
          onFetchMore: loadMoreGaduurs
        }}
        saveButtonBarState={updatePackageTransitionState}
        lines={[]}
        setLines={() => void 0}
        object={data?.package || null}
        onBack={() => navigate(packageListUrl())}
        onDelete={() => openModal("delete")}
        routeParams={routeParams}
        updatePackage={updatePackage}
        onSubmit={data =>
          updatePackage({
            variables: {
              id,
              input: {
                gaduur: data.gaduur,
                grossWeight: data.grossWeight,
                height: data.height,
                length: data.length,
                name: data.name,
                netOrGross: data.netOrGross.toLowerCase(),
                netWeight: data.netWeight,
                perkgAmount: data.perkgAmount,
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
        open={routeParams.action === "delete"}
      />
    </>
  );
};

PackageDetailsView.displayName = "PackageDetailsView";
export default PackageDetailsView;
