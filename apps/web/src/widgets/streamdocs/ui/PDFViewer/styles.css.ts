import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'relative',
})
export const viewer = recipe({
  base: {
    width: '100%',
    height: 'calc(100vh - 194px)',
    border: 0,
    display: 'none',
  },
  variants: {
    isActive: {
      true: {
        display: 'block',
      },
    },
    isPublic: {
      false: {
        height: 'calc(100vh - 238px)',
      },
    },
    isEvaluator: {
      true: {
        height: 'calc(100vh - 130px)',
      },
    },
  },
})
