import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const tableHeader = style({
  position: 'sticky',
  top: '-24px',
  display: 'grid',
  gridTemplateColumns: '32px 0.8fr 1.5fr 1.66fr 1.4fr 1.2fr',
  paddingLeft: '8px',
  height: '48px',
  backgroundColor: theme.colors.elevation100,
  ...theme.fonts['14'],
  color: theme.colors.neutralGray600,
  fontWeight: theme.fontWeights.medium,
  borderTop: `1px solid ${theme.colors.elevation400}`,
  borderBottom: `1px solid ${theme.colors.elevation400}`,
})

export const tableWrapper = style({
  minWidth: '780px',
  maxHeight: '60vh',
  padding: '24px 20px',
  overflowY: 'auto',
  backgroundColor: theme.colors.white,
})

export const tableHeaderCell = style({
  padding: '12px 8px',
})

export const tableBodyItem = style({
  display: 'grid',
  gridTemplateColumns: '32px 0.8fr 1.5fr 1.66fr 1.4fr 1.2fr',
  paddingLeft: '8px',
  height: '48px',
  [':hover']: {
    backgroundColor: theme.colors.neutralGray50,
  },
  alignItems: 'center',
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
