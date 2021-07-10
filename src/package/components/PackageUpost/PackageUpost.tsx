import { PackageDetails_package } from "@saleor/package/types/PackageDetails";
import React from "react";

export interface PackageUpostProps {
  _package: PackageDetails_package | null;
}

const PackageUpost: React.FC<PackageUpostProps> = ({ _package }) => {
  const text = "upost send";
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
  console.log(upostToken);

  const upostFunc = async function(token, data) {
    const response = await fetch("https://2018.upost.mn/api/DoExec", {
      body: JSON.stringify(data),
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      method: "post"
    });

    const responseJSON = await response.json();

    return responseJSON;
  };

  return (
    <>
      {text} + {_package?.name}
    </>
  );
};

PackageUpost.displayName = "PackageUpost";
export default PackageUpost;
