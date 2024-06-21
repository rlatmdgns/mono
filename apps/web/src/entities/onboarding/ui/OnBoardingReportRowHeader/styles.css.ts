import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  display: 'grid',
  gridAutoFlow: 'column',
  minWidth: '100%',
  width: 'fit-content',
  gridAutoColumns:
    'minmax(172px, 1fr) minmax(294px, 1fr) minmax(160px, 1fr) minmax(246px, 1fr) minmax(246px, 1fr)',
  alignItems: 'center',
  height: '48px',
  borderTop: `1px solid ${theme.colors.elevation400}`,
  borderBottom: `1px solid ${theme.colors.elevation400}`,
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray600,
  background: theme.colors.elevation100,
})

globalStyle(`${wrapper} > div`, {
  padding: '0 8px',
})
