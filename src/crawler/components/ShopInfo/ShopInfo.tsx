import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";

import { FormData } from "../CrawlerDetailsPage";

// import SendRequest from "./SendRequest";

const FIND_USHOP = gql`
  query findUshopByLink($url: String!) {
    ushopByLink(link: $url) {
      id
      name
      listSelection
      productSelection
    }
  }
`;

export interface ShopInfoProps {
  formData: FormData;
  url: string;
}

const ShopInfo: React.FC<ShopInfoProps> = ({ url, formData }) => {
  const { loading, error } = useQuery(FIND_USHOP, {
    variables: { url }
  });
  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  if (formData) {
    return <h1>Form data</h1>;
  }

  return (
    <h1>Hello</h1>
    // <SendRequest
    //   url={url}
    //   formData={formData}
    //   listSelection={data.ushopByLink.listSelection}
    //   productSelection={data.ushopByLink.productSelection}
    //   ushop={data.ushopByLink}
    // />
  );
};

ShopInfo.displayName = "ShopInfo";
export default ShopInfo;
