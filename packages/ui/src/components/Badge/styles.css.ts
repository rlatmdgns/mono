import { recipe } from '@vanilla-extract/recipes'
import { theme } from "../../globalTheme.css";

export const badge = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '2px 6px',
    maxWidth: '80px',
    height: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  variants: {
    type: {
      blueStrong: {
        backgroundColor: theme.colors.blue500,
      },
      blue: {
        backgroundColor: theme.colors.blue100,
      },
      red: {
        backgroundColor: theme.colors.red100,
      },
      gray: {
        backgroundColor: theme.colors.neutralGray100,
      },
      orange: {
        backgroundColor: theme.colors.orange200,
      },
      green: {
        backgroundColor: theme.colors.green200,
      },
    },
    isDisabled: {
      true: {
        opacity: 0.3,
      },
      false: {
        opacity: 1,
      },
    },
  },
  defaultVariants: {
    type: 'blue',
    isDisabled: false,
  },
})

export const label = recipe({
  base: {
    ...theme.fonts[11],
    fontWeight: theme.fontWeights.medium,
  },
  variants: {
    type: {
      blueStrong: {
        color: theme.colors.white,
      },
      blue: {
        color: theme.colors.blue500,
      },
      red: {
        color: theme.colors.red500,
      },
      gray: {
        color: theme.colors.neutralGray700,
      },
      orange: {
        color: theme.colors.orange700,
      },
      green: {
        color: theme.colors.green700,
      },
    },
  },
})
