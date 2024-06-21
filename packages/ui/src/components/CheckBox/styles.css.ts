import { theme } from "../../globalTheme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const baseStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
};

export const wrapper = style({
  display: "flex",
  alignItems: "center",
});

export const label = recipe({
  base: {
    ...baseStyle,
  },
  variants: {
    size: {
      md: {
        width: "16px",
        height: "16px",
        padding: "1px",
      },
      lg: {
        width: "20px",
        height: "20px",
        padding: "2px",
      },
    },
    type: {
      primary: {
        ":hover": {
          background: theme.colors.blue100,
        },
      },
      secondary: {
        ":hover": {
          background: theme.colors.neutralGray100,
        },
      },
    },
    disabled: {
      true: {
        pointerEvents: "none",
        cursor: "not-allowed",
        opacity: 0.5,
      },
      false: {
        cursor: "pointer",
        opacity: 1,
      },
    },
    isActive: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    isActive: false,
  },
});

export const container = recipe({
  base: {
    ...baseStyle,
  },
  variants: {
    size: {
      md: {
        width: "14px",
        height: "14px",
      },
      lg: {
        width: "16px",
        height: "16px",
      },
    },
    isActive: {
      true: {},
      false: {
        border: "none",
      },
    },
  },
  defaultVariants: {
    size: "md",
    isActive: false,
  },
});

export const inner = recipe({
  base: {
    ...baseStyle,
  },
  variants: {
    size: {
      md: {
        width: "14px",
        height: "14px",
      },
      lg: {
        width: "16px",
        height: "16px",
      },
    },
    isActive: {
      true: {},
      false: {
        backgroundColor: "none",
      },
    },
    type: {
      primary: {},
      secondary: {},
    },
  },
  compoundVariants: [
    {
      variants: {isActive: true, type: "primary"},
      style: {
        backgroundColor: theme.colors.blue500,
        border: `1px solid ${theme.colors.blue500}`,
      },
    },
    {
      variants: {isActive: true, type: "secondary"},
      style: {
        backgroundColor: theme.colors.neutralGray700,
        border: `1px solid ${theme.colors.neutralGray700}`,
      },
    },
    {
      variants: {isActive: false, type: "primary"},
      style: {
        border: `1px solid ${theme.colors.blue500}`,
      },
    },
    {
      variants: {isActive: false, type: "secondary"},
      style: {
        border: `1px solid ${theme.colors.neutralGray700}`,
      },
    },
  ],
  defaultVariants: {
    size: "md",
    type: "primary",
    isActive: false,
  },
});

export const input = style({
  display: "none",
});

export const textWrapper = style({
  marginLeft: "4px",
});
