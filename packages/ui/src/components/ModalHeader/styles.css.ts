import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "24px 20px",
  width: "auto",
  backgroundColor: theme.colors.white,
  borderRadius: "8px 8px 0 0",
});

export const contents = style({
  margin: 0,
  maxWidth: "calc(100% - 32px)",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const contentsTop = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const titleStyle = style({
  fontWeight: theme.fontWeights.semiBold,
  ...theme.fonts[16],
  color: theme.colors.neutralGray800,
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const subtitleStyle = style({
  marginTop: "4px",
  fontWeight: theme.fontWeights.medium,
  ...theme.fonts[12],
  color: theme.colors.neutralGray500,
});
