import { theme } from "../../globalTheme.css";
import { recipe } from "@vanilla-extract/recipes";

export const shadow = recipe({
  base: {
    display: "inline-block",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.elevation100}`,
    borderRadius: "4px",
  },
  variants: {
    type: {
      shadowInner: {
        boxShadow: "0px 1px 4px 0px rgba(2, 44, 111, 0.06)",
      },
      shadow100: {
        boxShadow: "0px 1px 1px 0px rgba(2, 44, 111, 0.06)",
      },
      shadow200: {
        boxShadow:
          "0px 0px 3px 0px rgba(2, 44, 111, 0.06), 0px 1px 2px 0px rgba(2, 44, 111, 0.06)",
      },
      shadow300: {
        boxShadow:
          "0px 0px 8px -1px rgba(2,44, 111, 0.06), 0px 2px 4px -1px rgba(2,44, 111, 0.06)",
      },
      shadow400: {
        boxShadow:
          "0px 0px 18px -5px rgba(2,44, 111, 0.06), 0px 6px 14px -2px rgba(2,44, 111, 0.06)",
      },
      shadow500: {
        boxShadow:
          "0px 0px 20px 0px rgba(2,44, 111, 0.06), 0px 12px 16px -6px rgba(2,44, 111, 0.06)",
      },
      shadow600: {
        boxShadow:
          "0px 0px 20px 0px rgba(2,44, 111, 0.08), 0px 24px 50px -4px rgba(2,44, 111, 0.08)",
      },
      shadow700: {
        boxShadow:
          "0px 0px 20px 0px rgba(2,44, 111, 0.10), 0px 20px 40px -4px rgba(2,44, 111, 0.08)",
      },
    },
  },
});
