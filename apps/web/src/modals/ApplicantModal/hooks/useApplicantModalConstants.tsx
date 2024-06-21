import { TriggerItem } from '@/shared/ui/Tabs/Tabs.interface'
import { useTranslations } from 'next-intl'

export const useApplicantModalConstants = () => {
  const $t = useTranslations('common')
  const APPLICANT_INSIGHT_TRIGGERS: TriggerItem[] = [
    { title: $t('evaluation'), icon: 'icon/assessment-solid' },
    { title: $t('memo'), icon: 'icon/memo-solid' },
  ]

  return { APPLICANT_INSIGHT_TRIGGERS }
}
