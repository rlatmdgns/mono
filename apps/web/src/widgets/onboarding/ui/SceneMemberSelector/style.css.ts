import { theme } from '@/styles/globalTheme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '264px',
  height: '354px',
  background: theme.colors.white,
  borderRadius: '6px',
})

export const topWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3px 4px',
  width: '100%',
})

globalStyle(`${topWrapper} svg`, {
  cursor: 'pointer',
})

export const title = style({
  ...theme.fonts[10],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})
