import { theme } from '@/styles/globalTheme.css'
import { keyframes, style } from '@vanilla-extract/css'

export const background = style({
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: '10',
})

const fadeInRight = keyframes({
  from: {
    transform: `translate3d(100%, 0, 0)`,
  },
  to: {
    transform: `translateZ(0)`,
  },
})

export const wrapper = style({
  position: 'fixed',
  top: '0px',
  right: '0px',
  padding: '32px 24px',
  width: '510px',
  height: '100vh',
  backgroundColor: theme.colors.white,
  animation: `${fadeInRight} 0.5s`,
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  },
})

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '28px',
})

export const headerTitle = style({
  ...theme.fonts[18],
  fontWeight: theme.fontWeights.semiBold,
  color: theme.colors.neutralGray800,
})

export const buttons = style({
  display: 'flex',
  gap: '4px',
})
