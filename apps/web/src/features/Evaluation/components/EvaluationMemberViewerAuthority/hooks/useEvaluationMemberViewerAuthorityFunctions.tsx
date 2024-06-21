import { useTranslations } from 'next-intl'

export const useEvaluationMemberViewerAuthorityFunctions = () => {
  const $t = useTranslations('evaluation.view_authority')
  const getViewerAuthority = (isReleasable?: boolean) => {
    if (!isReleasable)
      return {
        readingIcon: 'icon/hide-solid',
        readingText: $t('not_releasable'),
      }

    return {
      readingIcon: 'icon/show-solid',
      readingText: $t('releasable'),
    }
  }

  return { getViewerAuthority }
}
