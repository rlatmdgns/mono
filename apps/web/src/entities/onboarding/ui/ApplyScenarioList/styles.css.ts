import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const list = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'flex-start',
  gap: '8px',
  padding: '20px',
  width: '100%',
  minHeight: '375px',
})

export const item = style({
  padding: '16px',
  width: '269px',
  height: '86px',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.elevation200}`,
  borderRadius: '6px',
  boxShadow: '0px 2px 30px 0px rgba(194, 205, 225, 0.18)',
})

export const topWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
  width: '100%',
})

export const titleStyle = style({
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
})

export const descStyle = style({
  height: '22px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
})
