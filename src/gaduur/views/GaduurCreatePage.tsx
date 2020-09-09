import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getMutationStatus } from "@saleor/misc";
import React from "react";

import GaduurDetailsPage from "../components/GaduurDetailsPage";
import { useGaduurCreate } from "../mutations";
import { GaduurCreate as GaduurCreateData } from "../types/GaduurCreate";
import { gaduurListUrl, gaduurUrl } from "../urls";

export const GaduurCreate: React.FC = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
  // const intl = useIntl();

  const [createGaduur, createGaduurOpts] = useGaduurCreate({
    onCompleted: (data: GaduurCreateData) => {
      if (data.gaduurCreate.errors.length === 0) {
        notify({
          status: "success",
          text: "Гадуур дагавар үүслээ"
        });

        navigate(gaduurUrl(data.gaduurCreate.gaduurPackage.id));
      }
    }
  });

  const createGaduurTransitionState = getMutationStatus(createGaduurOpts);

  return (
    <>
      <WindowTitle title="Гадуур дагавар үүсгэх" />
      <GaduurDetailsPage
        disabled={createGaduurOpts.loading}
        errors={createGaduurOpts.data?.gaduurCreate.errors || []}
        saveButtonBarState={createGaduurTransitionState}
        onBack={() => navigate(gaduurListUrl())}
        gaduur={null}
        onDelete={null}
        onSubmit={data =>
          createGaduur({
            variables: {
              input: {
                isPublished: data.isPublished,
                name: data.name,
                publicationDate: data.isPublished
                  ? null
                  : data.publicationDate === ""
                  ? null
                  : data.publicationDate,
                shippingType: data.shippingType
              }
            }
          })
        }
      />
    </>
  );
};

GaduurCreate.displayName = "GaduurCreate";
export default GaduurCreate;
