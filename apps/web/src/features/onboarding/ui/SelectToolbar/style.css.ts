import { theme } from '@/styles/globalTheme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const wrapper = style({
  position: 'absolute',
  left: '50%',
  bottom: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 20px',
  width: '274px',
  height: '56px',
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.neutralGray200}`,
  borderRadius: '8px',
  boxShadow: '0px 4px 40px 0px rgba(161, 176, 203, 0.20)',
  transform: 'translateX(-50%)',
})

globalStyle(`${wrapper} > svg`, {
  cursor: 'pointer',
})

export const innerWrap = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const selectedNumberWrapper = style({
  display: 'flex',
  gap: '8px',
})

export const numberStyle = style({
  paddingTop: '1px',
  width: '24px',
  height: '24px',
  textAlign: 'center',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.blue500,
  backgroundColor: theme.colors.blue100,
  borderRadius: '3px',
})

export const numberText = style({
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.black,
})

export const closeButton = style({
  height: '18px',
})
