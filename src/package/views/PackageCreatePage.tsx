import { WindowTitle } from "@saleor/components/WindowTitle";
import { useNewGaduurList } from "@saleor/gaduur/queries";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getMutationStatus } from "@saleor/misc";
import React, { useState } from "react";

import PackageDetailsPage from "../components/PackageDetailsPage";
import { usePackageCreate } from "../mutations";
import { PackageCreate as PackageCreateData } from "../types/PackageCreate";
import { packageListUrl, packageUrl } from "../urls";

export interface PackageCreateProps {
  ordernumber: string;
}

export const PackageCreate: React.FC<PackageCreateProps> = ({
  ordernumber
}: any) => {
  const navigate = useNavigator();
  const notify = useNotifier();
  const [lines, setLines] = useState([]);
  // const intl = useIntl();

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

  const { data: newGaduursData, loading } = useNewGaduurList({
    displayLoader: true
  });
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const createPackageTransitionState = getMutationStatus(createPackageOpts);

  return (
    <>
      <WindowTitle title="Илгээмж үүсгэх" />
      <PackageDetailsPage
        disabled={createPackageOpts.loading}
        errors={createPackageOpts.data?.packageCreate.errors || []}
        saveButtonBarState={createPackageTransitionState}
        onBack={() => navigate(packageListUrl())}
        ordernumber={ordernumber}
        lines={lines}
        setLines={setLines}
        object={null}
        onDelete={null}
        gaduurChoices={
          newGaduursData.newGaduurs.map(g => ({
            label: g.name,
            value: g.id
          })) || []
        }
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
