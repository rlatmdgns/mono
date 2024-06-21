import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const modalWrapper = style({
  width: '722px',
})

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  maxHeight: '70vh',
  padding: '32px',
  background: theme.colors.elevation100,
  overflowY: 'auto',
})
