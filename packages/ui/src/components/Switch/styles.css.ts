import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const switchInput = style({
  display: "none",
});

export const switchLabel = recipe({
  base: {
    position: "relative",
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    borderRadius: "32px",
    padding: "4px 0",
    transition: "background-color 400ms ease-in-out",
  },
  variants: {
    size: {
      xs: {
        width: "32px",
        height: "16px",
      },
      sm: {
        width: "48px",
        height: "24px",
      },
      md: {
        width: "64px",
        height: "32px",
      },
      lg: {
        width: "80px",
        height: "40px",
      },
    },
    isChecked: {
      true: {
        background: theme.colors.blue500,
      },
      false: {
        background: theme.colors.neutralGray200,
      },
    },
    isDisabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
      },
      false: {
        opacity: 1,
        cursor: "pointer",
      },
    },
  },
});

export const switchToggle = recipe({
  base: {
    position: "absolute",
    top: "50%",
    background: theme.colors.white,
    transform: "translate(0, -50%)",
    borderRadius: "50%",
    transition: "left 400ms ease-in-out",
  },
  variants: {
    size: {
      xs: {
        width: "10px",
        height: "10px",
      },
      sm: {
        width: "16px",
        height: "16px",
      },
      md: {
        width: "24px",
        height: "24px",
      },
      lg: {
        width: "32px",
        height: "32px",
      },
    },
    isDisabled: {
      true: {boxShadow: "none"},
      false: {boxShadow: "0px 4px 16px 0px rgba(126, 148, 189, 0.40)"},
    },
  },
});
