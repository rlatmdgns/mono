import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import createTemplate from '@/services/template/createTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useCreateTemplate = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: creatTemplateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_TEMPLATE],
    mutationFn: (data: any) => createTemplate(data),
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
    creatTemplateMutate,
  }
}

export default useCreateTemplate
