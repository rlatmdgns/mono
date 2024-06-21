import { LANGUAGE_ITEM_KEYS } from '@/features/Application/constants/languageTypes'
import { isValueFilled } from './isValueFilled'
import { Language } from '@/entities/Application/types/ApplicantRequest'

export const languageValidation = (form: Language[]) => {
  if (!form) {
    return true
  }

  return form.every((language: Language) => {
    if (!language.hasOwnProperty('is_language') || !language['is_language']) {
      return true
    }
    return LANGUAGE_ITEM_KEYS.every((key) => isValueFilled(language[key]))
  })
}
