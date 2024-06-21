import { globalStyle, style } from '@vanilla-extract/css'

export const selectWrapper = style({
  marginBottom: '16px',
})

globalStyle(`${selectWrapper} > div > div`, {
  width: '200px',
})
