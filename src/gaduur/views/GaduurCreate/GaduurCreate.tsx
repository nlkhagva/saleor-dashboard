import { WindowTitle } from "@saleor/components/WindowTitle";
import GaduurCreatePage from "@saleor/gaduur/components/GaduurCreatePage";
import { useGaduurCreate } from "@saleor/gaduur/mutations";
import { gaduurListUrl, gaduurUrl } from "@saleor/gaduur/urls";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import useShop from "@saleor/hooks/useShop";
import { commonMessages } from "@saleor/intl";
import { findValueInEnum, getMutationStatus } from "@saleor/misc";
import { CountryCode } from "@saleor/types/globalTypes";
import React from "react";
import { useIntl } from "react-intl";

const GaduurCreate: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigator();
  const notify = useNotifier();
  const shop = useShop();
  const [createGaduur, createGaduurOpts] = useGaduurCreate({
    onCompleted: data => {
      if (data.gaduurCreate.errors.length === 0) {
        navigate(gaduurUrl(data.gaduurCreate.gaduurPackage.id));
        notify({
          status: "success",
          text: intl.formatMessage(commonMessages.savedChanges)
        });
      }
    }
  });
  const createGaduurTransitionState = getMutationStatus(createGaduurOpts);

  return (
    <>
      <WindowTitle
        title={intl.formatMessage({
          defaultMessage: "Create Gaduur",
          description: "header"
        })}
      />
      <GaduurCreatePage
        countries={shop?.countries || []}
        disabled={createGaduurOpts.loading}
        errors={createGaduurOpts.data?.gaduurCreate.errors || []}
        saveButtonBarState={createGaduurTransitionState}
        onBack={() => navigate(gaduurListUrl())}
        onSubmit={data =>
          createGaduur({
            variables: {
              input: {
                name: data.name
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
