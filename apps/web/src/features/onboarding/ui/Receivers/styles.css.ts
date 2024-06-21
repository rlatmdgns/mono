import { theme } from '@/styles/globalTheme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const list = style({
  display: 'flex',
  maxHeight: '52px',
  flexWrap: 'wrap',
  gap: '4px',
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const item = style({
  display: 'flex',
  height: '24px',
  padding: '4px 6px',
  borderRadius: '4px',
  alignItems: 'center',
  gap: '4px',
  backgroundColor: theme.colors.neutralGray100,
})

globalStyle(`${item} svg`, {
  cursor: 'pointer',
})

export const nameStyle = style({
  paddingTop: '1px',
  ...theme.fonts[11],
  color: theme.colors.neutralGray800,
})
