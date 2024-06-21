import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../globalTheme.css";
import { keyframes } from "@vanilla-extract/css";

export const wrapper = recipe({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    userSelect: "none",
  },
  variants: {
    size: {
      xs: {
        gap: "3px",
        minWidth: "26px",
        height: "26px",
        padding: "1px 4px",
        fontWeight: theme.fontWeights.regular,
        ...theme.fonts[11],
      },
      sm: {
        gap: "4px",
        padding: "5px 8px",
        minWidth: "32px",
        height: "32px",
        fontWeight: theme.fontWeights.medium,
        ...theme.fonts[14],
        lineHeight: "22px",
      },
      md: {
        gap: "5px",
        padding: "9px 12px",
        minWidth: "40px",
        height: "40px",
        fontWeight: theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight: "22px",
      },
      lg: {
        gap: "6px",
        padding: "13px 12px",
        minWidth: "48px",
        height: "48px",
        fontWeight: theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight: "22px",
      },
      xl: {
        gap: "6px",
        padding: "13px 12px",
        minWidth: "56px",
        height: "56px",
        fontWeight: theme.fontWeights.semiBold,
        ...theme.fonts[15],
        lineHeight: "22px",
      },
    },
    state: {
      primary: {},
      secondary: {},
      danger: {},
    },
    style: {
      ["fill-strong"]: {},
      ["fill-weak"]: {},
      ["line"]: {},
      ["mono"]: {},
    },
  },
  compoundVariants: [
    {
      variants: {
        state: "primary",
        style: "fill-strong",
      },
      style: {
        color: theme.colors.white,
        backgroundColor: theme.colors.blue500,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray200,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.blue600,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.blue700,
          },
        },
      },
    },
    {
      variants: {
        state: "primary",
        style: "fill-weak",
      },
      style: {
        color: theme.colors.blue500,
        backgroundColor: theme.colors.blue100,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray200,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.blue200,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.blue300,
          },
        },
      },
    },
    {
      variants: {
        state: "primary",
        style: "line",
      },
      style: {
        color: theme.colors.blue500,
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.neutralGray200}`,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.white,
            border: `1px solid ${theme.colors.neutralGray200}`,
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.blue200,
            border: `1px solid ${theme.colors.blue200}`,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.blue300,
          },
        },
      },
    },
    {
      variants: {
        state: "primary",
        style: "mono",
      },
      style: {
        color: theme.colors.blue500,
        backgroundColor: "transparent",
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.white,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.blue100,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.blue200,
          },
        },
      },
    },
    // Secondary
    {
      variants: {
        state: "secondary",
        style: "fill-strong",
      },
      style: {
        color: theme.colors.white,
        backgroundColor: theme.colors.neutralGray800,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray200,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.neutralGray900,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.neutralGray200,
            border: "none",
          },
        },
      },
    },
    {
      variants: {
        state: "secondary",
        style: "fill-weak",
      },
      style: {
        color: theme.colors.neutralGray800,
        backgroundColor: theme.colors.neutralGray100,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray200,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.neutralGray200,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.neutralGray300,
            border: "none",
          },
        },
      },
    },
    {
      variants: {
        state: "secondary",
        style: "line",
      },
      style: {
        color: theme.colors.neutralGray800,
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.neutralGray200}`,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.white,
            border: `1px solid ${theme.colors.neutralGray200}`,
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.neutralGray200,
            border: `1px solid ${theme.colors.neutralGray200}`,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.neutralGray300,
            border: `1px solid ${theme.colors.neutralGray300}`,
          },
        },
      },
    },
    {
      variants: {
        state: "secondary",
        style: "mono",
      },
      style: {
        color: theme.colors.neutralGray800,
        backgroundColor: "transparent",
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.white,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.neutralGray100,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.neutralGray300,
            border: "none",
          },
        },
      },
    },
    // Danger
    {
      variants: {
        state: "danger",
        style: "fill-strong",
      },
      style: {
        color: theme.colors.white,
        backgroundColor: theme.colors.red500,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray100,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.red600,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.red700,
          },
        },
      },
    },
    {
      variants: {
        state: "danger",
        style: "fill-weak",
      },
      style: {
        color: theme.colors.red500,
        backgroundColor: theme.colors.red100,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray100,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.red200,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.red300,
          },
        },
      },
    },
    {
      variants: {
        state: "danger",
        style: "line",
      },
      style: {
        color: theme.colors.red500,
        backgroundColor: theme.colors.white,
        border: `1px solid ${theme.colors.neutralGray200}`,
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray100,
            border: `1px solid ${theme.colors.neutralGray200}`,
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.red100,
            border: `1px solid ${theme.colors.red100}`,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.red200,
          },
        },
      },
    },
    {
      variants: {
        state: "danger",
        style: "mono",
      },
      style: {
        color: theme.colors.red500,
        backgroundColor: "transparent",
        selectors: {
          [`&:disabled`]: {
            cursor: "not-allowed",
            color: theme.colors.neutralGray400,
            backgroundColor: theme.colors.neutralGray100,
            border: "none",
          },
          [`&:not(:disabled):hover`]: {
            backgroundColor: theme.colors.red100,
          },
          [`&:not(:disabled):active`]: {
            backgroundColor: theme.colors.red200,
          },
        },
      },
    },
  ],
});

const rotate = keyframes({
  "0%": {transform: "rotate(0deg)"},
  "100%": {transform: "rotate(360deg)"},
});

export const buttonLoading = recipe({
  base: {
    display: "inline-block",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    animation: `${rotate} 1s linear infinite`,
  },
  compoundVariants: [
    {
      variants: {
        state: "primary",
        style: "fill-strong",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.blue500,
      },
    },
    {
      variants: {
        state: "primary",
        style: "fill-weak",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.blue100,
      },
    },
    {
      variants: {
        state: "primary",
        style: "line",
      },
      style: {
        border: `2px solid ${theme.colors.blue500}`,
        borderBottomColor: theme.colors.white,
      },
    },
    {
      variants: {
        state: "primary",
        style: "mono",
      },
      style: {
        border: `2px solid ${theme.colors.blue500}`,
        borderBottomColor: theme.colors.white,
      },
    },
    // Secondary
    {
      variants: {
        state: "secondary",
        style: "fill-strong",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.neutralGray800,
      },
    },
    {
      variants: {
        state: "secondary",
        style: "fill-weak",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.neutralGray100,
      },
    },
    {
      variants: {
        state: "secondary",
        style: "line",
      },
      style: {
        border: `2px solid ${theme.colors.neutralGray800}`,
        borderBottomColor: theme.colors.white,
      },
    },
    {
      variants: {
        state: "secondary",
        style: "mono",
      },
      style: {
        border: `2px solid ${theme.colors.neutralGray800}`,
        borderBottomColor: theme.colors.white,
      },
    },
    // Danger
    {
      variants: {
        state: "danger",
        style: "fill-strong",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.red500,
      },
    },
    {
      variants: {
        state: "danger",
        style: "fill-weak",
      },
      style: {
        border: `2px solid ${theme.colors.white}`,
        borderBottomColor: theme.colors.red100,
      },
    },
    {
      variants: {
        state: "danger",
        style: "line",
      },
      style: {
        border: `2px solid ${theme.colors.red500}`,
        borderBottomColor: theme.colors.white,
      },
    },
    {
      variants: {
        state: "danger",
        style: "mono",
      },
      style: {
        color: theme.colors.red500,
        backgroundColor: "transparent",
      },
    },
  ],
});
