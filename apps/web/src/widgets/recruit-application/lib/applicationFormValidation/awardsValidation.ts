import { AWARD_ITEM_KEYS } from '@/features/Application/constants'
import { isValueFilled } from './isValueFilled'
import { Award } from '@/entities/Application/types/ApplicantRequest'

export const awardsValidation = (form: Award[]) => {
  if (!form) {
    return true
  }

  return form.every((award) => {
    if (!award.hasOwnProperty('is_award') || !award['is_award']) {
      return true
    }
    return AWARD_ITEM_KEYS.every((key) => isValueFilled(award[key]))
  })
}
