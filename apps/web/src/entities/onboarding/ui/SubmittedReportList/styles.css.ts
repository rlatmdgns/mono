import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  backgroundColor: theme.colors.elevation50,
  border: `1px solid ${theme.colors.elevation200}`,
  borderRadius: '6px',
})

export const itemWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

export const iconWrapper = style({
  padding: '10px',
  width: '36px',
  height: '36px',
  backgroundColor: theme.colors.neutralGray100,
  borderRadius: '4px',
})

export const rightWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  width: '100%',
})

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
})

export const titleStyle = style({
  ...theme.fonts[15],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
})

export const nameStyle = style({
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray500,
})
