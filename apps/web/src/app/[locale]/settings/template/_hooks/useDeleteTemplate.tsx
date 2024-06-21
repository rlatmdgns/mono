import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import deleteTemplate from '@/services/template/deleteTemplate/deleteTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const usePostingTemplates = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_TEMPLATE],
    mutationFn: (id: number) => deleteTemplate(id),
    onSuccess: () => {
      Toast.success($t('delete_template_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SETTING_TEMPLATE],
      })
    },
    onError: () => {
      Toast.error($t('delete_template_fail'))
    },
  })
  return {
    deleteMutate,
  }
}

export default usePostingTemplates
