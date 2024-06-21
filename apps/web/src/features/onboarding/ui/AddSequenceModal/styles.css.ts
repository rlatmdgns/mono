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

export const radioWrapper = style({
  display: 'flex',
  gap: '10px',
  marginBottom: '24px',
})

export const dateWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const labelWrapper = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flex: 1,
})

export const enterTitle = style({
  padding: '9px 12px',
  borderRadius: '6px',
  ...theme.fonts[14],
  color: theme.colors.neutralGray500,
})

export const formWrapper = style({
  flex: 1,
})

export const sequenceTitle = style({
  ...theme.fonts[14],
})
