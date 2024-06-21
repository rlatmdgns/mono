import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  width: '282px',
  marginBottom: '16px',
  padding: '17px',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  borderRadius: '8px',
  background: theme.colors.white,
  boxShadow: '0px 20px 40px 0px rgba(161, 176, 203, 0.10)',
  zIndex: 5,
})

export const iconStyle = style({
  display: 'block',
})

export const titleStyle = style({
  marginBottom: '8px',
  color: theme.colors.neutralGray800,
  textAlign: 'center',
  fontWeight: 700,
  ...theme.fonts[16],
})

export const titleLine = style({
  display: 'block',
})

export const descriptionStyle = style({
  color: theme.colors.neutralGray600,
  textAlign: 'center',
  fontWeight: 400,
  ...theme.fonts[14],
})
