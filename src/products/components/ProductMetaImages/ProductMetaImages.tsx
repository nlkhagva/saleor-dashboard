import { makeStyles } from "@material-ui/core/styles";
import { getLinkImages } from "@saleor/products/utils/data";
import React from "react";

import { ProductDetails_product } from "../../types/ProductDetails";

export interface Props {
  product: ProductDetails_product;
}

const useStyles = makeStyles(
  theme => ({
    image: {
      width: "33%"
    },
    root: {
      marginBottom: theme.spacing(1),
      width: "100%"
    }
  }),
  { name: "ProductMetaImages" }
);

const ProductMetaImages: React.FC<Props> = props => {
  const { product } = props;

  const classes = useStyles(props);
  const imageLinks = getLinkImages(product);

  return (
    <div className={classes.root}>
      {imageLinks.map((image, index) => (
        <img src={image} key={index} className={classes.image} />
      ))}
    </div>
  );
};

ProductMetaImages.displayName = "ProductMetaImages";
export default ProductMetaImages;
