import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  flex: '0 0 269px',
  height: '86px',
  padding: '16px',
  borderRadius: '6px',
  border: `1px solid ${theme.colors.elevation200}`,
  background: theme.colors.white,
  boxShadow: '0px 2px 30px 0px rgba(194, 205, 225, 0.18)',
})

globalStyle(`${wrapper} > div > p`, {
  ...theme.fonts[16],
})

export const descriptionStyle = style({
  marginTop: '8px',
  color: theme.colors.neutralGray500,
  ...theme.fonts[14],
})

globalStyle('#tooltip', {
  position: 'fixed',
  top: '26px',
  left: '-16px',
  zIndex: 100,
})
