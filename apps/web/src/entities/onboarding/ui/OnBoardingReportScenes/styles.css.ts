import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  padding: '24px',
  width: '100%',
  overflowX: 'auto',
  border: `1px solid ${theme.colors.elevation200}`,
  borderTop: 'none',
  background: theme.colors.white,
})

export const sceneList = style({
  display: 'inline-block',
  overflowX: 'auto',
  boxShadow: `0px 2px 4px -1px ${theme.colors.elevation300}`,
  borderRadius: '4px',
  border: `1px solid ${theme.colors.elevation300}`,
  textWrap: 'nowrap',
})
