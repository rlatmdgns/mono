import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const sceneItem = style({
  minWidth: '140px',
  display: 'inline-block',
})

globalStyle(`${sceneItem}+ ${sceneItem}`, {
  borderLeft: `1px solid ${theme.colors.elevation300}`,
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '8px',
  background: theme.colors.elevation100,
  ...theme.fonts[12],
  fontWeight: theme.fontWeights.medium,
})
export const statusBox = style({
  display: 'flex',
  height: '40px',
  alignItems: 'center',
  padding: '0 8px',
  gap: '4px',
  overflow: 'auto',
})
export const date = style({
  color: theme.colors.neutralGray500,
})

export const title = style({
  color: theme.colors.neutralGray600,
})
