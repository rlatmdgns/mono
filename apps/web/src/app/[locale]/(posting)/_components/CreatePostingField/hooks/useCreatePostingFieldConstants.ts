import { useTranslations } from 'next-intl'

export const useCreatePostingFieldConstants = () => {
  const $t = useTranslations('field_of_employment')

  const FIELD_OF_EMPLOYMENT = [
    { value: 0, label: $t('sw_development') },
    { value: 1, label: $t('hw_development') },
    { value: 2, label: $t('game_development') },
    { value: 3, label: $t('design') },
    { value: 4, label: $t('planning_pm') },
    { value: 5, label: $t('marketing') },
    { value: 6, label: $t('operations') },
    { value: 7, label: $t('business_support') },
    { value: 8, label: $t('business_field') },
    { value: 9, label: $t('investment') },
  ]

  return { FIELD_OF_EMPLOYMENT }
}
