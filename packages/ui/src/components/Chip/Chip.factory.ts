import { ChipStatus, colorType } from './Chip.interface'

export const getChipIconColor = (status: ChipStatus) => {
  let color: colorType

  switch (status) {
    case 'info':
      color = 'blue700'
      break
    case 'success':
      color = 'green700'
      break
    case 'danger':
      color = 'red800'
      break
    case 'warning':
      color = 'orange700'
      break
    default:
      color = 'neutralGray700'
      break
  }

  return color
}
