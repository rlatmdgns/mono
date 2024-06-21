import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const Menu = style({
  '::before': {
    content: '',
    display: 'block',
    width: '100%',
    height: '1px',
    backgroundColor: theme.colors.elevation300,
    margin: '8px 0',
  },
})
