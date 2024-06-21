import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  width: "580px",
  backgroundColor: theme.colors.white,
  borderRadius: "4px",
  boxShadow: "0px 4px 30px 0px rgba(161, 176, 203, 0.26)",
});

export const contents = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "24px",
});

export const titleStyle = style({
  ...theme.fonts[18],
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.neutralGray800,
});

export const subtitleStyle = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray600,
});

export const iconWrapper = style({
  padding: "10px",
  width: "40px",
  height: "40px",
  backgroundColor: theme.colors.neutralGray100,
  borderRadius: "8px",
});
