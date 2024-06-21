import { RecruitPage } from '@/interface/recruitPage'
import { scheduleDayJs } from '@/shared/lib'
import { useTranslations } from 'next-intl'

export const useRecruitContentFactory = () => {
  const $t = useTranslations()
  const getCareer = (
    is_irrelevant: boolean,
    is_newcomer: boolean,
    is_experienced: boolean,
    min_experience_years: number,
    max_experience_years: number,
  ) => {
    if (is_irrelevant) return '경력 무관'

    const minExperienceYears = !!min_experience_years ? `${min_experience_years}년차 이상` : ''
    const maxExperienceYears = !!max_experience_years ? ` ~ ${max_experience_years}년차 이하` : ''

    if (is_newcomer) {
      if (is_experienced) {
        return `${$t('create_announcement.newcomer')}, ${$t('create_announcement.career')} ${minExperienceYears}${maxExperienceYears}`
      }
      return $t('create_announcement.newcomer')
    }

    return `${$t('create_announcement.career')} ${minExperienceYears}${maxExperienceYears}`
  }

  const getRecruitInfo = (recruit: RecruitPage) => [
    {
      title: $t('create_announcement.position'),
      text: recruit?.posting_position,
    },
    {
      title: $t('create_announcement.recruitment'),
      text: recruit?.posting_field,
    },
    {
      title: $t('create_announcement.career_condition'),
      text: getCareer(
        recruit?.is_irrelevant,
        recruit?.is_newcomer,
        recruit?.is_experienced,
        recruit?.min_experience_years,
        recruit?.max_experience_years,
      ),
    },
    {
      title: $t('create_announcement.responsibilities'),
      text: recruit?.posting_work_info,
    },
    {
      title: $t('create_announcement.qualification'),
      text: recruit?.posting_qualification,
    },
    {
      title: $t('create_announcement.preferential'),
      text: recruit?.posting_advantage,
    },
    {
      title: $t('create_announcement.benefit_welfare'),
      text: recruit?.posting_benefits_welfare,
    },
  ]

  const getDeadline = (posting_deadline: string | null) => {
    if (!posting_deadline) return $t('common.open_recruitment')
    return scheduleDayJs(posting_deadline).format('YYYY.MM.DD a h:mm')
  }
  return {
    getCareer,
    getRecruitInfo,
    getDeadline,
  }
}
