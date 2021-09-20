import clsx from "clsx";
import React, { useState } from "react";
import { Event } from "react-socket-io";

import { useMutation } from "@apollo/react-hooks";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  createStyles,
  lighten,
  makeStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";
import FormSpacer from "@saleor/components/FormSpacer";
import useNotifier from "@saleor/hooks/useNotifier";
import { socketURI } from "@saleor/index";

import { crawlerUpdate } from "../../mutations";
import { CrawlerDetails_crawler } from "../../types/CrawlerDetails";
import ProductsSave from "./ProductsSave";

export interface PropsRequest {
  url: string;
  crawler: CrawlerDetails_crawler;
  listSelection: string;
  productSelection: string;
}

const CrawlerProcess: React.FC<PropsRequest> = ({
  crawler,
  url,
  listSelection,
  productSelection
}) => {
  const [saveCrawledData] = useMutation(crawlerUpdate);
  const [crawlerLimit, setCrawlerLimit] = React.useState(10);

  const crawlerServerURI = socketURI;
  const notify = useNotifier();
  const useStyles = makeStyles(
    (theme: Theme) =>
      createStyles({
        buttonProgress: {
          color: green[500],
          left: "40px",
          marginLeft: -12,
          marginTop: -12,
          position: "absolute",
          top: "50%"
        },
        buttonSuccess: {
          "&:hover": {
            backgroundColor: green[700]
          },
          backgroundColor: green[500]
        },
        margin: {
          margin: theme.spacing(1)
        },
        root: {
          flexGrow: 1
        },
        wrapper: {
          margin: 0,
          position: "relative",
          width: "100%"
        }
      }),
    { name: "CrawlerProcess" }
  );

  const classes = useStyles({});
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  const [crawlerInfo, setCrawlerInfo] = useState({
    current: 0,
    errors: 0,
    products: [],
    total: 0
  });
  const [crawledData, setCrawledData] = useState(
    JSON.parse(crawler.jsonData).crawledData || []
  );

  const crawlerHandler = data => {
    setCrawlerInfo(data);
    if (data.current + data.errors === data.total && data.total > 0) {
      setLoading(false);

      if (data.current > 0) {
        receiveProductData();
      }
    }
  };

  const saveCrawledDataFunction = async cleanedData => {
    await saveCrawledData({
      variables: {
        id: crawler.id,
        input: {
          jsonData: JSON.stringify({ crawledData: cleanedData }, null),
          listSelection: crawler.listSelection,
          productSelection: crawler.productSelection
        }
      }
    });
  };

  const sendPostRequest = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);

      const rs = await fetch(crawlerServerURI + "/crawler", {
        body: JSON.stringify({
          limit: crawlerLimit,
          listSelection,
          productSelection,
          url,
          user: 1
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "post"
      });

      const data = await rs.json();
      if (data.status !== "crawling") {
        setSuccess(false);
        setLoading(false);
        notify({
          text: "Server завгүй байна"
        });
      }
    }
  };

  const receiveProductData = async () => {
    const result = await fetch(crawlerServerURI + "/result", {
      // make sure to serialize your JSON body
      body: JSON.stringify({
        user: 1
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "post"
    });

    const data = await result.json();

    if (loading) {
      setSuccess(true);
      setLoading(false);
    }

    if (data.status === "complete") {
      const cleanedProducts = data.products.map((product, index) => {
        const bPrice = parseFloat(product.basePrice.replace(/[^0-9.-]+/g, ""));
        const wPrice = parseFloat(product.wasPrice.replace(/[^0-9.-]+/g, ""));
        let usalePercent = parseFloat(
          (100 - (bPrice * 100) / wPrice).toFixed(2)
        );
        usalePercent = isNaN(usalePercent) ? 0 : usalePercent;

        return {
          ...product,
          basePrice: bPrice,
          category: null,
          chargeTaxes: false,
          isPublished: true,
          key: index + 1,
          productType: null,
          sku: null,
          stockQuantity: 3,
          uproductId: null,
          usale: usalePercent,
          ushop: crawler.shop.id,
          ustatus: "unsaved",
          visibleInListings: true,
          wasPrice: wPrice,
          loading: false,
          errorMessage: null
        };
      });

      if (crawledData.length === 0) {
        const cleanedData = [
          {
            id: null,
            name: "Сонгоогүй",
            products: cleanedProducts,
            show: true
          }
        ];

        setCrawledData(cleanedData);
        /* medeelel db d hadgalj bga heseg */
        await saveCrawledDataFunction(cleanedData);
      } else {
        cleanedProducts.map(product => {
          crawledData.map(group => {
            const ins = group.products.find(p => p.url === product.url);
            if (ins) {
              let changed = false;
              if (ins.name !== product.name) {
                ins.name = product.name;
                changed = true;
              }
              if (ins.wasPrice !== product.wasPrice) {
                ins.wasPrice = product.wasPrice;
                changed = true;
              }
              if (ins.basePrice !== product.basePrice) {
                ins.name = product.name;
                changed = true;
              }
              if (
                JSON.stringify(ins.options) !== JSON.stringify(product.options)
              ) {
                ins.options = product.options;
                changed = true;
              }

              if (changed) {
                ins.ustatus = "unsaved";
              }
            }
          });
        });

        setCrawledData(JSON.parse(JSON.stringify(crawledData)));

        /* medeelel db d hadgalj bga heseg */
        await saveCrawledDataFunction(crawledData);
      }
    } else if (data.status === "error") {
      notify({
        text: data.errors.join(", ")
      });
    }
  };

  // if (
  //   crawlerInfo.current + crawlerInfo.errors === crawlerInfo.total &&
  //   crawlerInfo.total > 0 &&
  //   crawledData.length === 0
  // ) {
  //   receiveProductData();
  // }

  const BorderLinearProgress = withStyles(
    {
      bar: {
        backgroundColor: "#009688",
        borderRadius: 20
      },
      root: {
        backgroundColor: lighten("#009688", 0.5),
        height: 10
      }
    },
    { name: "CrawlerProcess" }
  )(LinearProgress);

  return (
    <>
      <Event event="crawler-outgoing" handler={crawlerHandler} />
      <Grid
        container
        style={{
          borderBottom: "1px solid #ddd",
          margin: "20px 0 15px",
          padding: "0 0 15px"
        }}
        alignItems="center"
      >
        <Grid item xs={4} className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            onClick={sendPostRequest}
            disabled={loading}
            className={buttonClassname}
          >
            START
          </Button>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}

          <Button onClick={receiveProductData} component="span">
            Get products
          </Button>
          <FormSpacer />
          <TextField
            required
            label="Limit"
            type="number"
            defaultValue={crawlerLimit}
            onChange={e => {
              setCrawlerLimit(Number(e.target.value));
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={8}>
          {crawlerInfo.total > 0 && (
            <span>
              {(
                ((crawlerInfo.current + crawlerInfo.errors) /
                  crawlerInfo.total) *
                100
              ).toFixed(2)}
              % - {crawlerInfo.current + crawlerInfo.errors} /{" "}
              {crawlerInfo.total} (success: {crawlerInfo.current}, error:{" "}
              {crawlerInfo.errors})
            </span>
          )}

          {crawlerInfo.current < crawlerInfo.total && (
            <>
              <BorderLinearProgress
                style={{ margin: 0 }}
                className={classes.margin}
                variant="determinate"
                color="secondary"
                value={
                  ((crawlerInfo.current + crawlerInfo.errors) /
                    crawlerInfo.total) *
                  100
                }
              />
            </>
          )}
        </Grid>
      </Grid>

      {crawledData.length > 0 && (
        <ProductsSave
          crawler={crawler}
          crawledData={crawledData}
          setCrawledData={setCrawledData}
          saveCrawledDataFunction={saveCrawledDataFunction}
          productSelection={productSelection}
        />
      )}
    </>
  );
};

export default CrawlerProcess;
