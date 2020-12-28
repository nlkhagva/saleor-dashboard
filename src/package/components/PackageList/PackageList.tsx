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
// import { SHIPPING_TYPES } from "@saleor/constants";
import { PackageDetailsFragment } from "@saleor/fragments/types/PackageDetailsFragment";
import { maybe, renderCollection, stopPropagation } from "@saleor/misc";
import { PackageListUrlSortField } from "@saleor/package/urls";
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
  { name: "PackageList" }
);

interface PackageListProps
  extends ListProps,
    SortPage<PackageListUrlSortField> {
  packages: PackageDetailsFragment[];
  onAdd: () => void;
  onRemove: (id: string) => void;
}

const numberOfColumns = 3;

const PackageList: React.FC<PackageListProps> = props => {
  const {
    packages,
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
    <ResponsiveTable data-test="packageList">
      <TableHead>
        <TableRow>
          <TableCellHeader
            direction={
              sort.sort === PackageListUrlSortField.name
                ? getArrowDirection(sort.asc)
                : undefined
            }
            arrowPosition="right"
            className={classes.colName}
            onClick={() => onSort(PackageListUrlSortField.name)}
          >
            <FormattedMessage defaultMessage="Дугаар" description="package" />
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
          packages,
          package => (
            <TableRow
              className={classes.tableRow}
              hover={!!package}
              onClick={package ? onRowClick(package.id) : undefined}
              key={package ? package.id : "skeleton"}
              data-test="packageEntry"
              data-testid={package?.name.toLowerCase().replace(" ", "")}
            >
              <TableCell className={classes.colName} data-test="name">
                {maybe<React.ReactNode>(() => package.name, <Skeleton />)}
              </TableCell>
              <TableCell className={classes.colTypes} data-test="types">
                {/* {maybe<React.ReactNode>(package.name, <Skeleton />)} */}
              </TableCell>
              <TableCell className={classes.colActions}>
                <div className={classes.actions}>
                  <IconButton color="primary" data-test="editButton">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={stopPropagation(() => onRemove(package.id))}
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
                <FormattedMessage defaultMessage="Илгээмж байхгүй байна" />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </ResponsiveTable>
  );
};

PackageList.displayName = "PackageList";

export default PackageList;
