import { Toast } from '@/shared/ui'
import {
  APPLICATION_ARRAY_FORMS,
  APPLICATION_STRING_FORMS,
} from '@/widgets/recruit-application/consts'
import { FieldValues } from 'react-hook-form'
import { isItemFormFilled } from './isItemFormFilled'
import { militaryValidation } from './militaryValidation'
import { educationValidation } from './educationValidation'
import { careersValidation } from './careersValidation'
import { activitiesValidation } from './activitiesValidation'
import { stringValidation } from './stringValidation'
import { arrayValidation } from './arrayValidation'
import { awardsValidation } from './awardsValidation'
import { licenseValidation } from './licenseValidation'
import { languageValidation } from './languageValidation'
import { documentsValidation } from './documentsValidation'
import { questionsValidation } from './questionsValidation'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const applicationFormValidation = (
  init?: PostingApplicationFormResponse,
  form?: FieldValues,
) => {
  if (!init || !form) {
    return false
  }

  const documents = form.documents
  const questions = form.pre_questions
  const stringValid = APPLICATION_STRING_FORMS.every((key) => stringValidation(init, form, key))
  const arrayValid = APPLICATION_ARRAY_FORMS.every((key) => arrayValidation(init, form, key))

  if (!stringValid) {
    return false
  }

  if (!arrayValid) {
    return false
  }

  if (
    !isItemFormFilled(form.disabled, 'disabled', 'is_disabled') ||
    !isItemFormFilled(form.veteran_benefit, 'veteran_benefit', 'is_veteran_benefit')
  ) {
    return false
  }

  if (!militaryValidation(form.military)) {
    Toast.warning('병역 사항 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!educationValidation(form.educations)) {
    Toast.warning('학력 사항 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!careersValidation(form.careers)) {
    Toast.warning('경력 사항 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!languageValidation(form.languages)) {
    Toast.warning('어학 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!licenseValidation(form.licenses)) {
    Toast.warning('자격증 또는 면허 항목에 빈 값이 존재합니다.')
    return false
  }
  if (!activitiesValidation(form.activities)) {
    Toast.warning('대외 활동 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!awardsValidation(form.awards)) {
    Toast.warning('수상 항목에 빈 값이 존재합니다.')
    return false
  }

  if (!documentsValidation(init, documents)) {
    return false
  }

  if (!questionsValidation(init, questions)) {
    return false
  }

  if (!form.enterprise_required_personal_terms) {
    Toast.warning('개인정보 수집 및 이용에 동의해주세요.')
    return false
  }

  return true
}
