import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  padding: '24px',
})

export const bannerWrapper = style({
  padding: '20px',
  width: '100%',
  maxWidth: '322px',
  height: '108px',
  textAlign: 'center',
  backgroundColor: theme.colors.elevation50,
  border: `1px solid ${theme.colors.neutralGray100}`,
  borderRadius: '8px',
})

export const textStyle = style({
  width: '100%',
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.bold,
  color: theme.colors.neutralGray800,
})
