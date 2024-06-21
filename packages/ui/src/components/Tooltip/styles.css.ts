import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const parent = style({});
export const tooltipStyle = recipe({
  base: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "max-content",
    display: "flex",
    alignItems: "center",
    padding: "10px 12px",
    borderRadius: "6px",
    background: "#373d3f",
    color: theme.colors.white,
    ...theme.fonts[12],
    selectors: {
      [`${parent} &:after`]: {
        content: "",
        position: "absolute",
        display: "block",
        width: "5px",
        height: "8px",
        backgroundRepeat: "no-repeat",
      },
    },
  },
  variants: {
    direction: {
      top: {
        selectors: {
          [`${parent} &:after`]: {
            left: "50%",
            bottom: "-6px",
            transform: "translateX(-50%) rotate(-90deg)",
          },
        },
      },
      left: {
        selectors: {
          [`${parent} &:after`]: {
            right: "-5px",
            top: "50%",
            transform: "translateY(-50%) rotate(180deg)",
          },
        },
      },
      right: {
        selectors: {
          [`${parent} &:after`]: {
            left: "-5px",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },
      bottom: {
        selectors: {
          [`${parent} &:after`]: {
            left: "50%",
            top: "-6px",
            transform: "translateX(-50%) rotate(90deg)",
          },
        },
      },
    },
  },
});
export const iconStyle = style({
  width: "18px",
  height: "18px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "6px",
});
