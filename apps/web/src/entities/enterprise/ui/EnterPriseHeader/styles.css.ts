import { style } from '@vanilla-extract/css'
import { theme } from '@/styles/globalTheme.css'

export const Header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '14px',
})

export const Info = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const Logo = style({
  borderRadius: '4px',
  overflow: 'hidden',
  minWidth: '26px',
  height: '26px',
})
export const Title = style({
  textOverflow: 'ellipsis',
  maxWidth: '126px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  ...theme.fonts['14'],
  fontWeight: theme.fontWeights.medium,
  color: theme.colors.neutralGray800,
})
