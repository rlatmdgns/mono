import { globalStyle, style } from '@vanilla-extract/css'

export const wrapper = style({})

globalStyle(`${wrapper} > button`, {
  minWidth: '100%',
  marginTop: '24px',
})
