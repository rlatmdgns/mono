import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'
import { recipe } from '@vanilla-extract/recipes'

export const rowItem = recipe({
  base: {
    background: theme.colors.white,
    minWidth: '100%',
    width: 'fit-content',
  },
  variants: {
    isOpen: {
      true: {
        background: theme.colors.neutralGray100,
        transition: 'background 0.3s',
      },
    },
  },
})
export const inner = style({
  display: 'grid',
  gridAutoFlow: 'column',
  minWidth: '100%',
  width: 'fit-content',
  gridAutoColumns:
    'minmax(172px, 1fr) minmax(294px, 1fr) minmax(160px, 1fr) minmax(246px, 1fr) minmax(246px, 1fr)',
  alignItems: 'center',
  height: '58px',
  ...theme.fonts[14],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})

globalStyle(`${inner} > div`, {
  padding: '0 8px',
})

export const name = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
})

export const scenarioBox = style({
  display: 'flex',
  gap: '8px',
  overflow: 'auto',
  alignItems: 'center',
})
