import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'
import { recipe } from '@vanilla-extract/recipes'

export const sequenceHeader = style({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  padding: '0 28px',
  justifyContent: 'space-between',
  top: '95px',
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: 1,
})

export const titleStyle = style({
  color: theme.colors.neutralGray400,
  ...theme.fonts[28],
})
