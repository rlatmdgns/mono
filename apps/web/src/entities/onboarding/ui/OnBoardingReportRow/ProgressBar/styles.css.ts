import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const processBarBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  ...theme.fonts[11],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})
export const processBar = style({
  width: '100%',
  maxWidth: '64px',
  height: '4px',
  borderRadius: '4px',
  overflow: 'hidden',
  '::-webkit-progress-bar': {
    backgroundColor: theme.colors.elevation300,
  },
  '::-webkit-progress-value': {
    backgroundColor: theme.colors.blue500,
  },
})
