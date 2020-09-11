import { WindowTitle } from "@saleor/components/WindowTitle";
import useNavigator from "@saleor/hooks/useNavigator";
import useNotifier from "@saleor/hooks/useNotifier";
import { getMutationStatus } from "@saleor/misc";
import React from "react";

import PackageDetailsPage from "../components/PackageDetailsPage";
import { usePackageCreate } from "../mutations";
import { PackageCreate as PackageCreateData } from "../types/PackageCreate";
import { packageListUrl, packageUrl } from "../urls";

export const PackageCreate: React.FC = () => {
  const navigate = useNavigator();
  const notify = useNotifier();
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

  const createPackageTransitionState = getMutationStatus(createPackageOpts);

  return (
    <>
      <WindowTitle title="Илгээмж үүсгэх" />
      <PackageDetailsPage
        disabled={createPackageOpts.loading}
        errors={createPackageOpts.data?.packageCreate.errors || []}
        saveButtonBarState={createPackageTransitionState}
        onBack={() => navigate(packageListUrl())}
        package={null}
        onDelete={null}
        onSubmit={data =>
          createPackage({
            variables: {
              input: {
                name: data.name,
                width: data.width,
                height: data.height,
                length: data.length,
                netWeight: data.netWeight,
                grossWeight: data.grossWeight,
                totalGrossAmount: data.totalGrossAmount
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
