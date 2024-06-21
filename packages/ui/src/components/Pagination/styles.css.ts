import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style({
  display: "flex",
  alignItems: "center",
  padding: "10px",
  justifyContent: "center",
  borderTop: `1px solid ${theme.colors.neutralGray200}`,
});

export const list = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  margin: "0 12px",
});

export const styledLink = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    borderRadius: "4px",
    fontWeight: theme.fontWeights.semiBold,
    ...theme.fonts[14],
  },
  variants: {
    isActive: {
      true: {
        color: theme.colors.white,
        background: theme.colors.blue500,
        selectors: {
          ["&:hover"]: {
            background: theme.colors.blue500,
          },
        },
      },
      false: {
        color: theme.colors.neutralGray400,
        background: theme.colors.white,
        selectors: {
          ["&:hover"]: {
            background: theme.colors.neutralGray100,
          },
        },
      },
    },
  },
});
