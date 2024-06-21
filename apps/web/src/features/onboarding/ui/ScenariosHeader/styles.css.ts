import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 0',
  marginBottom: '12px',
})

export const title = style({
  ...theme.fonts[16],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.semiBold,
})

export const number = style({
  color: theme.colors.blue500,
  marginLeft: '4px',
})
