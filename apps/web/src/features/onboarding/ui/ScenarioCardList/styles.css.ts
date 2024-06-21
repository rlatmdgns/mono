import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const bookcards = style({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '12px',
  width: '100%',
  height: 'auto',
  maxHeight: 'calc(100vh - 100px)',
  paddingBottom: '20px',
  overflowY: 'auto',
  fontSize: 0,
})

export const wrapper = style({
  flex: '0 0 21%',
  padding: '16px',
  width: '277px',
  background: theme.colors.white,
  border: `1px solid ${theme.colors.elevation200}`,
  borderRadius: '6px',
  boxShadow: '0px 2px 30px 0px rgba(194, 205, 225, 0.18)',
})

export const topWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',

  ':last-of-type': {
    cursor: 'pointer',
  },
})

export const bottomWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const titleStyle = style({
  marginRight: 'auto',
  maxWidth: '222px',
  ...theme.fonts[16],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

export const descStyle = style({
  maxWidth: '245px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
})

export const hrStyle = style({
  margin: '12px 0',
  height: '0',
  border: '0',
  borderTop: `1px solid ${theme.colors.elevation300}`,
})

export const statusStyle = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

globalStyle(`${statusStyle}:hover`, {
  color: theme.colors.blue500,
})
