import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const item = style({
  padding: '20px',
  backgroundColor: theme.colors.elevation100,
  borderRadius: '4px',
})

export const titleStyle = style({
  marginBottom: '12px',
  ...theme.fonts[15],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})
