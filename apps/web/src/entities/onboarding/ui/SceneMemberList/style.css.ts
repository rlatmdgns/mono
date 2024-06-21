import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '8px',
  width: '100%',
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    width: '14px',
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: theme.colors.neutralGray50,
    borderLeft: `1px solid ${theme.colors.neutralGray200}`,
    borderRight: `1px solid ${theme.colors.neutralGray200}`,
  },

  '::-webkit-scrollbar-thumb': {
    backgroundClip: 'padding-box',
    backgroundColor: theme.colors.neutralGray300,
    borderLeft: '3px solid transparent',
    borderRight: '3px solid transparent',
    borderTop: '2px solid transparent',
    borderBottom: '2px solid transparent',
    borderRadius: '6px',
  },
})

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '4px 8px',
  borderRadius: '6px',
  cursor: 'pointer',

  ':hover': {
    background: theme.colors.neutralGray50,
  },
})

export const info = style({
  display: 'flex',
  flex: '0 0 calc(100% - 20px)',
  flexDirection: 'column',
  alignItems: 'flex-start',
})

export const nameStyle = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

export const emailStyle = style({
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})

export const noData = style({
  marginTop: '88px',
  padding: '4px 8px',
  width: '100%',
  textAlign: 'center',
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})
