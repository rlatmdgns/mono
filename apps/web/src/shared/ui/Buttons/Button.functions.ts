import { ButtonProps } from '@/shared/ui/Buttons/Button.interface'
import { css, DefaultTheme } from 'styled-components'

interface StyleProps {
  theme: DefaultTheme
}

export const getDefaultStyle = (state?: ButtonProps['state'], style?: ButtonProps['style']) => {
  if (state === 'standard' && !style) return 'fill-weak'
  if (!style) return 'fill-strong'
  return style
}

export const getSizeStyle = (size: string) => {
  let height
  let gap
  let padding
  let fontSize
  switch (size) {
    case 'xs':
      height = '32px'
      gap = '6px'
      padding = '8px'
      fontSize = ({ theme }: StyleProps) => theme.fonts[11]
      break
    case 'sm':
      height = '40px'
      gap = '6px'
      padding = '12px'
      fontSize = ({ theme }: StyleProps) => theme.fonts[14]
      break
    case 'md':
      height = '48px'
      gap = '8px'
      padding = '12px'
      fontSize = ({ theme }: StyleProps) => theme.fonts[16]
      break
    case 'lg':
      height = '56px'
      gap = '10px'
      padding = '16px'
      fontSize = ({ theme }: StyleProps) => theme.fonts[18]
      break
    default:
  }
  return css`
    height: ${height};
    gap: ${gap};
    padding: ${padding};
    ${fontSize}
  `
}

export const getStyle = (state: string, style: string) => {
  let backgroundColor
  let border
  let color
  switch (state) {
    case 'primary':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue500
          color = ({ theme }: StyleProps) => theme.colors.white
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue100
          color = ({ theme }: StyleProps) => theme.colors.blue500
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.white
          border = ({ theme }: StyleProps) => `1px solid ${theme.colors.neutralGray200}`
          color = ({ theme }: StyleProps) => theme.colors.blue500
          break
        case 'mono':
          backgroundColor = 'transparent'
          color = ({ theme }: StyleProps) => theme.colors.blue500
          break
      }
      break
    case 'warning':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red500
          color = ({ theme }: StyleProps) => theme.colors.white
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red100
          color = ({ theme }: StyleProps) => theme.colors.red500
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.white
          border = ({ theme }: StyleProps) => `1px solid ${theme.colors.neutralGray200}`
          color = ({ theme }: StyleProps) => theme.colors.red500
          break
        case 'mono':
          backgroundColor = 'transparent'
          color = ({ theme }: StyleProps) => theme.colors.red500
          break
      }
      break
    case 'standard':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray800
          color = ({ theme }: StyleProps) => theme.colors.white
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray100
          color = ({ theme }: StyleProps) => theme.colors.neutralGray800
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.white
          border = ({ theme }: StyleProps) => `1px solid ${theme.colors.neutralGray200}`
          color = ({ theme }: StyleProps) => theme.colors.neutralGray800
          break
        case 'mono':
          backgroundColor = 'transparent'
          color = ({ theme }: StyleProps) => theme.colors.neutralGray800
          break
        default:
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray100
          color = ({ theme }: StyleProps) => theme.colors.neutralGray800
          break
      }
      break
  }
  return css`
    background-color: ${backgroundColor};
    border: ${border};
    color: ${color};
  `
}

export const getHoverStyle = (state: string, style: string) => {
  let backgroundColor
  let border
  switch (state) {
    case 'primary':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue600
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue200
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue100
          border = `none`
          break
        case 'mono':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue100
          break
      }
      break
    case 'warning':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red600
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red200
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red100
          border = `none`
          break
        case 'mono':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red100
          break
      }
      break
    case 'standard':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray900
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray200
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray100
          border = `1px solid transparent`
          break
        case 'mono':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray100
          break
      }
      break
  }
  return css`
    background-color: ${backgroundColor};
    border: ${border};
  `
}

export const getActiveStyle = (state: string, style: string) => {
  let backgroundColor
  let border
  switch (state) {
    case 'primary':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue700
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue300
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue200
          border = `none`
          break
        case 'mono':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.blue200
          break
      }
      break
    case 'warning':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red700
          break
        case 'fill-weak':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red300
          break
        case 'line':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red200
          border = `none`
          break
        case 'mono':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.red200
          break
      }
      break
    case 'standard':
      switch (style) {
        case 'fill-strong':
          backgroundColor = ({ theme }: StyleProps) => theme.colors.black
          border = `none`
          break
        default:
          backgroundColor = ({ theme }: StyleProps) => theme.colors.neutralGray300
          border = `none`
          break
      }
  }
  return css`
    background-color: ${backgroundColor};
    border: ${border};
  `
}

export const getIconColor = (state: string, style?: string) => {
  let color
  switch (state) {
    case 'primary':
      switch (style) {
        case 'fill-strong':
          color = 'white'
          break
        case 'fill-weak':
          color = 'blue500'
          break
        case 'line':
          color = 'blue500'
          break
        case 'mono':
          color = 'blue500'
          break
      }
      break
    case 'warning':
      switch (style) {
        case 'fill-strong':
          color = 'white'
          break
        case 'fill-weak':
          color = 'red500'
          break
        case 'line':
          color = 'red500'
          break
        case 'mono':
          color = 'red500'
          break
      }
      break
    case 'standard':
      switch (style) {
        case 'fill-strong':
          color = 'white'
          break
        case 'fill-weak':
          color = 'neutralGray800'
          break
        case 'line':
          color = 'neutralGray800'
          break
        case 'mono':
          color = 'neutralGray800'
          break
        default:
          color = 'neutralGray800'
          break
      }
      break
  }
  return color
}
