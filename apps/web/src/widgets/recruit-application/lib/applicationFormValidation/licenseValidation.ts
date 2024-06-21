import { LICENSE_ITEM_KEYS } from '@/features/Application/constants'
import { isValueFilled } from './isValueFilled'
import { License } from '@/entities/Application/types'

export const licenseValidation = (form: License[]) => {
  if (!form) {
    return true
  }

  return form.every((license) => {
    if (!license.hasOwnProperty('is_licence') || !license['is_licence']) {
      return true
    }
    return LICENSE_ITEM_KEYS.every((key) => isValueFilled(license[key]))
  })
}
