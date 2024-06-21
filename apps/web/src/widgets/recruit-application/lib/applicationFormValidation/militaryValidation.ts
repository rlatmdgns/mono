import { isValueFilled } from './isValueFilled'
import { Military, MilitaryKeys } from '@/entities/Application/types'

export const militaryValidation = (military: Military) => {
  let keys: MilitaryKeys[] = ['type', 'rank', 'enlistment_date', 'discharge_date', 'discharge']
  if (!military?.is_military) {
    return true
  }
  if (military.discharge === '복무중') {
    keys = keys.filter((key: MilitaryKeys) => key !== 'discharge_date')
  }
  return keys.every((key: MilitaryKeys) => isValueFilled(military[key]))
}
