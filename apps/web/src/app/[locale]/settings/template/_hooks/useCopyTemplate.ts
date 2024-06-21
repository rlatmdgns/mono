import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import copyTemplate from '@/services/template/copyTemplate/copyTemplate'
import { useTranslations } from 'next-intl'

const useCopyTemplate = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: copyTemplateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.COPY_TEMPLATE],
    mutationFn: (id: number) => copyTemplate(id),
    onSuccess: () => {
      Toast.success($t('template_copy_success'))
      const queryKeys = [QUERY_KEY.SETTING_TEMPLATE, QUERY_KEY.TEMPLATE_CONTENT]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('template_copy_fail'))
    },
  })

  return { copyTemplateMutate }
}

export default useCopyTemplate
