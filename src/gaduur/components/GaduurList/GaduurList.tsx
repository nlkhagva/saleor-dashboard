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
import { GaduurDetailsFragment } from "@saleor/fragments/types/GaduurDetailsFragment";
import { GaduurListUrlSortField } from "@saleor/gaduur/urls";
import { maybe, renderCollection, stopPropagation } from "@saleor/misc";
import { ListProps, SortPage } from "@saleor/types";
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
  { name: "GaduurList" }
);

interface GaduurListProps extends ListProps, SortPage<GaduurListUrlSortField> {
  gaduurs: GaduurDetailsFragment[];
  onAdd: () => void;
  onRemove: (id: string) => void;
}

const numberOfColumns = 3;

const GaduurList: React.FC<GaduurListProps> = props => {
  const {
    gaduurs,
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
    <ResponsiveTable data-test="gaduurList">
      <TableHead>
        <TableRow>
          <TableCellHeader
            direction={
              sort.sort === GaduurListUrlSortField.name
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            className={classes.colName}
            onClick={() => onSort(GaduurListUrlSortField.name)}
          >
            <FormattedMessage defaultMessage="Дугаар" description="gaduur" />
          </TableCellHeader>
          <TableCell className={classes.colShippingType}>
            <FormattedMessage defaultMessage="Төрөл" />
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
          gaduurs,
          gaduur => (
            <TableRow
              className={classes.tableRow}
              hover={!!gaduur}
              onClick={gaduur ? onRowClick(gaduur.id) : undefined}
              key={gaduur ? gaduur.id : "skeleton"}
              data-test="gaduurEntry"
              data-testid={gaduur?.name.toLowerCase().replace(" ", "")}
            >
              <TableCell className={classes.colName} data-test="name">
                {maybe<React.ReactNode>(() => gaduur.name, <Skeleton />)}
              </TableCell>
              <TableCell className={classes.colTypes} data-test="types">
                {maybe<React.ReactNode>(
                  () =>
                    SHIPPING_TYPES.find(i => i.value === gaduur.shippingType)
                      .label,
                  <Skeleton />
                )}
              </TableCell>
              <TableCell className={classes.colActions}>
                <div className={classes.actions}>
                  <IconButton color="primary" data-test="editButton">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={stopPropagation(() => onRemove(gaduur.id))}
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

GaduurList.displayName = "GaduurList";

export default GaduurList;
