import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getMutationStatus } from "@saleor/misc";
import React from "react";

import UshopDetailsPage from "../components/UshopDetailsPage";
import { useUshopCreate } from "../mutations";
import { UshopCreate as UshopCreateData } from "../types/UshopCreate";
import { ushopListUrl, ushopUrl } from "../urls";

export const UshopCreate: React.FC = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
  // const intl = useIntl();

  const [createUshop, createUshopOpts] = useUshopCreate({
    onCompleted: (data: UshopCreateData) => {
      if (data.ushopCreate.errors.length === 0) {
        notify({
          status: "success",
          text: "Гадуур дагавар үүслээ"
        });

        navigate(ushopUrl(data.ushopCreate.shop.id));
      }
    }
  });

  const createUshopTransitionState = getMutationStatus(createUshopOpts);

  return (
    <>
      <WindowTitle title="Англи дэлгүүр үүсгэх" />
      <UshopDetailsPage
        disabled={createUshopOpts.loading}
        errors={createUshopOpts.data?.ushopCreate.errors || []}
        saveButtonBarState={createUshopTransitionState}
        onBack={() => navigate(ushopListUrl())}
        ushop={null}
        onDelete={null}
        onSubmit={data =>
          createUshop({
            variables: {
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
        onImageUpload={null}
      />
    </>
  );
};

UshopCreate.displayName = "UshopCreate";
export default UshopCreate;
