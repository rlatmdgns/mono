import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const pageWrapper = style({
  height: '100vh',
  overflow: 'hidden',
  background: theme.colors.elevation100,
})

export const scenarioWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: 'calc(100% - 72px)',
  marginTop: '72px',
  padding: '28px',
  alignItems: 'center',
  overflowY: 'auto',
  transition: 'padding-left 0.3s',
})
