import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updatePostingTemplate from '@/services/template/updatePostingTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useUpdatePostingTemplate = (id: string) => {
  const $t = useTranslations('messages')

  const queryClient = useQueryClient()
  const { mutate: updatePostingMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_POSTING_TEMPLATE],
    mutationFn: ({ id, data }: any) => updatePostingTemplate(id, data),
    onSuccess: () => {
      Toast.success($t('modify_template_success'))

      const queryKeys = [QUERY_KEY.SETTING_TEMPLATE, QUERY_KEY.TEMPLATE_CONTENT, id]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('modify_template_fail'))
    },
  })
  return {
    updatePostingMutate,
  }
}

export default useUpdatePostingTemplate
