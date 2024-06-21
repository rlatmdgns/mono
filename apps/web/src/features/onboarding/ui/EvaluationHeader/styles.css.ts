import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const evaluationHeader = style({
  width: '100%',
  padding: '20px',
  backgroundColor: theme.colors.white,
  borderRadius: '4px',
})

export const titleStyle = style({
  marginBottom: '8px',
  width: '100%',
  ...theme.fonts[22],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
  border: 'none',

  '::placeholder': {
    color: theme.colors.neutralGray400,
  },

  ':focus': {
    outline: 'none',
  },
})

export const descriptionStyle = style({
  width: '100%',
  ...theme.fonts[14],
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
