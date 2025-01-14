import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { productPath } from "@saleor/products/urls";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles(
  theme => ({
    product: {
      background: "#fff",
      border: "1px solid #ddd",
      marginBottom: theme.spacing(1)
    },
    productImage: {
      textAlign: "center"
    },
    productInfo: {
      paddingLeft: theme.spacing(1)
    },
    ucheckbox: {
      float: "left"
    },
    ucontroller: {
      borderBottom: "1px solid #efefef",
      display: "inline-block",
      width: "100%"
    },
    uh4: {
      margin: "7px 0px 12px"
    },
    uh5: {
      margin: 0,
      padding: `${theme.spacing(1)} 0`
    },
    wasPrice: {}
  }),
  { name: "CrawlerProductItem" }
);

export interface ProductItemProps {
  product: any;
  // createProduct: any;
  usedProductTypes: any;
  usedCategories: any;
  changeProducts: any;
  selectedProducts: any;
  setSelectedProducts: any;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  usedProductTypes,
  usedCategories,
  selectedProducts,
  setSelectedProducts
}) => {
  // const ProductItem: React.FC<ProductItemProps> = ({ product, createProduct, changeProducts, usedProductTypes, usedCategories, selectedProducts, setSelectedProducts }) => {
  const classes = useStyles(useStyles);
  const defaultPTypeName = product.productTypeName
    ? product.productTypeName
    : usedProductTypes.find(i => i.id === product.productType)
    ? usedProductTypes.find(i => i.id === product.productType).name
    : "Сонгоогүй";
  const defaultCategory = product.categoryName
    ? product.categoryName
    : usedCategories.find(i => i.id === product.category)
    ? usedCategories.find(i => i.id === product.category).name
    : "Сонгоогүй";

  const [productTypeName] = useState(defaultPTypeName);
  const [categoryName] = useState(defaultCategory);

  const changeCheckbox = event => {
    const val = parseInt(event.target.value, 10);

    const k = selectedProducts.find(k => k === val);

    if (event.target.checked && k === undefined) {
      setSelectedProducts([...selectedProducts, val]);
    } else if (event.target.checked === false && k !== undefined) {
      setSelectedProducts(selectedProducts.filter(k => k !== val));
    }
  };

  return (
    <div
      className={classes.product}
      style={
        product.productType && product.category
          ? {}
          : { borderColor: "#dc3545" }
      }
    >
      <div className={classes.ucontroller}>
        <Checkbox
          className={classes.ucheckbox}
          checked={selectedProducts.find(k => k === product.key) !== undefined}
          value={product.key}
          onChange={changeCheckbox}
        />
        <h5 className={classes.uh5}>
          {productTypeName} / {categoryName}
          <span style={{ float: "right", marginRight: 15 }}>
            {product.ustatus === "saved" ? (
              <Button color="primary" size="small">
                <Link to={productPath(product.uproductId)} color="green">
                  {product.ustatus}
                </Link>
              </Button>
            ) : (
              product.ustatus
            )}
          </span>
        </h5>
      </div>
      <div>
        {product.loading && <LinearProgress />}
        {product.linkImages.length > 0 && (
          <div className={classes.productImage}>
            {product.linkImages.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.name}
                style={{ display: "inline-block", width: "33%" }}
              />
            ))}
          </div>
        )}
        <div className={classes.productInfo}>
          <h4 className={classes.uh4}>
            <a href={product.url} target="_blank">
              {product.name}
            </a>
          </h4>
          <p className={classes.wasPrice}>
            {product.wasPrice !== null && (
              <span style={{ textDecoration: "line-through" }}>
                {" "}
                &pound;{product.wasPrice}
              </span>
            )}{" "}
            <b>&pound;{product.basePrice} </b>
          </p>
          <p>{product.options.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
