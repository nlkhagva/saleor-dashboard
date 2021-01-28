import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@saleor/components/Checkbox";
import Money from "@saleor/components/Money";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import StatusLabel from "@saleor/components/StatusLabel";
import TableCellAvatar, {
  AVATAR_MARGIN
} from "@saleor/components/TableCellAvatar";
import TableCellHeader from "@saleor/components/TableCellHeader";
import TableHead from "@saleor/components/TableHead";
import TablePagination from "@saleor/components/TablePagination";
import { ProductListColumns } from "@saleor/config";
import { maybe, renderCollection } from "@saleor/misc";
import {
  getAttributeIdFromColumnValue,
  isAttributeColumnValue
} from "@saleor/products/components/ProductListPage/utils";
import { GridAttributes_grid_edges_node } from "@saleor/products/types/GridAttributes";
import { ProductList_products_edges_node } from "@saleor/products/types/ProductList";
import { ProductListUrlSortField } from "@saleor/products/urls";
import { getAvatarImage } from "@saleor/products/utils/data"
import { ListActions, ListProps, SortPage } from "@saleor/types";
import TDisplayColumn, {
  DisplayColumnProps
} from "@saleor/utils/columns/DisplayColumn";
import { getArrowDirection } from "@saleor/utils/sort";
import classNames from "classnames";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";


const useStyles = makeStyles(
  theme => ({
    [theme.breakpoints.up("lg")]: {
      colName: {
        width: "auto"
      },
      colPrice: {
        width: 300
      },
      colPublished: {
        width: 200
      },
      colType: {
        width: 200
      }
    },
    colAttribute: {
      width: 150
    },
    colFill: {
      padding: 0,
      width: "100%"
    },
    colName: {
      "&$colNameFixed": {
        width: 250
      }
    },
    colNameFixed: {},
    colNameHeader: {
      marginLeft: AVATAR_MARGIN
    },
    colNameWrapper: {
      display: "block"
    },
    colPrice: {
      textAlign: "right"
    },
    colPublished: {},
    colType: {},
    link: {
      cursor: "pointer"
    },
    table: {
      tableLayout: "fixed"
    },
    tableContainer: {
      overflowX: "scroll"
    },
    textLeft: {
      textAlign: "left"
    },
    textRight: {
      textAlign: "right"
    }
  }),
  { name: "ProductList" }
);

const DisplayColumn = TDisplayColumn as React.FunctionComponent<
  DisplayColumnProps<ProductListColumns>
>;

interface ProductListProps
  extends ListProps<ProductListColumns>,
    ListActions,
    SortPage<ProductListUrlSortField> {
  activeAttributeSortId: string;
  gridAttributes: GridAttributes_grid_edges_node[];
  products: ProductList_products_edges_node[];
  loading: boolean;
}

export const ProductList: React.FC<ProductListProps> = props => {
  const {
    activeAttributeSortId,
    settings,
    disabled,
    isChecked,
    gridAttributes,
    pageInfo,
    products,
    selected,
    loading,
    sort,
    toggle,
    toggleAll,
    toolbar,
    onNextPage,
    onPreviousPage,
    onUpdateListSettings,
    onRowClick,
    onSort
  } = props;

  const classes = useStyles(props);
  const intl = useIntl();

  const gridAttributesFromSettings = settings.columns.filter(
    isAttributeColumnValue
  );
  const numberOfColumns = 2 + settings.columns.length;

  const getProductPrice = product => {
    const priceRangeUndiscounted = product?.pricing?.priceRangeUndiscounted;

    if (!priceRangeUndiscounted) {
      return "-";
    }

    const { start, stop } = priceRangeUndiscounted;
    const {
      gross: { amount: startAmount }
    } = start;
    const {
      gross: { amount: stopAmount }
    } = stop;

    if (startAmount === stopAmount) {
      return (
        <Money
          money={{
            amount: startAmount,
            currency: start.gross.currency
          }}
        />
      );
    } else {
      return (
        <>
          <Money
            money={{
              amount: startAmount,
              currency: start.gross.currency
            }}
          />
          {" - "}
          <Money
            money={{
              amount: stopAmount,
              currency: stop.gross.currency
            }}
          />
        </>
      );
    }
  };

  return (
    <div className={classes.tableContainer}>
      <ResponsiveTable className={classes.table}>
        <colgroup>
          <col />
          <col className={classes.colName} />
          <DisplayColumn column="productType" displayColumns={settings.columns}>
            <col className={classes.colType} />
          </DisplayColumn>
          <DisplayColumn column="isPublished" displayColumns={settings.columns}>
            <col className={classes.colPublished} />
          </DisplayColumn>
          {gridAttributesFromSettings.map(gridAttribute => (
            <col className={classes.colAttribute} key={gridAttribute} />
          ))}
          <DisplayColumn column="price" displayColumns={settings.columns}>
            <col className={classes.colPrice} />
          </DisplayColumn>
        </colgroup>
        <TableHead
          colSpan={numberOfColumns}
          selected={selected}
          disabled={disabled}
          items={products}
          toggleAll={toggleAll}
          toolbar={toolbar}
        >
          <TableCellHeader
            arrowPosition="right"
            className={classNames(classes.colName, {
              [classes.colNameFixed]: settings.columns.length > 4
            })}
            direction={
              sort.sort === ProductListUrlSortField.name
                ? getArrowDirection(sort.asc)
                : undefined
            }
            onClick={() => onSort(ProductListUrlSortField.name)}
          >
            <span className={classes.colNameHeader}>
              <FormattedMessage defaultMessage="Name" description="product" />
            </span>
          </TableCellHeader>
          <DisplayColumn column="productType" displayColumns={settings.columns}>
            <TableCellHeader
              className={classes.colType}
              direction={
                sort.sort === ProductListUrlSortField.productType
                  ? getArrowDirection(sort.asc)
                  : undefined
              }
              onClick={() => onSort(ProductListUrlSortField.productType)}
            >
              <FormattedMessage
                defaultMessage="Type"
                description="product type"
              />
            </TableCellHeader>
          </DisplayColumn>
          <DisplayColumn column="isPublished" displayColumns={settings.columns}>
            <TableCellHeader
              className={classes.colPublished}
              direction={
                sort.sort === ProductListUrlSortField.status
                  ? getArrowDirection(sort.asc)
                  : undefined
              }
              onClick={() => onSort(ProductListUrlSortField.status)}
            >
              <FormattedMessage
                defaultMessage="Published"
                description="product status"
              />
            </TableCellHeader>
          </DisplayColumn>
          {gridAttributesFromSettings.map(gridAttributeFromSettings => {
            const attributeId = getAttributeIdFromColumnValue(
              gridAttributeFromSettings
            );

            return (
              <TableCellHeader
                className={classes.colAttribute}
                direction={
                  sort.sort === ProductListUrlSortField.attribute &&
                  attributeId === activeAttributeSortId
                    ? getArrowDirection(sort.asc)
                    : undefined
                }
                onClick={() =>
                  onSort(ProductListUrlSortField.attribute, attributeId)
                }
                key={gridAttributeFromSettings}
              >
                {maybe<React.ReactNode>(
                  () =>
                    gridAttributes.find(
                      gridAttribute => attributeId === gridAttribute.id
                    ).name,
                  <Skeleton />
                )}
              </TableCellHeader>
            );
          })}
          <DisplayColumn column="price" displayColumns={settings.columns}>
            <TableCellHeader
              className={classes.colPrice}
              direction={
                sort.sort === ProductListUrlSortField.price
                  ? getArrowDirection(sort.asc)
                  : undefined
              }
              textAlign="right"
              onClick={() => onSort(ProductListUrlSortField.price)}
            >
              <FormattedMessage
                defaultMessage="Price"
                description="product price"
              />
            </TableCellHeader>
          </DisplayColumn>
        </TableHead>
        <TableFooter>
          <TableRow>
            <TablePagination
              colSpan={numberOfColumns}
              settings={settings}
              hasNextPage={pageInfo && !disabled ? pageInfo.hasNextPage : false}
              onNextPage={onNextPage}
              onUpdateListSettings={onUpdateListSettings}
              hasPreviousPage={
                pageInfo && !disabled ? pageInfo.hasPreviousPage : false
              }
              onPreviousPage={onPreviousPage}
            />
          </TableRow>
        </TableFooter>
        <TableBody>
          {renderCollection(
            products,
            product => {
              const isSelected = product ? isChecked(product.id) : false;
              const avatarLink = getAvatarImage(product);

              return (
                <TableRow
                  selected={isSelected}
                  hover={!!product}
                  key={product ? product.id : "skeleton"}
                  onClick={product && onRowClick(product.id)}
                  className={classes.link}
                  data-test="id"
                  data-test-id={maybe(() => product.id)}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      disabled={disabled}
                      disableClickPropagation
                      onChange={() => toggle(product.id)}
                    />
                  </TableCell>
                  <TableCellAvatar
                    className={classes.colName}
                    thumbnail={maybe(() => avatarLink )}
                    data-test="name"
                  >
                    {product?.productType ? (
                      <div className={classes.colNameWrapper}>
                        <span>{product.name}</span>
                        {product?.productType && (
                          <Typography variant="caption">
                            {product.productType.hasVariants ? (
                              <FormattedMessage
                                defaultMessage="Configurable"
                                description="product type"
                              />
                            ) : (
                              <FormattedMessage
                                defaultMessage="Simple"
                                description="product type"
                              />
                            )}
                          </Typography>
                        )}
                      </div>
                    ) : (
                      <Skeleton />
                    )}
                  </TableCellAvatar>
                  <DisplayColumn
                    column="productType"
                    displayColumns={settings.columns}
                  >
                    <TableCell
                      className={classes.colType}
                      data-test="product-type"
                    >
                      {product && product.productType ? (
                        product.productType.name
                      ) : (
                        <Skeleton />
                      )}
                    </TableCell>
                  </DisplayColumn>
                  <DisplayColumn
                    column="isPublished"
                    displayColumns={settings.columns}
                  >
                    <TableCell
                      className={classes.colPublished}
                      data-test="isPublished"
                      data-test-is-published={maybe(() => product.isPublished)}
                    >
                      {product &&
                      maybe(() => product.isPublished !== undefined) ? (
                        <StatusLabel
                          label={
                            product.isPublished
                              ? intl.formatMessage({
                                  defaultMessage: "Published",
                                  description: "product status"
                                })
                              : intl.formatMessage({
                                  defaultMessage: "Not published",
                                  description: "product status"
                                })
                          }
                          status={product.isPublished ? "success" : "error"}
                        />
                      ) : (
                        <Skeleton />
                      )}
                    </TableCell>
                  </DisplayColumn>
                  {gridAttributesFromSettings.map(gridAttribute => (
                    <TableCell
                      className={classes.colAttribute}
                      key={gridAttribute}
                      data-test="attribute"
                      data-test-attribute={getAttributeIdFromColumnValue(
                        gridAttribute
                      )}
                    >
                      {maybe<React.ReactNode>(() => {
                        const attribute = product.attributes.find(
                          attribute =>
                            attribute.attribute.id ===
                            getAttributeIdFromColumnValue(gridAttribute)
                        );
                        if (attribute) {
                          return attribute.values
                            .map(value => value.name)
                            .join(", ");
                        }
                        return "-";
                      }, <Skeleton />)}
                    </TableCell>
                  ))}
                  <DisplayColumn
                    column="price"
                    displayColumns={settings.columns}
                  >
                    <TableCell className={classes.colPrice}>
                      {loading ? <Skeleton /> : getProductPrice(product)}
                    </TableCell>
                  </DisplayColumn>
                </TableRow>
              );
            },
            () => (
              <TableRow>
                <TableCell colSpan={numberOfColumns}>
                  <FormattedMessage defaultMessage="No products found" />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </ResponsiveTable>
    </div>
  );
};
ProductList.displayName = "ProductList";
export default ProductList;
