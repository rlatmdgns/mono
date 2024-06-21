import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  width: '458px',
  padding: '20px',
  gap: '12px',
  background: theme.colors.white,
})

export const sectionWrapper = style({})

export const sectionTitle = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  marginBottom: '8px',
  ...theme.fonts[14],
  color: theme.colors.neutralGray800,
})

export const required = style({
  color: theme.colors.red500,
})

export const joinDateStyle = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '4px',
  gap: '4px',
  color: theme.colors.blue500,
  ...theme.fonts[12],
})
