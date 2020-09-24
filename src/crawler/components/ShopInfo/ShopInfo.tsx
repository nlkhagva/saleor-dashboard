// import gql from 'graphql-tag';
// import React from 'react';

// import { useQuery } from '@apollo/react-hooks';

// import { FormData } from '../CrawlerDetailsPage';

// // import SendRequest from "./SendRequest";

// const FIND_USHOP = gql`
//   query findUshopByLink($url: String!) {
//     ushopByLink(link: $url) {
//       id
//       name
//       listSelection
//       productSelection
//     }
//   }
// `;

// export interface ShopInfoProps {
//   formData: FormData;
//   url: string;
// }

// const ShopInfo: React.FC<ShopInfoProps> = ({ url, formData }) => {
//   const { loading, error, data } = useQuery(FIND_USHOP, {
//     variables: { url }
//   });
//   if (loading) {
//     return <h1>loading...</h1>;
//   }
//   if (error) {
//     return <h1>Error: {error}</h1>;
//   }

//   return (
//     <SendRequest
//       url={url}
//       formData={formData}
//       listSelection={data.ushopByLink.listSelection}
//       productSelection={data.ushopByLink.productSelection}
//       ushop={data.ushopByLink}
//     />
//   );
// };

// ShopInfo.displayName = "ShopInfo";
// export default ShopInfo;
