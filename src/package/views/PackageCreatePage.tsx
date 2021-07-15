import React, { useState } from "react";
import { packageListUrl, packageUrl } from "../urls";

import { DEFAULT_INITIAL_SEARCH_DATA } from "@saleor/config";
import { PackageCreate as PackageCreateData } from "../types/PackageCreate";
import PackageDetailsPage from "../components/PackageDetailsPage";
import { WindowTitle } from "@saleor/components/WindowTitle";
import { getMutationStatus } from "@saleor/misc";
import useGaduurSearchSearch from "@saleor/searches/useGaduurSearch";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { usePackageCreate } from "../mutations";

export interface PackageCreateProps {
  routeParams: any;
}

export const PackageCreate: React.FC<PackageCreateProps> = ({
  routeParams
}: any) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const [lines, setLines] = useState([]);
  // const intl = useIntl();
  const {
    loadMore: loadMoreGaduurs,
    search: searchGaduur,
    result: searchGaduurOpts
  } = useGaduurSearchSearch({
    variables: DEFAULT_INITIAL_SEARCH_DATA
  });

  const [createPackage, createPackageOpts] = usePackageCreate({
    onCompleted: (data: PackageCreateData) => {
      if (data.packageCreate.errors.length === 0) {
        notify({
          status: "success",
          text: "Илгээмж үүслээ"
        });

        navigate(packageUrl(data.packageCreate.package.id));
      }
    }
  });

  const createPackageTransitionState = getMutationStatus(createPackageOpts);

  return (
    <>
      <WindowTitle title="Илгээмж үүсгэх" />
      <PackageDetailsPage
        disabled={createPackageOpts.loading}
        gaduurs={(searchGaduurOpts.data?.search.edges || []).map(
          edge => edge.node
        )}
        fetchGaduurs={searchGaduur}
        fetchMoreGaduurs={{
          hasMore: searchGaduurOpts.data?.search.pageInfo.hasNextPage,
          loading: searchGaduurOpts.loading,
          onFetchMore: loadMoreGaduurs
        }}
        errors={createPackageOpts.data?.packageCreate.errors || []}
        saveButtonBarState={createPackageTransitionState}
        onBack={() => navigate(packageListUrl())}
        routeParams={routeParams}
        lines={lines}
        setLines={setLines}
        object={null}
        onDelete={null}
        updatePackage={() => {}}
        onSubmit={data =>
          createPackage({
            variables: {
              input: {
                gaduur: data.gaduur,
                grossWeight: data.grossWeight,
                height: data.height,
                length: data.length,
                lines: lines.map(l => ({
                  fulfillmentlineId: l.id,
                  name: l.orderLine.productName,
                  quantity: l.quantity,
                  unitPriceAmount: l.orderLine.unitPrice.gross.amount
                })),
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
    </>
  );
};

PackageCreate.displayName = "PackageCreate";
export default PackageCreate;
