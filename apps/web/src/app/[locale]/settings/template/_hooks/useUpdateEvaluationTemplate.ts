import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { UpdateEvaluationTemplateRequest } from '@/interface/evaluation'
import updateEvaluationTemplate from '@/services/template/updateEvaluationTemplate/updateEvaluationTemplate'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useUpdateEvaluationTemplate = (id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: updateEvaluationTemplateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_EVALUATION_TEMPLATE],
    mutationFn: (data: UpdateEvaluationTemplateRequest) => updateEvaluationTemplate(data),
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

  return { updateEvaluationTemplateMutate }
}

export default useUpdateEvaluationTemplate
