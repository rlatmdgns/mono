import { style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'absolute',
  top: '5px',
  right: '5px',
})

export const originalView = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const originalViewText = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})
