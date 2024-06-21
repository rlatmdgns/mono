import { recipe } from '@vanilla-extract/recipes'

export const dropdownIndicatorArrow = recipe({
  base: {
    transition: 'all 200ms ease-in-out',
  },
  variants: {
    isMenuOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
    },
  },
})
