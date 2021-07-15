import {
  createPackageInfoJson,
  createPackageLineInfoJson
} from "@saleor/package/utils";

import Button from "@material-ui/core/Button";
import { PackageDetails_package } from "@saleor/package/types/PackageDetails";
import React from "react";

export interface PackageUpostProps {
  _package: PackageDetails_package | null;
  updatePackage: any;
}

const PackageUpost: React.FC<PackageUpostProps> = ({
  _package,
  updatePackage
}) => {
  const [upostToken, setUpostToken] = React.useState(null);

  React.useEffect(() => {
    async function fetchToken() {
      const data = {
        username: "BWIS\\UNUR",
        password: "888emuujin888",
        progId: 1
      };
      const tokenResponse = await fetch("https://2018.upost.mn/api/Login", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        method: "post"
      });
      const tokenJSON = await tokenResponse.json();
      if (tokenJSON.retDesc) {
        setUpostToken(tokenJSON.retDesc);
      }
    }
    fetchToken();
  }, []);

  React.useEffect(() => {
    if (_package) {
      console.log(_package);
    }
  }, [_package]);

  const upostFunc = async function(data) {
    const response = await fetch("https://2018.upost.mn/api/DoExec", {
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + upostToken,
        "Content-Type": "application/json"
      },
      method: "post"
    });

    const responseJSON = await response.json();

    return responseJSON;
  };

  const sendUpost = async () => {
    const packageData = createPackageInfoJson(_package);
    const upostPackage = await upostFunc(packageData);

    if (upostPackage.retType === 1) {
      alert(upostPackage.retDesc);
    } else {
      if (upostPackage.retData.Table !== undefined) {
        const packageId = upostPackage.retData.Table[0].PK;

        for (const line of _package.lines) {
          const lineData = createPackageLineInfoJson(packageId, line);
          await upostFunc(lineData);
        }

        updatePackage({
          variables: {
            id: _package.id,
            input: {
              upostPK: packageId,
              gaduur: _package.gaduur.id,
              grossWeight: _package.grossWeight,
              height: _package.height,
              length: _package.length,
              name: _package.name,
              netOrGross: _package.netOrGross.toLowerCase(),
              netWeight: _package.netWeight,
              perkgAmount: _package.perkgAmount,
              width: _package.width
            }
          }
        });
      }
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => sendUpost()}>
        UPost.mn рүү илгээх
      </Button>
    </>
  );
};

PackageUpost.displayName = "PackageUpost";
export default PackageUpost;
