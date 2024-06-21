import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const content = style({
  width: '532px',
  padding: '24px',
  backgroundColor: theme.colors.white,
  borderRadius: '8px 8px 0 0',
})

export const titleText = style({
  ...theme.fonts[18],
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.neutralGray800,
})

export const subTitleText = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray600,
  marginTop: '8px',
})
