import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import createPostingTemplate from '@/services/template/createPostingTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useCreatePostingTemplates = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: createPostingMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_POSTING_TEMPLATE],
    mutationFn: (data) => createPostingTemplate(data),
    onSuccess: () => {
      Toast.success($t('add_template_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SETTING_TEMPLATE],
      })
    },
    onError: () => {
      Toast.error($t('add_template_fail'))
    },
  })
  return {
    createPostingMutate,
  }
}

export default useCreatePostingTemplates
