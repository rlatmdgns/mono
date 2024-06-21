import { EVALUATION_SELECT_DEFAULT_STYLES } from '@/features/Evaluation/Evaluation.constants'

export const getEvaluationSelectStyles = (optionMinWidth: string, menuWidth?: string) => {
  return {
    ...EVALUATION_SELECT_DEFAULT_STYLES,
    menuWidth: menuWidth,
    optionMinWidth: optionMinWidth,
  }
}

export const getStatusIcon = (status: string) => {
  switch (status) {
    case 'closed':
      return 'icon/check-solid'
    case 'proceeding':
      return 'icon/loading-solid'
    default:
      return 'icon/cancle-solid'
  }
}

export const getStatusIconColor = (status: string) => {
  switch (status) {
    case 'closed':
      return 'blue400'
    case 'ne':
      return 'neutralGray600'
    default:
      return 'neutralGray400'
  }
}

export const getReduceArray = (array: number[]) => {
  if (array.length < 1) return 0
  if (array.length < 2) return array[0]
  return array.reduce((number, amount) => number + amount)
}
