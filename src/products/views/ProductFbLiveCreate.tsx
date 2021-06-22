import Container from "@saleor/components/Container";
import Grid from "@saleor/components/Grid";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getProductAvailabilityVariables } from "@saleor/products/utils/handlers";
import React, { useState } from "react";
import { useIntl } from "react-intl";

import {
  useProductCreateMutation,
  useProductSetAvailabilityForPurchase
} from "../mutations";
import { useSkuNext } from "../queries";
import { productFbPath } from "../urls";

export const ProductCreateFbLiveView: React.FC = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const intl = useIntl();

  const [error, setError] = useState("loading...");
  const [isRun, setRun] = useState(false);

  const [setProductAvailability] = useProductSetAvailabilityForPurchase({
    onCompleted: data => {
      const errors = data?.productSetAvailabilityForPurchase?.errors;
      if (errors?.length === 0) {
        navigate(
          productFbPath(data.productSetAvailabilityForPurchase.product.id)
        );
      }
    }
  });

  const [productCreate] = useProductCreateMutation({
    onCompleted: data => {
      if (data.productCreate.errors.length === 0) {
        notify({
          status: "success",
          text: intl.formatMessage({
            defaultMessage: "Product created"
          })
        });
      }
    }
  });

  const handleCreate = async nextSku => {
    if (!nextSku) {
      return;
    }
    const result = await productCreate({
      variables: {
        input: {
          basePrice: 0,
          category: "Q2F0ZWdvcnk6MjI3",
          chargeTaxes: false,
          collections: ["Q29sbGVjdGlvbjoy"],
          isPublished: false,
          name: nextSku,
          productType: "UHJvZHVjdFR5cGU6MTk=",
          sku: nextSku,
          stocks: [
            {
              quantity: 0,
              warehouse:
                "V2FyZWhvdXNlOjQ4ZjU5YjRmLWMxODUtNGUzMi05MjExLTMzOWE5NGJlYmIxYw=="
            }
          ],
          trackInventory: true,
          usale: 0,
          ushop: "VXNob3A6MQ==",
          visibleInListings: true,
          wasPrice: null,
          weight: null
        }
      }
    });

    const productId = result.data.productCreate?.product?.id;

    if (productId) {
      const variables = getProductAvailabilityVariables({
        availableForPurchase: "",
        isAvailableForPurchase: false,
        productId
      });

      setProductAvailability({
        variables
      });
    } else {
      setError(JSON.stringify(result.data.productCreate?.errors));
    }

    return productId || null;
  };

  const skuNext = useSkuNext({});
  if (skuNext.data?.ushopSkuNext.sku) {
    if (!isRun) {
      setRun(true);
      handleCreate(skuNext.data?.ushopSkuNext.sku);
    }
    // useMemo
    // setNextSku(skuNext.data?.ushopSkuNext.sku);
  }

  return (
    <>
      <Container>
        <Grid>
          <div>{error}</div>
        </Grid>
      </Container>
    </>
  );
};
export default ProductCreateFbLiveView;
