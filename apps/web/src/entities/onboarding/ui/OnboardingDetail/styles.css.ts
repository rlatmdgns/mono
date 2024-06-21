import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const navWrapper = style({
  '@media': {
    'only screen and (min-width : 800px)': {
      display: 'none',
      padding: '21px 16px',
    },
  },
})

export const body = style({
  padding: '20px 16px',
  overflowY: 'scroll',
  '@media': {
    'only screen and (min-width : 800px)': {
      width: '534px',
      margin: '0 auto',
    },
  },
})

export const headerWrapper = style({
  marginBottom: '24px',
})

export const titleStyle = style({
  color: theme.colors.neutralGray800,
  ...theme.fonts[22],
})

export const descriptionStyle = style({
  ...theme.fonts[15],
  color: theme.colors.neutralGray600,
})
