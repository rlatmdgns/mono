import { useTranslations } from 'next-intl'

export const useMemberRowConstant = () => {
  const $t = useTranslations('authority')
  const AUTHORITY_LIST = [
    {
      label: $t('adminMember'),
      value: 'adminMember',
    },
    {
      label: $t('recruitmentMember'),
      value: 'recruitmentMember',
    },
    {
      label: $t('evaluationMember'),
      value: 'evaluationMember',
    },
  ]
  return { AUTHORITY_LIST }
}
