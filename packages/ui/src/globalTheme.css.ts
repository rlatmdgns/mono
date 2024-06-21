import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'
import { COLORS, FONT_WEIGHTS, FONTS, TITLES, Z_INDEX } from './constants'

export const theme = createGlobalTheme(':root', {
  zIndex: {
    ...Z_INDEX
  },
  fonts: {
    ...FONTS
  },
  fontWeights: {
    ...FONT_WEIGHTS
  },
  titles: {
    ...TITLES
  },
  colors: {
    ...COLORS,
  },
  types: {
    standard: {
      background: COLORS.blue100,
      color: COLORS.blue500
    },
    primary: {
      background: COLORS.blue500,
      color: COLORS.white
    },
    warning: {
      background: COLORS.red500,
      color: COLORS.white
    },
    gray: {
      background: COLORS.neutralGray100,
      color: COLORS.neutralGray600
    },
  }
})

globalStyle(':root', {
  colorScheme: 'light only'
});

globalStyle('h1, h2, h3, h4, ul, li, p, button', {
  margin: 0,
  padding: 0
})

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit'
});

globalStyle('button', {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});

globalStyle('li', {
  listStyleType: 'none'
});
