import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  position: 'relative',
  height: 'calc(100% - 82px)',
  margin: '0 -40px',
  padding: '0 40px',
  overflow: 'auto',
})

export const container = style({
  minWidth: '1100px',
  height: '100%',
})

export const tableHeader = style({
  display: 'grid',
  gridTemplateColumns: '32px 0.8fr 1.5fr 1.66fr 1.4fr 1.2fr 1.2fr 2fr',
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
  padding: '12px 8px',
})

export const tableBody = style({
  height: 'calc(100vh - 148px)',
  overflowY: 'auto',
})

export const tableBodyItem = style({
  display: 'grid',
  gridTemplateColumns: '32px 0.8fr 1.5fr 1.66fr 1.4fr 1.2fr 1.2fr 2fr',
  paddingLeft: '8px',
  height: '48px',
  [':hover']: {
    backgroundColor: theme.colors.neutralGray50,
  },
})

export const tableBodyItemCell = style({
  ...theme.fonts[14],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
  padding: '12px 8px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  cursor: 'default',
})

export const checkboxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const scenarioChipBox = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
})

export const inputBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const contentBox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 8px',
})

export const text = style({
  width: 'calc(100% - 32px)',
  ...theme.fonts[14],
  color: theme.colors.neutralGray600,
  fontWeight: theme.fontWeights.medium,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  cursor: 'default',
})

export const input = style({
  height: '32px',
  ...theme.fonts[14],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
  border: `1px solid ${theme.colors.elevation300}`,
  borderRadius: '4px',
  padding: '5px 12px',
  outline: 'none',
  [':focus']: {
    borderColor: theme.colors.blue500,
  },
})

globalStyle(`${scenarioChipBox} > div`, {
  flexShrink: 0,
})

globalStyle(`${inputBox} input`, {
  maxWidth: '140px',
})

globalStyle(`${contentBox} input`, {
  height: '32px !important',
})

globalStyle(`${contentBox} > button`, {
  opacity: 0,
})

globalStyle(`${contentBox}:hover > button`, {
  opacity: 1,
})

globalStyle(`${scenarioChipBox} > div > div`, {
  height: '24px',
})

globalStyle(`${scenarioChipBox} > button`, {
  position: 'absolute',
  top: '-4px',
  right: '8px',
  opacity: 0,
})

globalStyle(`${scenarioChipBox}:hover > button`, {
  opacity: 1,
})
