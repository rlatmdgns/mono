import { theme } from '@/styles/globalTheme.css'
import { style } from '@vanilla-extract/css'

export const wrapper = style({
  padding: '32px',
  backgroundColor: theme.colors.elevation100,
})

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  width: '758px',
  padding: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '12px',
  background: theme.colors.white,
  borderRadius: '4px',
})
