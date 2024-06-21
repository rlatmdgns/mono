import { style } from '@vanilla-extract/css'

export const sequenceGroup = style({
  display: 'grid',
  gridAutoFlow: 'column',
  gridAutoColumns: 'minmax(146px, 1fr)',
  alignItems: 'center',
})

export const cell = style({
  padding: '0 8px',
})
