import { useTranslations } from 'next-intl'

export const useGetAuthority = () => {
  const $t = useTranslations('authority')
  const getAuthority = (manager?: string | number) => {
    if (!manager) {
      return ''
    }

    if (manager === 'evaluationMember' || manager === 0) {
      return $t('evaluationMember')
    }

    if (manager === 'recruitmentMember' || manager === 1) {
      return $t('recruitmentMember')
    }

    if (manager === 'adminMember' || manager === 2) {
      return $t('adminMember')
    }
  }
  return { getAuthority }
}
