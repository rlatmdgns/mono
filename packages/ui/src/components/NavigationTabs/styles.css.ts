import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const tabsWrapper = style({
  width: "100%",
  height: "auto",
});

export const tabButtonListStyle = style({
  display: "flex",
  width: "100%",
  marginBottom: "20px",
  borderBottom: `1px solid ${theme.colors.elevation300}`,
});

export const tabButtonStyle = recipe({
  base: {
    position: "relative",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",

    ":focus": {
      outline: "none",
    },
  },
  variants: {
    size: {
      md: {
        gap: "4px",
        padding: "9px 20px",
      },
      lg: {
        gap: "6px",
        padding: "12px 20px",
      },
    },
    isActive: {
      true: {
        "::after": {
          content: "",
          position: "absolute",
          bottom: "-1px",
          left: "0",
          width: "100%",
          backgroundColor: theme.colors.blue500,
          borderBottom: `2px solid ${theme.colors.blue500}`,
          color: theme.colors.neutralGray800,
        },
        false: {
          borderBottom: "none",
        },
      },
    },
  },
});

export const tabContentListStyle = style({
  width: "100%",
});

export const tabContentStyle = style({
  display: "block",
  width: "100%",
  height: "auto",
});
