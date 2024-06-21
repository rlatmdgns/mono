import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const sidebar = style({
  minWidth: '248px',
  background: theme.colors.elevation100,
  height: '100vh',
  padding: '8px',
  borderRight: `1px solid ${theme.colors.elevation300}`,
})

export const onboardingSidebarLayout = style({
  display: 'flex',
})

export const container = style({
  position: 'relative',
  width: 'calc(100% - 248px)',
})
