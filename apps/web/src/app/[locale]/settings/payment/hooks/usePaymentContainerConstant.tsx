import { useTranslations } from 'next-intl'

const usePaymentContainerConstant = () => {
  const $t = useTranslations('payment')
  const PLAN: any = {
    COST: {
      monthly: 200000,
      annual: 180000,
    },
    PLAN_EXPLAIN: {
      title: $t('plan_explain.title'),
      desc: $t('plan_explain.desc'),
    },
    DETAIL: {
      APPLICANT_MANAGEMENT: {
        title: $t('detail.applicant_management.title'),
        details: [
          $t('detail.applicant_management.detail_01'),
          $t('detail.applicant_management.detail_02'),
          $t('detail.applicant_management.detail_03'),
          $t('detail.applicant_management.detail_04'),
          $t('detail.applicant_management.detail_05'),
          $t('detail.applicant_management.detail_06'),
          $t('detail.applicant_management.detail_07'),
        ],
      },
      MEMBER_MANAGEMENT: {
        title: $t('detail.member_management.title'),
        details: [
          $t('detail.member_management.detail_01'),
          $t('detail.member_management.detail_02'),
          $t('detail.member_management.detail_03'),
          $t('detail.member_management.detail_04'),
        ],
      },
      APPLICANT_EVALUATION: {
        title: $t('detail.applicant_evaluation.title'),
        details: [
          $t('detail.applicant_evaluation.detail_01'),
          $t('detail.applicant_evaluation.detail_02'),
          $t('detail.applicant_evaluation.detail_03'),
          $t('detail.applicant_evaluation.detail_04'),
        ],
      },
      SCHEDULE: {
        title: $t('detail.schedule.title'),
        details: [
          $t('detail.schedule.detail_01'),
          $t('detail.schedule.detail_02'),
          $t('detail.schedule.detail_03'),
          $t('detail.schedule.detail_04'),
        ],
      },
      CAREER_MANAGEMENT: {
        title: $t('detail.career_management.title'),
        details: [
          $t('detail.career_management.details_01'),
          $t('detail.career_management.details_02'),
          $t('detail.career_management.details_03'),
          $t('detail.career_management.details_04'),
          $t('detail.career_management.details_05'),
        ],
      },
    },
  }
  return { PLAN }
}

export default usePaymentContainerConstant
