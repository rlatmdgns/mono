import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import createEvaluationTemplate from '@/services/template/createEvaluationTemplate'
import { EvaluationTemplateRequest } from '@/interface/evaluation'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useCreateEvaluationTemplate = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: createEvaluationTemplateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_EVALUATION_TEMPLATE],
    mutationFn: (data: EvaluationTemplateRequest) => createEvaluationTemplate(data),
    onSuccess: () => {
      Toast.success($t('create_evaluation_template_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SETTING_TEMPLATE],
      })
    },
    onError: () => {
      Toast.error($t('create_evaluation_template_fail'))
    },
  })

  return { createEvaluationTemplateMutate }
}

export default useCreateEvaluationTemplate
