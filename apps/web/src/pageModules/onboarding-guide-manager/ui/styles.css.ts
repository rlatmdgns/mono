import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  width: '100%',
  backgroundColor: theme.colors.white,
  borderRight: `1px solid ${theme.colors.neutralGray200}`,

  '@media': {
    'only screen and (min-width : 800px)': {
      width: '340px',
    },
  },
})
