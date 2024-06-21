import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const tagList = style({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  maxWidth: "100%",
  overflowX: "auto",
  width: "100%",
  whiteSpace: "nowrap",
  paddingBottom: "8px",
  selectors: {
    "&::-webkit-scrollbar-track": {
      background: theme.colors.neutralGray200,
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundClip: "padding-box",
      border: `4px solid ${theme.colors.neutralGray400}`,
      borderRadius: "4px",
    },
  },
});
