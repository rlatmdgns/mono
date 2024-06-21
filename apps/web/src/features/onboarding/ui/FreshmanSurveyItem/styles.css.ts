import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

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
