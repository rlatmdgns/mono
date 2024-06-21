import { style, globalStyle } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const table = style({
  maxHeight: '522px',
  backgroundColor: theme.colors.white,
  padding: '0 20px',
  margin: '0 -20px',
  overflowY: 'auto',
})

export const tableHeader = style({
  position: 'sticky',
  top: 0,
  zIndex: 2,
  display: 'grid',
  gridTemplateColumns: '28px 1fr 2fr 1fr 2fr',
  paddingLeft: '8px',
  height: '48px',
  backgroundColor: theme.colors.elevation100,
  ...theme.fonts['14'],
  color: theme.colors.neutralGray600,
  fontWeight: theme.fontWeights.medium,
  borderTop: `1px solid ${theme.colors.elevation400}`,
  borderBottom: `1px solid ${theme.colors.elevation400}`,
})

export const tableHeaderCell = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '12px 8px',
})

export const postingDropdown = style({
  padding: '12px 8px',
})

export const postingCellText = style({})

export const postingList = style({
  maxHeight: '300px',
  overflowY: 'auto',
})

export const tableBodyItem = style({
  display: 'grid',
  gridTemplateColumns: '28px 1fr 2fr 1fr 2fr',
  paddingLeft: '8px',
})

export const tableBodyItemCell = style({
  height: '48px',
  padding: '14px 8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'default',
})

globalStyle(`${postingCellText} + div`, {
  display: 'inline-block',
  position: 'relative',
  top: '3px',
})
