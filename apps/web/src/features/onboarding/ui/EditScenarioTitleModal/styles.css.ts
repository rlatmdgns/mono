import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  width: '523px',
  backgroundColor: theme.colors.white,
  borderRadius: '8px',
})

export const header = style({
  padding: '20px',
})

export const titleStyle = style({
  marginBottom: '4px',
  padding: '0',
  width: '100%',
  height: '24px',
  ...theme.fonts[16],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.semiBold,
  border: 'none',

  ':focus': {
    outline: 'none',
  },
})

export const descStyle = style({
  padding: '0',
  width: '100%',
  height: '22px',
  ...theme.fonts[14],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
  border: 'none',

  ':focus': {
    outline: 'none',
  },
})
