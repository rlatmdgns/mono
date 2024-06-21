import { useTranslations } from 'next-intl'

export const useMailContainerConstants = () => {
  const $t = useTranslations('mail')
  const TITLE = {
    in: $t('inbox'),
    sent: $t('sent'),
    trash: $t('trash'),
  }
  return { TITLE }
}
