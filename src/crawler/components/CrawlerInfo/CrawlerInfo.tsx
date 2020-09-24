import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import CardTitle from "@saleor/components/CardTitle";
import FormSpacer from "@saleor/components/FormSpacer";
import React from "react";
import { useIntl } from "react-intl";

import { FormData } from "../CrawlerDetailsPage";

export type FormErrors<TKeys extends string> = Partial<Record<TKeys, string>>;

export interface CrawlerInfoProps {
  crawler: any;
  data: FormData;
  disabled: boolean;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const styles = createStyles({
  root: {
    overflow: "visible"
  }
});

const CrawlerInfo = withStyles(styles, {
  name: "CrawlerInfo"
})(
  ({
    classes,
    crawler,
    data,
    disabled,
    onChange
  }: CrawlerInfoProps & WithStyles<typeof styles>) => {
    const intl = useIntl();

    // console.log(lkUrl)
    // console.log(crawler)

    return (
      <Card className={classes.root}>
        <CardTitle
          title={intl.formatMessage({
            defaultMessage: "Ерөнхий мэдээлэл",
            description: "form head"
          })}
        />

        <CardContent>
          <TextField
            name={"url" as keyof FormData}
            disabled={disabled}
            label={"URL"}
            value={data.url}
            onChange={onChange}
            fullWidth
          />
          <FormSpacer />
          {crawler && (
            <>
              <TextField
                name={"listSelection" as keyof FormData}
                disabled={disabled}
                label={"List Selection"}
                value={data.listSelection}
                onChange={onChange}
                fullWidth
              />
              <FormSpacer />
              <TextField
                name={"productSelection" as keyof FormData}
                disabled={disabled}
                label={"Product Selection"}
                value={data.productSelection}
                onChange={onChange}
                fullWidth
              />

              <FormSpacer />
            </>
          )}
        </CardContent>
      </Card>
    );
  }
);
CrawlerInfo.displayName = "CrawlerInfo";
export default CrawlerInfo;
