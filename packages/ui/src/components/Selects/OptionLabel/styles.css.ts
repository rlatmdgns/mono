import { style } from "@vanilla-extract/css";
import { theme } from "../../../globalTheme.css";
import { recipe } from "@vanilla-extract/recipes";

export const formatGroupLabel = style({
  height: "36px",
  display: "flex",
  alignItems: "center",
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray400,
});

export const optionLabel = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const optionLabelText = recipe({
  variants: {
    isOverflowTooltip: {
      true: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  },
});

export const chip = style({
  marginLeft: "auto",
});

export const memberOptionLabel = style({
  display: "flex",
  width: "100%",
  minWidth: "96px",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
});

export const memberOptionContent = style({
  display: "flex",
  width: "calc(100% - 30px)",
  minWidth: "66px",
  flex: "0 0 calc(100% - 30px)",
  gap: "10px",
  alignItems: "center",
});

export const memberOptionLabelText = style({
  color: theme.colors.neutralGray700,
  fontWeight: theme.fontWeights.medium,
  ...theme.fonts[14],
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const googleIcon = style({
  width: "18px",
  height: "18px",
});

export const formatOptionLabel = style({
  width: "100%",
  height: "106px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const formatOptionLabelText = style({
  textAlign: "center",
  marginBottom: "20px",
});
