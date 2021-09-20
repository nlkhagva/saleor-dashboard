// import { repeat } from 'lodash-es';

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SingleAutocompleteSelectField from "@saleor/components/SingleAutocompleteSelectField";
import { maybe } from "@saleor/misc";
import {
  useProductCreateMutation,
  useProductVariantBulkCreateMutation
} from "@saleor/products/mutations";
import { getChoices } from "@saleor/products/utils/data";
// import { getChoices, getChoicesParent } from "@saleor/products/utils/data";
import useCategorySearch from "@saleor/searches/useCategorySearch";
import useProductTypeSearch from "@saleor/searches/useProductTypeSearch";
import { useMetadataUpdate } from "@saleor/utils/metadata/updateMetadata";

import {
  useProductImageCreateViaUrlMutation,
  useCrawlerLineCreateMutation
} from "@saleor/crawler/mutations";

import ProductItem from "./ProductItem";

export interface ProductItemProps {
  crawledData: any;
  setCrawledData: any;
  saveCrawledDataFunction: any;
  productSelection: any;
  crawler: any;
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
  saveCrawledDataFunction,
  productSelection,
  crawler
}) => {
  const [usedProductTypes] = useState([
    {
      id: null,
      name: "_Сонгоогүй",
      show: true
    }
  ]);
  const [usedCategories] = useState([]);
  const [selectedPType, setSelectedPType] = useState({
    id: "",
    name: "",
    variantAttributes: []
  });
  const [filterEnabled, setFilterEnabled] = useState({
    category: false,
    productType: true
  });
  const [selectedTag, setSelectedTag] = useState("");

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
  const searchDefaultCategory = {
    after: null,
    first: 100,
    query: ""
  };

  const {
    loadMore: loadMoreProductTypes,
    search: searchProductTypes,
    result: searchProductTypesOpts
  } = useProductTypeSearch({
    variables: searchDefault
  });

  const {
    loadMore: loadMoreCategories,
    search: searchCategory,
    result: searchCategoryOpts
  } = useCategorySearch({
    variables: searchDefaultCategory
  });

  const [productCreate] = useProductCreateMutation({});
  const [bulkProductVariantCreate] = useProductVariantBulkCreateMutation({});
  const [updateMetadata] = useMetadataUpdate({});
  const [productImageViaLinkMutation] = useProductImageCreateViaUrlMutation({});
  const [crawlerLineCreateMutation] = useCrawlerLineCreateMutation({});

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

    if (selectedPType.id === "" || selectedCategory.id === "") {
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

  const saveProducts = async (tmpProducts, selectedProductIds) => {
    setLoadingSave(true);

    for (const product of tmpProducts) {
      if (selectedProductIds.map(i => i).includes(product.key)) {
        if (!product.uproductId) {
          product.loading = true;
          setCrawledData(JSON.parse(JSON.stringify(crawledData)));

          const allowed = [
            "name",
            "ushop",
            "category",
            "basePrice",
            "chargeTaxes",
            "isPublished",
            "productType",
            "visibleInListings",
            "wasPrice",
            "usale"
          ];
          const filtered = Object.keys(product)
            .filter(key => allowed.includes(key))
            .reduce(
              (obj, key) => {
                obj[key] = product[key];
                return obj;
              },
              { productType: "" }
            );

          try {
            // linkImages: JSON.stringify(product.linkImages)
            const result = await productCreate({
              variables: {
                input: { ...filtered, sku: uuidv4() }
              }
            });
            console.log(result);

            console.log("saved product:", result.data.productCreate.product.id);
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
              vattrArray.map(vattr => {
                if (vattr.values.includes(opt.toLowerCase())) {
                  inputPreper.push({
                    attributes: [
                      {
                        id: vattr.id,
                        values: [opt.toLowerCase()]
                      }
                    ],
                    price: product.basePrice,
                    sku: uuidv4(),
                    stocks: [
                      {
                        quantity: product.stockQuantity,
                        warehouse:
                          "V2FyZWhvdXNlOjQ4ZjU5YjRmLWMxODUtNGUzMi05MjExLTMzOWE5NGJlYmIxYw=="
                      }
                    ],
                    trackInventory: true
                  });
                }
              });
            });

            const metaInput = [
              {
                key: "url",
                value: product.url
              },
              {
                key: "wasPrice",
                value: product.wasPrice
              },
              {
                key: "productSelection",
                value: productSelection
              }
            ];

            await updateMetadata({
              variables: {
                id: result.data.productCreate.product.id,
                input: metaInput,
                keysToDelete: []
              }
            });
            console.log(
              "saved metadata: ",
              result.data.productCreate.product.id
            );

            await bulkProductVariantCreate({
              variables: {
                id: result.data.productCreate.product.id,
                inputs: inputPreper
              }
            });
            console.log(
              "create variants: ",
              result.data.productCreate.product.id
            );

            // {
            //   key: "linkImages",
            //   value: JSON.stringify(product.linkImages)
            // },
            for (const img of product.linkImages) {
              await productImageViaLinkMutation({
                variables: {
                  url: img,
                  product: product.uproductId
                }
              });
              console.log("saved image:", img);
            }

            await crawlerLineCreateMutation({
              variables: {
                input: {
                  product: product.uproductId,
                  crawler: crawler.id,
                  url: product.url,
                  uproductSelection: crawler.productSelection,
                  uoptions: JSON.stringify({ options: product.options }),
                  price: product.basePrice,
                  wasPrice: product.wasPrice
                }
              }
            });
          } catch (e) {
            alert(e);
          }

          product.loading = false;
          setCrawledData(JSON.parse(JSON.stringify(crawledData)));
          saveCrawledDataFunction(crawledData);
        }
      }
    }
    setSelectedProducts([]);
    setLoadingSave(false);
  };

  const refs = crawledData.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleClick = id =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  //  selectedPType selectedCategory
  let filteredData = crawledData.filter(el => el.show);

  if (selectedCategory.name.length > 0 && filterEnabled.category) {
    filteredData = filteredData.map(group => ({
      ...group,
      products: group.products.filter(product =>
        selectedCategory.name
          .toLowerCase()
          .trim()
          .split(" ")
          .map(text => product.name.toLowerCase().search(text) > -1)
          .reduce((a, b) => a && b)
      )
    }));
  }
  if (filterEnabled.productType && selectedPType.variantAttributes.length) {
    const attribute = selectedPType.variantAttributes[0];
    const variantAttrs = attribute.values.map(v => v.slug);

    filteredData = filteredData.map(group => ({
      ...group,
      products: group.products.filter(
        product =>
          product.options
            .map(o => o.toLowerCase().trim())
            .filter(val => variantAttrs.includes(val)).length
      )
    }));
  }

  const words = [];
  crawledData.forEach(group => {
    group.products.forEach(product => {
      product.name
        .toLowerCase()
        .trim()
        .split(" ")
        .map(word => {
          const find = words.find(w => w.text === word);
          if (find) {
            find.count++;
          } else {
            words.push({
              count: 1,
              text: word
            });
          }
        });
    });
  });

  if (selectedTag.length > 0) {
    filteredData = filteredData.map(group => ({
      ...group,
      products: group.products.filter(
        product =>
          product.name
            .toLowerCase()
            .trim()
            .search(selectedTag) > -1
      )
    }));
  }

  return (
    <div>
      <div className={classes.stickyContainer}>
        <div>
          <SingleAutocompleteSelectField
            displayValue={selectedPType.name}
            name="productType"
            label={"Product Type"}
            choices={getChoices(
              maybe(() =>
                searchProductTypesOpts.data.search.edges.map(edge => edge.node)
              )
            )}
            value={selectedPType.id}
            onChange={changeAutoComplete}
            fetchChoices={searchProductTypes}
            data-tc="product-type"
            hasMore={maybe(
              () => searchProductTypesOpts.data.search.pageInfo.hasNextPage
            )}
            loading={searchProductTypesOpts.loading}
            disabled={searchProductTypesOpts.loading}
            onFetchMore={loadMoreProductTypes}
          />
        </div>
        <div>
          {/* {searchCategoryOpts.loading ? (
            "loading categories ..."
          ) : ( */}
          <SingleAutocompleteSelectField
            displayValue={selectedCategory.name}
            name="category"
            label={"Category"}
            choices={getChoices(
              maybe(() =>
                searchCategoryOpts.data.search.edges.map(edge => edge.node)
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
            disabled={searchCategoryOpts.loading}
            onFetchMore={loadMoreCategories}
          />
          {/* )} */}
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
          // style={{
          //   backgroundColor: "#fff",
          //   listStyle: "none",
          //   padding: 0,
          //   position: "sticky",
          //   top: 100,
          //   zIndex: 1
          // }}
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
          <h5>FILTER</h5>
          <FormControlLabel
            control={
              <Checkbox
                checked={filterEnabled.category}
                onChange={() =>
                  setFilterEnabled({
                    ...filterEnabled,
                    category: !filterEnabled.category
                  })
                }
                value="filterEnabled"
                color="primary"
              />
            }
            label="By category name"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filterEnabled.productType}
                onChange={() =>
                  setFilterEnabled({
                    ...filterEnabled,
                    productType: !filterEnabled.productType
                  })
                }
                value="filterEnabledProductType"
                color="primary"
              />
            }
            label="By product type"
          />

          <div>
            <Typography
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedTag("")}
            >
              CLEAR
            </Typography>
            {words
              .sort((a, b) => b.count - a.count)
              .filter(a => a.count > 1)
              .map((word, index) => (
                <Typography
                  style={{ cursor: "pointer" }}
                  key={index}
                  onClick={() => setSelectedTag(word.text)}
                >
                  {word.text} ({word.count})
                </Typography>
              ))}
          </div>
        </div>
        <div>
          {filteredData
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
                        saveProducts(group.products, selectedProducts)
                      }
                      style={{ color: "#13BEBB !important" }}
                    >
                      Save products {loadingSave ? "saving..." : ""}
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
  );
};

export default ProductsSave;
