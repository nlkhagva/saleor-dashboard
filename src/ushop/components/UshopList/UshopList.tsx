import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import TableCellHeader from "@saleor/components/TableCellHeader";
import TablePagination from "@saleor/components/TablePagination";
import { SHIPPING_TYPES } from "@saleor/constants";
import { UshopDetailsFragment } from "@saleor/fragments/types/UshopDetailsFragment";
import { maybe, renderCollection, stopPropagation } from "@saleor/misc";
import { ListProps, SortPage } from "@saleor/types";
import { UshopListUrlSortField } from "@saleor/ushop/urls";
import { getArrowDirection } from "@saleor/utils/sort";
import React from "react";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(
  theme => ({
    [theme.breakpoints.up("lg")]: {
      colActions: {
        width: 160
      },
      colName: {
        width: "auto"
      },
      colShippingType: {
        width: 300
      }
    },
    actions: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      position: "relative",
      right: -theme.spacing(2)
    },
    colActions: {
      textAlign: "right"
    },
    colName: {
      paddingLeft: 0
    },
    colTypes: {
      paddingLeft: 0
    },
    tableRow: {
      cursor: "pointer"
    }
  }),
  { name: "UshopList" }
);

interface UshopListProps extends ListProps, SortPage<UshopListUrlSortField> {
  ushops: UshopDetailsFragment[];
  onAdd: () => void;
  onRemove: (id: string) => void;
}

const numberOfColumns = 3;

const UshopList: React.FC<UshopListProps> = props => {
  const {
    ushops,
    disabled,
    settings,
    sort,
    pageInfo,
    onNextPage,
    onPreviousPage,
    onUpdateListSettings,
    onRemove,
    onRowClick,
    onSort
  } = props;

  const classes = useStyles(props);

  return (
    <ResponsiveTable data-test="ushopList">
      <TableHead>
        <TableRow>
          <TableCellHeader
            direction={
              sort.sort === UshopListUrlSortField.name
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            className={classes.colName}
            onClick={() => onSort(UshopListUrlSortField.name)}
          >
            <FormattedMessage defaultMessage="Нэр" description="ushop" />
          </TableCellHeader>
          <TableCell className={classes.colShippingType}>
            <FormattedMessage defaultMessage="Линк" />
          </TableCell>
          <TableCell className={classes.colActions}>
            <FormattedMessage defaultMessage="Actions" />
          </TableCell>
        </TableRow>
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
          ushops,
          ushop => (
            <TableRow
              className={classes.tableRow}
              hover={!!ushop}
              onClick={ushop ? onRowClick(ushop.id) : undefined}
              key={ushop ? ushop.id : "skeleton"}
              data-test="ushopEntry"
              data-testid={ushop?.name.toLowerCase().replace(" ", "")}
            >
              <TableCell className={classes.colName} data-test="name">
                {maybe<React.ReactNode>(() => ushop.name, <Skeleton />)}
              </TableCell>
              <TableCell className={classes.colTypes} data-test="types">
                {maybe<React.ReactNode>(() => ushop.url, <Skeleton />)}
              </TableCell>
              <TableCell className={classes.colActions}>
                <div className={classes.actions}>
                  <IconButton color="primary" data-test="editButton">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={stopPropagation(() => onRemove(ushop.id))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ),
          () => (
            <TableRow data-test="emptyListMessage">
              <TableCell colSpan={numberOfColumns}>
                <FormattedMessage defaultMessage="Гадуур дагавар байхгүй байна" />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </ResponsiveTable>
  );
};

UshopList.displayName = "UshopList";

export default UshopList;
