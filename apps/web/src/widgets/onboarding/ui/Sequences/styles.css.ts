import { globalStyle, style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  position: 'relative',
  paddingTop: '33px',
})

export const listStyle = style({
  display: 'flex',
  width: '80vw',
  maxWidth: '628px',
  position: 'relative',
  justifyContent: 'space-between',
  alignItems: 'center',
})

globalStyle(`${listStyle}:nth-child(n+2)`, {
  marginTop: '162px',
})

export const dotWrapper = style({
  height: '80px',
  position: 'absolute',
  top: 'calc(50% + 40px)',
  left: 'calc(50% + 4px)',
  transform: 'translate(-50%, -50%)',
  zIndex: 20,
})

export const dot = style({
  position: 'absolute',
  width: '24px',
  height: '24px',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '50%',
  background: theme.colors.white,
  zIndex: 5,
  selectors: {
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '10px',
      height: '10px',
      transform: 'translate(-50%, -50%)',
      borderRadius: '50%',
      background: theme.colors.blue500,
    },
  },
})

export const dotInformation = style({
  padding: '5px',
  textAlign: 'center',
  marginTop: '28px',
  borderRadius: '6px',
  background: theme.colors.white,
  color: theme.colors.blue500,
  ...theme.fonts[12],
})

export const sequenceLine = style({
  position: 'absolute',
  top: '0',
  left: 'calc(50% - 1px)',
  width: '8px',
  height: 'calc(100vh - 200px)',
  borderRadius: '4px 0 0 4px',
  background: theme.colors.elevation400,
  zIndex: 1,
})
