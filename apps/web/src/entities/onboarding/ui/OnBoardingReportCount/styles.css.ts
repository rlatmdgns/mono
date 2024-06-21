import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const countWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.semiBold,
})
export const title = style({
  color: theme.colors.neutralGray800,
})

export const countBox = style({
  color: theme.colors.blue500,
  fontStyle: 'normal',
})
