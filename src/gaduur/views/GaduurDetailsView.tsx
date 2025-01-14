import NotFoundPage from "@saleor/components/NotFoundPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { commonMessages } from "@saleor/intl";
import { getMutationStatus, getStringOrPlaceholder } from "@saleor/misc";
import createDialogActionHandlers from "@saleor/utils/handlers/dialogActionHandlers";
import React from "react";
import { useIntl } from "react-intl";

import GaduurDeleteDialog from "../components/GaduurDeleteDialog";
import GaduurViewPage from "../components/GaduurViewPage";
import { useGaduurDelete, useGaduurUpdate } from "../mutations";
import { useGaduurDetails } from "../queries";
import { GaduurUpdate as GaduurUpdateData } from "../types/GaduurUpdate";
import { gaduurListUrl, gaduurUrl, GaduurUrlQueryParams } from "../urls";

export interface GaduurCreateProps {
  id: string;
  params: GaduurUrlQueryParams;
}

export const GaduurDetailsView: React.FC<GaduurCreateProps> = ({
  id,
  params
}) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();
  const lk = useGaduurDetails({
    displayLoader: true,
    variables: { id }
  });

  const { data, loading } = lk;

  const [updateGaduur, updateGaduurOpts] = useGaduurUpdate({
    onCompleted: (data: GaduurUpdateData) => {
      if (data.gaduurUpdate.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const updateGaduurTransitionState = getMutationStatus(updateGaduurOpts);

  const [deleteGaduur, deleteGaduurOpts] = useGaduurDelete({
    onCompleted: data => {
      if (data.gaduurDelete.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });

        navigate(gaduurListUrl());
      }
    }
  });
  const deleteGaduurTransitionState = getMutationStatus(deleteGaduurOpts);

  const [openModal, closeModal] = createDialogActionHandlers(
    navigate,
    params => gaduurUrl(id, params),
    params
  );

  if (data?.gaduur === null) {
    return <NotFoundPage onBack={() => navigate(gaduurListUrl())} />;
  }

  return (
    <>
      <WindowTitle title="Гадуур дэлгэрэнгүй" />
      <GaduurViewPage
        disabled={loading || updateGaduurOpts.loading}
        errors={updateGaduurOpts.data?.gaduurUpdate.errors || []}
        saveButtonBarState={updateGaduurTransitionState}
        gaduur={data?.gaduur}
        onBack={() => navigate(gaduurListUrl())}
        onDelete={() => openModal("delete")}
        onSubmit={data =>
          updateGaduur({
            variables: {
              id,
              input: {
                endDate: data.endDate === "" ? null : data.endDate,
                isPublished: data.isPublished,
                publicationDate: data.isPublished
                  ? null
                  : data.publicationDate === ""
                  ? null
                  : data.publicationDate,
                receivedDate:
                  data.receivedDate === "" ? null : data.receivedDate,
                startDate: data.startDate === "" ? null : data.startDate,
                trackingNumber:
                  data.trackingNumber === "" ? null : data.trackingNumber,
                ustatus: data.status.toLowerCase()
              }
            }
          })
        }
      />
      <GaduurDeleteDialog
        confirmButtonState={deleteGaduurTransitionState}
        name={getStringOrPlaceholder(data?.gaduur?.name)}
        onClose={closeModal}
        onConfirm={() => deleteGaduur({ variables: { id } })}
        open={params.action === "delete"}
      />
    </>
  );
};

GaduurDetailsView.displayName = "GaduurDetailsView";
export default GaduurDetailsView;
