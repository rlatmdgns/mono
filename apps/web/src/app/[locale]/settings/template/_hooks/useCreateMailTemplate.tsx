import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import createMailTemplate from '@/services/template/createMailTemplate'
import { useTranslations } from 'next-intl'

const usePostingTemplates = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: createMailMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_MAIL_TEMPLATE],
    mutationFn: (data) => createMailTemplate(data),
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
    createMailMutate,
  }
}

export default usePostingTemplates
