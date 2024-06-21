import { css } from 'styled-components'

export const getTypeStyles = (type?: string) => {
  let background
  let color
  switch (type) {
    case 'primary':
      background = (props: any) => props.theme.colors.blue500
      color = (props: any) => props.theme.colors.white
      break
    case 'warning':
      background = (props: any) => props.theme.colors.red100
      color = (props: any) => props.theme.colors.red500
      break
    case 'proceeding':
      background = (props: any) => props.theme.colors.systemOrange100
      color = (props: any) => props.theme.colors.systemOrange500
      break
    case 'success':
      background = (props: any) => props.theme.colors.systemGreen100
      color = (props: any) => props.theme.colors.systemGreen500
      break
    case 'gray':
      background = (props: any) => props.theme.colors.neutralGray100
      color = (props: any) => props.theme.colors.neutralGray700
      break
    default:
      background = (props: any) => props.theme.colors.blue100
      color = (props: any) => props.theme.colors.blue500
  }
  return css`
    background: ${background};
    color: ${color};
  `
}
