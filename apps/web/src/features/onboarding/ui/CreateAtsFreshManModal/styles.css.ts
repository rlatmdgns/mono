import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const content = style({
  width: '950px',
  backgroundColor: theme.colors.white,
  padding: '24px 20px',
})

export const footerSwitchBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginRight: 'auto',
})

export const footerSwitchText = style({
  ...theme.fonts['16'],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

export const footerButtonBox = style({
  display: 'flex',
  gap: '12px',
})
