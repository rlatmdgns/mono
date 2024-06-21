import { Toast } from '@/shared/ui'
import { FieldValues } from 'react-hook-form'
import { useTranslations } from 'next-intl'

export const useGetUtils = () => {
  const $t = useTranslations()

  const isExperienceYearValidation = (year?: number) => {
    if (!year) return false
    if (year < 1) {
      Toast.error($t('create_announcement.experience_years_min_limit'))
      return true
    }
    if (!Number.isInteger(year)) {
      Toast.error($t('create_announcement.experience_years_digit_only'))
      return true
    }
    return false
  }

  const isPostingValidation = (values: FieldValues) => {
    if (!values.posting_field) {
      return Toast.error($t('create_announcement.recruitment_placeholder'))
    }
    if (!values.is_irrelevant && !values.is_newcomer && !values.is_experienced) {
      return Toast.error($t('messages.choose_experience_condition'))
    }
    // 경력 선택 시
    if (values.is_experienced) {
      // 경력 년수 미입력 시
      if (!values.min_experience_years && !values.max_experience_years) {
        return Toast.error($t('messages.experience_years_input'))
      }
      if (
        isExperienceYearValidation(values.min_experience_years) ||
        isExperienceYearValidation(values.max_experience_years)
      ) {
        return
      }
      if (values.min_experience_years > values.max_experience_years) {
        return Toast.error($t('messages.min_max_experience_limit'))
      }
    }
    if (!values.posting_work_place) {
      return Toast.error($t('messages.workplace_input'))
    }
    return true
  }

  return {
    isPostingValidation,
  }
}
