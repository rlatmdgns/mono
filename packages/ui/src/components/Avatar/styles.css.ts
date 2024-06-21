import { createVar, style } from "@vanilla-extract/css";
import { theme } from "../../globalTheme.css";

export const avatarSize = createVar();
export const avatarFontSize = createVar();
export const avatarBorder = createVar();
export const avatarBackground = createVar();
export const avatarIsDisabled = createVar();

export const avatar = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%;",
  overflow: "hidden",
  width: avatarSize,
  height: avatarSize,
  fontSize: avatarFontSize,
  border: avatarBorder,
  color: theme.colors.white,
  background: avatarBackground,
  fontWeight: theme.fontWeights.medium,
  selectors: {
    "&:after": {
      display: avatarIsDisabled,
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: theme.colors.white,
      borderRadius: "50%",
      opacity: "0.8",
    },
  },
});

export const avatarImage = style({
  objectFit: "cover",
  borderRadius: "50%",
});
