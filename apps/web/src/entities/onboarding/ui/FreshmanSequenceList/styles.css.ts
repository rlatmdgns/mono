import { theme } from '@/styles/globalTheme.css'
import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const listWrapper = style({
  padding: `16px 10px 24px 24px`,
  height: `calc(100vh - 186px)`,
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    width: '14px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: theme.colors.neutralGray50,
    borderLeft: `1px solid ${theme.colors.neutralGray200}`,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundClip: 'padding-box',
    backgroundColor: theme.colors.neutralGray300,
    borderLeft: '3px solid transparent',
    borderRight: '2px solid transparent',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    borderRadius: '6px',
  },
})

globalStyle(`${listWrapper}::-webkit-scrollbar-thumb:hover`, {
  backgroundClip: 'padding-box',
  backgroundColor: theme.colors.neutralGray300,
  borderLeft: '3px solid transparent',
  borderRight: '2px solid transparent',
  borderTop: '2px solid transparent',
  borderBottom: '2px solid transparent',
  borderRadius: '6px',
})

export const sequencesWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
  maxWidth: '322px',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
})

export const item = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  height: '48px',
})

export const statusWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '16px',
  height: '16px',
})

globalStyle(`${item}:not(:last-of-type)::after`, {
  position: 'absolute',
  content: '""',
  top: '34px',
  left: '7px',
  width: '2px',
  height: '36px',
  backgroundColor: theme.colors.neutralGray200,
  borderRadius: '9px',
})

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '4px',
  padding: '13px 12px',
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.neutralGray100}`,
  borderRadius: '6px',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.neutralGray50,
  },

  ':active': {
    backgroundColor: theme.colors.neutralGray100,
  },
})

export const title = style({
  maxWidth: '160px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',

  '@media': {
    'only screen and (min-width : 800px)': {
      maxWidth: '180px',
    },
  },
})

export const status = recipe({
  base: {
    ...theme.fonts[11],
    fontWeight: theme.fontWeights.medium,
    color: theme.colors.neutralGray500,
  },
  variants: {
    isToday: {
      true: {
        color: theme.colors.badgeGreen,
      },
    },
  },
})

export const dot = style({
  padding: '4px',
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.colors.neutralGray200,
})
