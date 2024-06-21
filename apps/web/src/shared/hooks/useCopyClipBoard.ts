import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

export const useCopyClipBoard = () => {
  const $t = useTranslations('messages')

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      Toast.success($t('copy_complete'))
    } catch (error) {
      Toast.error($t('copy_fail'))
    }
  }
  return { handleCopyClipBoard }
}
