import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../../globalTheme.css";

export const wrapper = recipe({
  base: {
    display: "inline-block",
    height: "16px",
    borderRadius: "4px",
    padding: "1px 4px",
    ...theme.fonts[10],
    fontWeight: theme.fontWeights.medium,
    fontStyle: "normal",
  },
  variants: {
    authority: {
      evaluationMember: {
        color: theme.colors.blue500,
        backgroundColor: theme.colors.blue100,
      },
      recruitmentMember: {
        color: theme.colors.green500,
        backgroundColor: theme.colors.green100,
      },
      adminMember: {
        color: theme.colors.red500,
        backgroundColor: theme.colors.red100,
      },
    },
  },
});
