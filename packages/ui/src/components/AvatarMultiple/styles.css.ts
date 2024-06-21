import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../globalTheme.css";

export const lengthStyle = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-8px",
    width: "32px",
    height: "32px",
    ...theme.fonts[12],
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutralGray600,
    backgroundColor: theme.colors.neutralGray100,
    borderRadius: "50%",
    border: `1px solid ${theme.colors.white}`,

    ":before": {
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      content: "",
      width: "32px",
      height: "32px",
      backgroundColor: theme.colors.blue500,
      borderRadius: "50%",
      opacity: "0",
    },
  },

  variants: {
    size: {
      sm: {
        width: "20px",
        height: "20px",
        ...theme.fonts[10],

        ":before": {
          width: "20px",
          height: "20px",
        },
      },
    },
  },
});

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

globalStyle(
  `${wrapper}:hover ${lengthStyle}, ${wrapper}:active ${lengthStyle}`,
  {
    color: theme.colors.white,
    backgroundColor: theme.colors.blue500,
  },
);

globalStyle(`${wrapper}:hover li:after`, {
  opacity: 0.5,
});

globalStyle(`${wrapper}:active li:after`, {
  opacity: 0.75,
});

export const list = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    width: "78px",
    height: "32px",
    backgroundSize: "contain",
  },
  variants: {
    size: {
      sm: {
        width: "44px",
        height: "20px",
      },
    },
  },
});

export const item = recipe({
  base: {
    position: "relative",

    selectors: {
      "& + &": {
        marginLeft: "-8px",
      },
    },

    ":after": {
      position: "absolute",
      top: "0",
      left: "0",
      display: "block",
      content: "",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      backgroundColor: theme.colors.blue500,
      opacity: "0",
    },
  },
  variants: {
    size: {
      sm: {
        ":after": {
          width: "20px",
          height: "20px",
        },
      },
    },
  },
});

export const unknownAvatar = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "32px",
  height: "32px",
  backgroundColor: theme.colors.white,
  border: `1px dashed ${theme.colors.neutralGray200}`,
  borderRadius: "50%",
});
