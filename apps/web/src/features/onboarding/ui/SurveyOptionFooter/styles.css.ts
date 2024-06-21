import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const wrapper = style({
  display: 'flex',
  marginTop: '12px',
  padding: '12px 0',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '8px',
  borderTop: `1px solid ${theme.colors.neutralGray200}`,
})

export const switchWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
})
