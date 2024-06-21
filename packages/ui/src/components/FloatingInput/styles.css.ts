import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";
import { recipe } from "@vanilla-extract/recipes";

export const inputBox = style({
  position: "relative",
});
export const inputBoxIconWrapper = style({
  position: "absolute",
  top: "50%",
  left: "16px",
  transform: "translateY(-50%)",
  zIndex: 2,
});

export const labelStyle = style({
  position: "absolute",
  left: "44px",
  top: "50%",
  transform: "translateY(-50%)",
  height: "20px",
  color: theme.colors.neutralGray500,
  transition: "transform 0.3s ease-in-out",
  ...theme.fonts[14],
});

export const input = recipe({
  base: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "48px",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "transparent",
    outline: "none",
    selectors: {
      "&:focus": {
        padding: "22px 16px 6px 44px",
        transform: "translateY(0) translate(0)",
        transition: "all 0.3s ease-in-out",
      },
      "&:not(:placeholder-shown)": {
        padding: "22px 16px 6px 44px",
        transform: "translateY(0) translate(0)",
        transition: "all 0.3s ease-in-out",
      },
    },
  },
  variants: {
    $isError: {
      true: {
        border: `1px solid ${theme.colors.red500}`,
        color: theme.colors.red500,
        selectors: {
          "&:focus": {
            border: `1px solid ${theme.colors.red500}`,
          },
        },
      },
      false: {
        border: `1px solid ${theme.colors.neutralGray300}`,
        color: theme.colors.neutralGray800,
        selectors: {
          "&:focus": {
            border: `1px solid ${theme.colors.blue500}`,
          },
        },
      },
    },
  },
});

export const iconWrapper = style({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  position: "absolute",
  right: "16px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: 0,
  zIndex: 1,
});

export const message = style({
  margin: "10px 0 0 0",
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.red500,
  textAlign: "left",
  ...theme.fonts[12],
});
