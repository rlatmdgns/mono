import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const labelText = style({
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
  ...theme.fonts[14],
  lineHeight: "16px",
});

export const textareaStyle = recipe({
  base: {
    width: "100%",
    height: "120px",
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.neutralGray200}`,
    borderRadius: "6px",
    padding: "8px 12px",
    color: theme.colors.neutralGray700,
    fontWeight: theme.fontWeights.medium,
    resize: "none",
    outline: "none",
    ...theme.fonts[14],
    selectors: {
      ["&::placeholder"]: {
        color: theme.colors.neutralGray400,
      },
      ["&::-webkit-scrollbar"]: {
        width: "4px",
        height: "4px",
      },
      ["&::-webkit-scrollbar-track"]: {
        background: theme.colors.neutralGray100,
      },
      ["&::-webkit-scrollbar-thumb"]: {
        border: `4px solid ${theme.colors.neutralGray300}`,
      },
      ["&:hover:not(:disabled, :focus)"]: {
        borderColor: theme.colors.neutralGray400,
      },
      ["&:disabled"]: {
        backgroundColor: theme.colors.neutralGray100,
        cursor: "not-allowed",
      },
      ["&:disabled::placeholder"]: {
        color: theme.colors.neutralGray400,
      },
    },
  },
  variants: {
    state: {
      success: {
        selectors: {
          ["&:focus"]: {
            border: `1px solid ${theme.colors.blue500}`,
            boxShadow: "0 2px 10px 0 rgba(70, 142, 255, 0.2)",
          },
        },
      },
      error: {
        selectors: {
          ["&:focus"]: {
            border: `1px solid ${theme.colors.red500}`,
            boxShadow: "0 2px 10px 0 rgba(255, 91, 70, 0.20)",
          },
        },
      },
    },
  },
});

export const textBox = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const supportiveBox = style({
  display: "flex",
  gap: "4px",
});

export const supportiveTextStyle = style({
  width: "calc(100% - 20px)",
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.red500,
});

export const countBox = style({
  marginLeft: "auto",
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray400,
  ...theme.fonts[12],
});

export const currentCount = style({
  color: theme.colors.neutralGray800,
  selectors: {
    ["&::after"]: {
      content: "/",
      margin: "0 2px",
    },
  },
});
