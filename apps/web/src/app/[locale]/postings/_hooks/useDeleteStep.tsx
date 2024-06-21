import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import deleteStep from '@/services/step/deleteStep'
import { useTranslations } from 'next-intl'

const useDeleteStep = (postingId: string, stepId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteStepMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_STEP],
    mutationFn: () => deleteStep({ postingId, stepId }),
    onSuccess: () => {
      Toast.success($t('delete_step_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANTS, postingId],
      })
    },
    onError: () => {
      Toast.error($t('delete_step_fail'))
    },
  })
  return {
    deleteStepMutate,
  }
}

export default useDeleteStep
