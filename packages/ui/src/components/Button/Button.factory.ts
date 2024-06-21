export type State = 'primary' | 'secondary' | 'danger'
export type Style = 'fill-strong' | 'fill-weak' | 'line' | 'mono'

export const getIconColor = (state: State, style: Style, disabled?: boolean) => {
  let color

  switch (disabled) {
    case true:
      color = 'neutralGray400'
      break
    default:
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
        case 'secondary':
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
        case 'danger':
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
      }
  }

  return color
}
