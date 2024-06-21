import { globalStyle, style } from '@vanilla-extract/css'

export const wrapper = style({
  marginBottom: '-6px',
  width: '100%',
})

globalStyle(`${wrapper} button`, {
  width: '100%',
  textAlign: 'left',
})

globalStyle(`${wrapper} button > span`, {
  flex: '1 1 calc(100% - 16px)',
})
