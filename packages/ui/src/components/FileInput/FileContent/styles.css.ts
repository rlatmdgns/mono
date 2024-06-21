import { style } from "@vanilla-extract/css";
import { theme } from "../../../globalTheme.css";

export const wrapper = style({
  width: "100%",
  height: "40px",
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.colors.white,
  borderRadius: "6px",
  boxShadow: "0 2px 10px 0 rgba(166, 183, 216, 0.3)",
  padding: "0 4px 0 12px",
  gap: "8px",
});

export const fileName = style({
  maxWidth: "90%",
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
  marginRight: "auto",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  ...theme.fonts[14],
});
