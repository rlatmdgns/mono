import { SignUpPathOption } from '../SignUpFormPathSelect.interface'
import { useTranslations } from 'next-intl'

export const useSignUpFormPathSelectConstants = () => {
  const $t = useTranslations('sign_up')

  const SIGN_UP_PATHS: SignUpPathOption[] = [
    { id: 1, value: '검색', label: $t('path.search') },
    { id: 2, value: '링크드인', label: $t('path.linkedin') },
    { id: 3, value: '온라인 광고', label: $t('path.online_ad') },
    { id: 4, value: '블로그', label: $t('path.blog') },
    { id: 5, value: '인스타그램', label: $t('path.instagram') },
    { id: 6, value: '뉴스레터', label: $t('path.newsletter') },
    { id: 7, value: '지인추천', label: $t('path.recommendation') },
    { id: 8, value: '직접입력', label: $t('path.direct_input') },
  ]

  return { SIGN_UP_PATHS }
}
