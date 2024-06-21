import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px",
    width: "auto",
    backgroundColor: theme.colors.white,
    borderTop: `1px solid ${theme.colors.neutralGray200}`,
    borderRadius: "0 0 8px 8px",
  },
  variants: {
    hasSelect: {
      false: { justifyContent: "flex-end" },
      true: { justifyContent: "space-between" },
    },
  },
});

export const selectWrapper = style({
  marginLeft: "auto",
});
