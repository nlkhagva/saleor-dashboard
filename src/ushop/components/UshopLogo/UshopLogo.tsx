import photoIcon from "@assets/images/photo-icon.svg";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { maybe } from "@saleor/misc";
import { UshopUpdate_ushopUpdate_shop } from "@saleor/ushop/types/UshopUpdate";
import React from "react";
import SVG from "react-inlinesvg";
import { FormattedMessage } from "react-intl";

export interface Props {
  onImageUpload: (file: File) => void | null;
  ushop: UshopUpdate_ushopUpdate_shop | null;
}

const useStyles = makeStyles(
  theme => ({
    avatar: {
      "& svg": {
        fill: "#fff"
      },
      "&:hover $avatarHover": {
        opacity: 1
      },
      alignItems: "center",
      borderRadius: "100%",
      display: "grid",
      height: 120,
      justifyContent: "center",
      overflow: "hidden",
      position: "relative",
      width: 120
    },
    avatarActionText: {
      "&:hover": {
        textDecoration: "underline"
      },
      color: "#fff",
      cursor: "pointer",
      fontSize: 12
    },
    avatarDefault: {
      "& div": {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
        lineHeight: "120px"
      },
      background: theme.palette.primary.main,
      height: 120,
      textAlign: "center",
      width: 120
    },
    avatarHover: {
      background: "#00000080",
      borderRadius: "100%",
      fontSize: 12,
      fontWeight: 500,
      height: 120,
      opacity: 0,
      padding: theme.spacing(2.5, 0),
      position: "absolute",
      textAlign: "center",
      textTransform: "uppercase",
      transition: "opacity 0.5s",
      width: 120
    },
    avatarImage: {
      pointerEvents: "none",
      width: "100%"
    },
    fileField: {
      display: "none"
    },
    prop: {
      marginBottom: theme.spacing(2)
    },
    propGrid: {
      display: "grid",
      gridColumnGap: theme.spacing(2),
      gridRowGap: theme.spacing(1),
      gridTemplateColumns: "1fr 1fr",
      [theme.breakpoints.down("xs")]: {
        gridTemplateColumns: "1fr"
      }
    },
    root: {
      display: "grid",
      gridColumnGap: theme.spacing(4),
      gridTemplateColumns: "120px 1fr"
    }
  }),
  { name: "UshopLogo" }
);

const UshopLogo: React.FC<Props> = props => {
  const { onImageUpload, ushop } = props;
  const classes = useStyles(props);
  const imgInputAnchor = React.createRef<HTMLInputElement>();

  const clickImgInput = () => imgInputAnchor.current.click();

  return (
    <div>
      <div className={classes.avatar}>
        {maybe(() => ushop.logoImage.url) ? (
          <img
            className={classes.avatarImage}
            src={maybe(() => ushop.logoImage.url)}
          />
        ) : (
          <div className={classes.avatarDefault}>
            <Typography>LG</Typography>
          </div>
        )}
        <div className={classes.avatarHover}>
          <SVG src={photoIcon} />
          <Typography
            onClick={clickImgInput}
            className={classes.avatarActionText}
          >
            <FormattedMessage
              defaultMessage="Change photo"
              description="button"
            />
          </Typography>
          {/* <Typography
          onClick={onImageDelete}
          className={classes.avatarActionText}
        >
          <FormattedMessage
            defaultMessage="Delete photo"
            description="button"
          />
        </Typography> */}
          <input
            className={classes.fileField}
            id="fileUpload"
            onChange={event => onImageUpload(event.target.files[0])}
            type="file"
            ref={imgInputAnchor}
          />
        </div>
      </div>
    </div>
  );
};

UshopLogo.displayName = "UshopLogo";
export default UshopLogo;
