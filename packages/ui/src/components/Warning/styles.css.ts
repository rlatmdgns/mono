import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const content = style({
  textAlign: "center",
  width: "520px",
  margin: "0 0 20px 0",
});

export const contentTitle = style({
  ...theme.fonts[24],
  fontWeight: theme.fontWeights.semiBold,
});

export const contentDescription = style({
  margin: "20px 0 0 0",
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
});
