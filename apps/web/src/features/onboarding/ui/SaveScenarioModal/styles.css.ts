import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

const inputStyle = {
  width: '100%',
  color: theme.colors.neutralGray800,
  border: 'none',
  outline: 'none',

  '::placeholder': {
    color: theme.colors.neutralGray400,
  },
}

export const wrapper = style({
  backgroundColor: theme.colors.white,
  borderRadius: '8px',
})

export const content = style({
  padding: '20px',
})

export const titleInput = style({
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.semiBold,
  marginBottom: '4px',
  ...inputStyle,
})

export const descriptionInput = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  ...inputStyle,
})

export const emptySequenceDescription = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
  padding: '10px 20px',
})
