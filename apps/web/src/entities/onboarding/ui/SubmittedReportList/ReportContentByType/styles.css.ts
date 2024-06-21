import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export const item = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const label = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

export const textWrapper = style({
  padding: '12px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.neutralGray200}`,
  borderRadius: '6px',
  whiteSpace: 'pre-wrap',
})
