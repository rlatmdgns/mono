import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: theme.colors.red500,
  fontWeight: theme.fontWeights.semiBold,
  marginTop: "8px",
  ...theme.fonts[12],
});
