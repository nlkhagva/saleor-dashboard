import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import React, { useRef,useState } from "react";
import { useIntl } from "react-intl";

import FulfillmentRender from "./FulfillmentRender";

// import { useOrdernumber } from "../../queries";

export interface OrdernumberProps {
  routeParams: any;
  lines: any;
  setLines: any;
}

const useStyles = makeStyles(
  theme => ({
    button: {
      "&:hover": {
        color: "red"
      }
    },
    input: {
      marginBottom: "1rem"
    },
    root: {
      "& > svg": {
        margin: theme.spacing(2)
      }
    }
  }),
  { name: "Ordernumber" }
);

const Ordernumber: React.FC<OrdernumberProps> = ({
  lines,
  routeParams,
  setLines
}) => {
  const intl = useIntl();
  const classes = useStyles({});

  const inputRef = useRef();

  const [ordernumber, setOrdernumber] = useState(
    routeParams?.ordernumber || ""
  );

  const loadFulfillment = () => {
    setOrdernumber((inputRef.current as HTMLInputElement).value);
    // console.log(inputRef.current.value);
    // setOrdernumber(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        className={classes.input}
        label={intl.formatMessage({
          defaultMessage: "Англи дэлгүүрийн захиалгын дугаар"
        })}
        name="ordernumber"
        defaultValue={ordernumber}
        inputRef={inputRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={loadFulfillment}>
                <YoutubeSearchedForIcon style={{ margin: 0 }} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <FulfillmentRender
        ordernumber={ordernumber}
        setLines={setLines}
        lines={lines}
      />
    </>
  );
};

Ordernumber.displayName = "Ordernumber";
export default Ordernumber;
