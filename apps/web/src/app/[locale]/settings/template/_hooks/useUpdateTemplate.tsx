import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateTemplate from '@/services/template/updateTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useUpdateTemplate = (id: string) => {
  const $t = useTranslations('messages')

  const queryClient = useQueryClient()
  const { mutate: updateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_TEMPLATE],
    mutationFn: ({ id, data }: any) => updateTemplate(id, data),
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
    updateMutate,
  }
}

export default useUpdateTemplate
