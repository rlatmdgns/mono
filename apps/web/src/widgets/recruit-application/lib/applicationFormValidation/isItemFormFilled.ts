import { isValueFilled } from './isValueFilled'
import { Toast } from '@/shared/ui'
import { APPLICATION_ITEM_NAMES } from '@/widgets/recruit-application/consts'

interface FormObject {
  [key: string]: any
}

export const isItemFormFilled = (item: FormObject, itemKey: string, flagKey: string) => {
  if (!item) {
    return true
  }

  if (!item.hasOwnProperty(flagKey) || item[flagKey] !== true) {
    return true
  }

  for (const key in item) {
    if (key !== flagKey && item.hasOwnProperty(key)) {
      if (!isValueFilled(item[key])) {
        Toast.warning(`${APPLICATION_ITEM_NAMES[itemKey]} 항목에 빈 값이 존재합니다.`)
        return false
      }
    }
  }

  return true
}
