import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const bodyWrapper = style({
  width: '100%',
})

export const addEvaluationWrapper = style({
  display: 'flex',
  justifyContent: 'center',
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '16px',
})

export const item = style({
  padding: '20px',
  background: theme.colors.white,
  borderRadius: '4px',
})

export const questionInput = style({
  marginBottom: '12px',
  padding: '0',
  width: '100%',
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
  border: 'none',

  '::placeholder': {
    color: theme.colors.neutralGray400,
  },

  ':focus': {
    outline: 'none',
  },
})
