import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "32px 40px",
});

export const titleStyle = style({
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.neutralGray800,
  ...theme.fonts[18],
});

export const descriptionStyle = style({
  margin: "8px 0 0 0",
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray400,
  ...theme.fonts[14],
});
