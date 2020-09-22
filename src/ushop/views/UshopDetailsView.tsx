import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { getMutationStatus, getStringOrPlaceholder } from "@saleor/misc";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";
import { useIntl } from "react-intl";

import UshopDeleteDialog from "../components/UshopDeleteDialog";
import UshopDetailsPage from "../components/UshopDetailsPage";
import { useUshopDelete, useUshopUpdate } from "../mutations";
import { useUshopDetails } from "../queries";
import { UshopUpdate as UshopUpdateData } from "../types/UshopUpdate";
import { ushopListUrl, ushopUrl, UshopUrlQueryParams } from "../urls";

export interface UshopCreateProps {
  id: string;
  params: UshopUrlQueryParams;
}

export const UshopDetailsView: React.FC<UshopCreateProps> = ({
  id,
  params
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();
  const { data, loading } = useUshopDetails({
    displayLoader: true,
    variables: { id }
  });

  const [updateUshop, updateUshopOpts] = useUshopUpdate({
    onCompleted: (data: UshopUpdateData) => {
      if (data.ushopUpdate.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const updateUshopTransitionState = getMutationStatus(updateUshopOpts);

  const [deleteUshop, deleteUshopOpts] = useUshopDelete({
    onCompleted: data => {
      if (data.ushopDelete.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });

        navigate(ushopListUrl());
      }
    }
  });
  const deleteUshopTransitionState = getMutationStatus(deleteUshopOpts);

  const [openModal, closeModal] = createDialogActionHandlers(
    navigate,
    params => ushopUrl(id, params),
    params
  );

  if (data?.ushop === null) {
    return <NotFoundPage onBack={() => navigate(ushopListUrl())} />;
  }

  return (
    <>
      <WindowTitle title="Гадуур дагавар үүсгэх" />
      <UshopDetailsPage
        disabled={loading || updateUshopOpts.loading}
        errors={updateUshopOpts.data?.ushopUpdate.errors || []}
        saveButtonBarState={updateUshopTransitionState}
        ushop={data?.ushop}
        onBack={() => navigate(ushopListUrl())}
        onDelete={() => openModal("delete")}
        onSubmit={data =>
          updateUshop({
            variables: {
              id,
              input: {
                descriptionJson: JSON.stringify(data.description),
                isPublished: data.isPublished,
                listSelection: data.listSelection,
                name: data.name,
                productSelection: data.productSelection,
                publicationDate: data.isPublished
                  ? null
                  : data.publicationDate === ""
                  ? null
                  : data.publicationDate,
                rank: data.rank,
                ratingMain: data.ratingMain,
                ratingProductPrice: data.ratingProductPrice,
                ratingProductQuality: data.ratingProductQuality,
                ratingProductRank: data.ratingProductRank,
                ratingShuurhai: data.ratingShuurhai,
                ratingUkShipping: data.ratingUkShipping,
                url: data.url
              }
            }
          })
        }
      />
      <UshopDeleteDialog
        confirmButtonState={deleteUshopTransitionState}
        name={getStringOrPlaceholder(data?.ushop?.name)}
        onClose={closeModal}
        onConfirm={() => deleteUshop({ variables: { id } })}
        open={params.action === "delete"}
      />
    </>
  );
};

UshopDetailsView.displayName = "UshopDetailsView";
export default UshopDetailsView;
