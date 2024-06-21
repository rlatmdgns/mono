import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const headerStyle = style({
  display: 'flex',
  width: '100%',
  padding:'16px',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  zIndex: 10,
  background: theme.colors.white,
})
export const buttons = style({
  display: 'flex',
  paddingRight: '16px',
})

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
})

export const titleStyle = style({
  ...theme.fonts[18],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.semiBold,
})

export const buttonWrapper = style({
  display: 'flex',
  padding:'8px 12px',
  alignItems: 'center',
  borderRadius: '6px',
  backgroundColor: theme.colors.elevation200
})