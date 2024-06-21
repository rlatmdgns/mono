import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginBottom: '12px',
})

export const textareaWrapper = style({
  marginBottom: '12px',
})

export const countWrapper = style({
  textAlign: 'end',
  marginTop: '12px',
  ...theme.fonts[12],
  color: theme.colors.neutralGray400,
  fontWeight: theme.fontWeights.medium,
})

export const count = style({
  ...theme.fonts[12],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
})

export const optionList = style({
  display: 'flex',
  justifyContent: 'space-between',
})
export const optionInputWrapper = recipe({
  base: {
    display: 'flex',
    flex: '1 1 calc(100% - 20px)',
    alignItems: 'center',
    gap: '6px',
  },
  variants: {
    type: {
      choice: {
        ':before': {
          content: '',
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: `1px solid ${theme.colors.neutralGray800}`,
          backgroundColor: theme.colors.neutralGray200,
        },
      },
      multi_choice: {
        ':before': {
          content: '',
          display: 'inline-block',
          width: '14px',
          height: '14px',
          borderRadius: '4px',
          border: `1px solid ${theme.colors.blue500}`,
          backgroundColor: theme.colors.neutralGray200,
        },
      },
    },
  },
})
export const optionInput = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  ...theme.fonts[14],
  color: theme.colors.neutralGray800,
  '::placeholder': {
    color: theme.colors.neutralGray400,
  },
})
