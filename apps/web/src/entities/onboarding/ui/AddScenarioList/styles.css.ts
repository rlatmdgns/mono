import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  display: 'flex',
  width: '863px',
  height: '375px',
  overflowY: 'auto',
  flexWrap: 'wrap',
  padding: '20px',
  gap: '8px',
  background: theme.colors.white,
})
