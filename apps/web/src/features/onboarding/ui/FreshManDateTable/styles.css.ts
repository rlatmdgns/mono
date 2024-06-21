import { style, globalStyle } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'
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
  gridTemplateColumns: '1fr 1.25fr  1.5fr 1fr 1fr 1fr',
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
  justifyContent: 'space-between',
  padding: '12px 8px',
})

export const tableBody = style({})

export const row = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1.25fr  1.5fr 1fr 1fr 1fr',
  paddingLeft: '8px',
})

export const cell = style({
  height: '48px',
  ...theme.fonts['14'],
  color: theme.colors.neutralGray800,
  fontWeight: theme.fontWeights.medium,
  padding: '14px 8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const cellInput = style({
  height: '48px',
  padding: '8px',
})

export const input = recipe({
  base: {
    width: '118px',
    height: '32px',
    border: `1px solid ${theme.colors.neutralGray200}`,
    borderRadius: '4px',
    padding: '4px 12px',
    outline: 'none',
    ...theme.fonts['14'],
    color: theme.colors.neutralGray800,
    fontWeight: theme.fontWeights.medium,
    '::placeholder': {
      color: theme.colors.neutralGray400,
    },
    ':focus': {
      borderColor: theme.colors.blue500,
      boxShadow: '0 2px 10px 0 rgba(70, 142, 255, 0.20)',
    },
  },
  variants: {
    error: {
      true: {
        borderColor: theme.colors.red500,
        ':focus': {
          borderColor: theme.colors.red500,
          boxShadow: '0 2px 10px 0 rgba(255, 91, 70, 0.20)',
        },
      },
    },
  },
})

globalStyle(`${cellInput} input`, {
  height: '32px',
})
