import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const box = style({
  position: "relative",
  backgroundColor: theme.colors.white,
});

export const input = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    background: "transparent",
  },
  variants: {
    size: {
      sm: {
        height: "32px",
        borderRadius: "4px",
      },
      md: {
        height: "40px",
        borderRadius: "6px",
      },
    },
  },
});

export const iconBox = style({
  position: "absolute",
  display: "flex",
  height: "16px",
  top: "50%",
  right: "12px",
  transform: "translateY(-50%)",
  pointerEvents: "none",
});
