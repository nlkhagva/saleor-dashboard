import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@saleor/components/Checkbox";
import ResponsiveTable from "@saleor/components/ResponsiveTable";
import Skeleton from "@saleor/components/Skeleton";
import StatusLabel from "@saleor/components/StatusLabel";
import TableHead from "@saleor/components/TableHead";
import TablePagination from "@saleor/components/TablePagination";
import { maybe, renderCollection } from "@saleor/misc";
import { ListActions, ListProps } from "@saleor/types";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { CrawlerList_crawlers_edges_node } from "../../types/CrawlerList";

export interface CrawlerListProps extends ListProps, ListActions {
  crawlers: CrawlerList_crawlers_edges_node[];
}

const useStyles = makeStyles(
  theme => ({
    [theme.breakpoints.up("lg")]: {
      colSlug: {
        width: 250
      },
      colTitle: {},
      colVisibility: {
        width: 200
      }
    },
    colSlug: {},
    colTitle: {
      paddingLeft: 0
    },
    colVisibility: {},
    link: {
      cursor: "pointer"
    }
  }),
  { name: "CrawlerList" }
);

const numberOfColumns = 4;

const CrawlerList: React.FC<CrawlerListProps> = props => {
  const {
    settings,
    crawlers,
    disabled,
    onNextPage,
    pageInfo,
    onRowClick,
    onUpdateListSettings,
    onPreviousPage,
    isChecked,
    selected,
    toggle,
    toggleAll,
    toolbar
  } = props;
  const classes = useStyles(props);

  const intl = useIntl();

  return (
    <Card>
      <ResponsiveTable>
        <TableHead
          colSpan={numberOfColumns}
          selected={selected}
          disabled={disabled}
          items={crawlers}
          toggleAll={toggleAll}
          toolbar={toolbar}
        >
          <TableCell className={classes.colTitle}>
            <FormattedMessage
              defaultMessage="url"
              description="dialog header"
            />
          </TableCell>
          <TableCell className={classes.colSlug}>
            <FormattedMessage
              defaultMessage="Shop"
              description="page internal name"
            />
          </TableCell>
          <TableCell className={classes.colVisibility}>
            <FormattedMessage
              defaultMessage="Complete"
              description="page status"
            />
          </TableCell>
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
            crawlers,
            crawler => {
              const isSelected = crawler ? isChecked(crawler.id) : false;

              return (
                <TableRow
                  hover={!!crawler}
                  className={!!crawler ? classes.link : undefined}
                  onClick={crawler ? onRowClick(crawler.id) : undefined}
                  key={crawler ? crawler.id : "skeleton"}
                  selected={isSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      disabled={disabled}
                      disableClickPropagation
                      onChange={() => toggle(crawler.id)}
                    />
                  </TableCell>
                  <TableCell className={classes.colTitle}>
                    {maybe<React.ReactNode>(() => crawler.url, <Skeleton />)}
                  </TableCell>
                  <TableCell className={classes.colSlug}>
                    {maybe<React.ReactNode>(
                      () => crawler.shop.name,
                      <Skeleton />
                    )}
                  </TableCell>
                  <TableCell className={classes.colVisibility}>
                    {maybe<React.ReactNode>(
                      () => (
                        <StatusLabel
                          label={
                            crawler.completed
                              ? intl.formatMessage({
                                  defaultMessage: "completed",
                                  description: "crawler status"
                                })
                              : intl.formatMessage({
                                  defaultMessage: "Not completed",
                                  description: "crawler status"
                                })
                          }
                          status={crawler.completed ? "success" : "error"}
                        />
                      ),
                      <Skeleton />
                    )}
                  </TableCell>
                </TableRow>
              );
            },
            () => (
              <TableRow>
                <TableCell colSpan={numberOfColumns}>
                  <FormattedMessage defaultMessage="No pages found" />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </ResponsiveTable>
    </Card>
  );
};
CrawlerList.displayName = "PageList";
export default CrawlerList;
