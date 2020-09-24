// import { repeat } from 'lodash-es';
import { Mutation } from "@apollo/react-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SingleAutocompleteSelectField from "@saleor/components/SingleAutocompleteSelectField";
import { maybe } from "@saleor/misc";
import { getChoices, getChoicesParent } from "@saleor/products/utils/data";
import useCategorySearch from "@saleor/searches/useCategorySearch";
import useProductTypeSearch from "@saleor/searches/useProductTypeSearch";
import React, { useState } from "react";

import { CREATE_PRODUCT, CREATE_VARIANT } from "./graphql";
import ProductItem from "./ProductItem";

export interface ProductItemProps {
  crawledData: any;
  setCrawledData: any;
  saveCrawledDataFunction: any;
}

const useStyles = makeStyles(
  theme => ({
    controlBtn: {
      padding: "13px 22px"
    },
    controller: {
      textAlign: "right"
    },
    info: {},
    stickyContainer: {
      backgroundColor: "#f1f6f6",
      display: "grid",
      gridColumnGap: theme.spacing(3),
      gridTemplateColumns: "1fr 1fr 1fr",
      padding: `${theme.spacing(3)} 0`,
      // position: "-webkit-sticky",
      position: "sticky",
      top: 0,
      zIndex: 1
    },
    uLeftBar: {
      background: "#fff",
      fontSize: "1.2em",
      marginTop: 80,
      padding: 15
    },
    uProductContainer: {
      display: "grid",
      gridColumnGap: theme.spacing(3),
      gridTemplateColumns: "1fr 4fr"
    },
    uProductGrid: {
      display: "grid",
      gridColumnGap: theme.spacing(3),
      gridTemplateColumns: "1fr 1fr"
    }
  }),
  { name: "CrawlerProductsSave" }
);

const ProductsSave: React.FC<ProductItemProps> = ({
  crawledData,
  setCrawledData,
  saveCrawledDataFunction
}) => {
  const [usedProductTypes] = useState([
    {
      id: null,
      name: "_Сонгоогүй",
      show: true
    }
  ]);
  const [usedCategories] = useState([]);
  const [selectedPType, setSelectedPType] = useState({ id: "", name: "" });
  const [selectedCategory, setSelectedCategory] = useState({
    id: "",
    name: ""
  });
  const [selectedProducts, setSelectedProducts] = useState([]);
  let uproducts = [];

  const classes = useStyles(useStyles);

  const searchDefault = {
    after: null,
    first: 100,
    query: ""
  };

  const {
    loadMore: loadMoreCategories,
    search: searchCategory,
    result: searchCategoryOpts
  } = useCategorySearch({
    variables: searchDefault
  });

  const {
    loadMore: loadMoreProductTypes,
    search: searchProductTypes,
    result: searchProductTypesOpts
  } = useProductTypeSearch({
    variables: searchDefault
  });

  const productSaveComplete = () => {
    // console.log("product mutation complete")
    // console.log(data)
  };

  const changeProducts = () => {
    // setCrawledData(JSON.parse(JSON.stringify(crawledData)))

    uproducts = [];
    crawledData.map(ptype => {
      uproducts.push(...ptype.products);
    });

    crawledData = [];
    uproducts.map(product => {
      let ptype = crawledData.find(i => i.id === product.productType);

      if (ptype) {
        ptype.products.push(product);
      } else {
        ptype = usedProductTypes.find(i => i.id === product.productType);
        ptype.products = [product];
        crawledData.push(ptype);
      }
    });

    setCrawledData(crawledData);
    // console.log("products:")
    // console.log(usedCategories)
    // console.log(usedProductTypes)
    // console.log(crawledData)
  };

  const changeAutoComplete = e => {
    if (e.target.name === "productType") {
      const tmp = searchProductTypesOpts.data.search.edges
        .map(edge => edge.node)
        .find(node => node.id === e.target.value);
      setSelectedPType(tmp);

      if (usedProductTypes.find(i => i.id === e.target.value) === undefined) {
        usedProductTypes.push({ ...tmp, show: true });
      }
    } else if (e.target.name === "category") {
      const tmp = searchCategoryOpts.data.search.edges
        .map(edge => edge.node)
        .find(node => node.id === e.target.value);
      setSelectedCategory(tmp);

      if (usedCategories.find(i => i.id === e.target.value) === undefined) {
        usedCategories.push(tmp);
      }
    }
  };
  const changeProductInfo = e => {
    e.preventDefault();

    if (selectedPType.id === "" && selectedCategory.id === "") {
      alert("Барааны төрөл, Ангилал 2ийг заавал сонгоно уу");
      return;
    }

    uproducts = [];
    crawledData.map(ptype => {
      if (!usedProductTypes.map(i => i.id).includes(ptype.id)) {
        usedProductTypes.push({ id: ptype.id, name: ptype.name, show: true });
      }

      uproducts.push(...ptype.products);
    });

    crawledData = [];
    uproducts.map(product => {
      if (selectedProducts.map(i => i).includes(product.key)) {
        if (selectedPType.id !== "") {
          product.productType = selectedPType.id;
          product.productTypeName = selectedPType.name;
        }

        if (selectedCategory.id !== "") {
          product.category = selectedCategory.id;
          product.categoryName = selectedCategory.name;
        }
      }

      let ptype = crawledData.find(i => i.id === product.productType);

      if (ptype !== undefined) {
        ptype.products.push(product);
      } else {
        ptype = usedProductTypes.find(i => i.id === product.productType);
        ptype.show = true;
        ptype.products = [product];
        crawledData.push(ptype);
      }
    });
    setSelectedProducts([]);
    setCrawledData(crawledData);

    /* өөрчлөлтийн хадгалж байгаа хэсэг */
    saveCrawledDataFunction(crawledData);

    // product.sku = (new Date()).getTime()
    // createProduct({ variables: product });
  };

  const [loadingSave, setLoadingSave] = React.useState(false);

  const saveProducts = async (
    tmpProducts,
    selectedProductIds,
    createMutation,
    createVariantMutation
  ) => {
    setLoadingSave(true);
    tmpProducts.map(async product => {
      if (selectedProductIds.map(i => i).includes(product.key)) {
        if (!product.uproductId) {
          const result = await createMutation({
            variables: {
              ...product,
              linkImages: JSON.stringify(product.linkImages)
            }
          });
          product.ustatus = "saved";
          product.uproductId = result.data.productCreate.product.id;

          const vattrArray = result.data.productCreate.product.productType.variantAttributes.map(
            vattr => ({
              id: vattr.id,
              values: vattr.values.map(v => v.slug)
            })
          );

          const inputPreper = [];
          product.options.map(opt => {
            // opt.toLowerCase
            vattrArray.map(vattr => {
              if (vattr.values.includes(opt.toLowerCase())) {
                inputPreper.push({
                  attributes: [
                    {
                      id: vattr.id,
                      values: [opt.toLowerCase()]
                    }
                  ],
                  priceOverride: product.basePrice,
                  quantity: product.stockQuantity,
                  sku: (product.name + "_" + opt.toLowerCase()).replace(
                    /[^a-zA-Z0-9-_]+/gi,
                    ""
                  )
                });
              }
            });
          });

          await createVariantMutation({
            variables: {
              id: result.data.productCreate.product.id,
              inputs: inputPreper
            }
          });

          // console.log(vattrArray)
          // console.log(inputPreper)

          setCrawledData(JSON.parse(JSON.stringify(crawledData)));
          saveCrawledDataFunction(crawledData);
        }
      }
      // console.log(tee)
    });
    setSelectedProducts([]);
    setLoadingSave(false);

    // console.log(tmpProducts)
  };

  // const unCheckAll = e => {
  //   e.preventDefault();
  //   setSelectedProducts([]);
  // };

  const refs = crawledData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  return (
    <Mutation mutation={CREATE_PRODUCT} onCompleted={productSaveComplete}>
      {createProduct => (
        <Mutation mutation={CREATE_VARIANT}>
          {createVariant => (
            <div>
              <div className={classes.stickyContainer}>
                <div>
                  <SingleAutocompleteSelectField
                    displayValue={selectedPType.name}
                    name="productType"
                    label={"Product Type"}
                    choices={getChoices(
                      maybe(() =>
                        searchProductTypesOpts.data.search.edges.map(
                          edge => edge.node
                        )
                      )
                    )}
                    value={selectedPType.id}
                    onChange={changeAutoComplete}
                    fetchChoices={searchProductTypes}
                    data-tc="product-type"
                    hasMore={maybe(
                      () =>
                        searchProductTypesOpts.data.search.pageInfo.hasNextPage
                    )}
                    loading={searchProductTypesOpts.loading}
                    onFetchMore={loadMoreProductTypes}
                  />
                </div>
                <div>
                  <SingleAutocompleteSelectField
                    displayValue={selectedCategory.name}
                    name="category"
                    label={"Category"}
                    choices={getChoicesParent(
                      maybe(() => searchCategoryOpts.data.search.edges, []).map(
                        edge => edge.node
                      )
                    )}
                    value={selectedCategory.id}
                    onChange={changeAutoComplete}
                    fetchChoices={searchCategory}
                    data-tc="category"
                    hasMore={maybe(
                      () => searchCategoryOpts.data.search.pageInfo.hasNextPage
                    )}
                    loading={searchCategoryOpts.loading}
                    onFetchMore={loadMoreCategories}
                  />
                </div>
                <div className={classes.controller}>
                  <span style={{ paddingRight: 15 }}>
                    {selectedProducts.length} бараа сонгосон байна |{" "}
                    {/* <em style={{ cursor: "pointer" }} onClick={unCheckAll}>
                uncheck all
              </em> */}
                  </span>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.controlBtn}
                    onClick={changeProductInfo}
                  >
                    Change
                  </Button>
                </div>
              </div>
              <div className={classes.uProductContainer}>
                <div className={classes.uLeftBar}>
                  <h5 style={{ margin: 0 }}>PRODUCT TYPE</h5>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      position: "sticky",
                      top: 100
                    }}
                  >
                    {crawledData
                      .sort((a, b) =>
                        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                      )
                      .map(pType => (
                        <li
                          key={pType.id}
                          onClick={() => handleClick(pType.id)}
                          style={{
                            borderTop: "1px dotted #ccc",
                            cursor: "pointer",
                            padding: "10px 0"
                          }}
                        >
                          {pType.name} ({pType.products.length})
                        </li>
                      ))}
                  </ul>
                  {/* <h6>Category</h6>
            <ul>
              {usedCategories.map(cat => (
                <li key={cat.id}>{cat.name}</li>
              ))}
            </ul> */}
                </div>
                <div>
                  {crawledData
                    .filter(el => el.show)
                    .sort((a, b) =>
                      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                    )
                    .map(group => (
                      <div key={group.id}>
                        {group.id && (
                          <span style={{ float: "right" }}>
                            <Button
                              color="primary"
                              disabled={loadingSave}
                              onClick={() =>
                                saveProducts(
                                  group.products,
                                  selectedProducts,
                                  createProduct,
                                  createVariant
                                )
                              }
                              style={{ color: "#13BEBB !important" }}
                            >
                              Save products
                            </Button>
                          </span>
                        )}
                        <h1 ref={refs[group.id]}>
                          {group.name} ({group.products.length})
                          <small>
                            <Button
                              size="small"
                              onClick={() =>
                                setSelectedProducts(
                                  group.products.map(product => product.key)
                                )
                              }
                            >
                              select all
                            </Button>
                            &nbsp;|&nbsp;
                            <Button
                              size="small"
                              onClick={() => setSelectedProducts([])}
                            >
                              unselect all
                            </Button>
                          </small>
                        </h1>
                        <div className={classes.uProductGrid}>
                          {group.products.map((product, index) => (
                            <ProductItem
                              key={index}
                              product={product}
                              createProduct={createProduct}
                              usedProductTypes={usedProductTypes}
                              usedCategories={usedCategories}
                              changeProducts={changeProducts}
                              selectedProducts={selectedProducts}
                              setSelectedProducts={setSelectedProducts}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </Mutation>
      )}
    </Mutation>
  );
};

export default ProductsSave;
