import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import addStep from '@/services/step/addStep'
import { useTranslations } from 'next-intl'

const useAddStep = (postingId: string, handleClosedToggle?: (status: boolean) => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: addStepMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_STEP],
    mutationFn: () => addStep(postingId),
    onSuccess: () => {
      Toast.success($t('add_step_success'))
      if (handleClosedToggle) {
        handleClosedToggle(false)
      }
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANTS, postingId],
      })
    },
    onError: (error) => {
      Toast.error(error.message)
    },
  })
  return {
    addStepMutate,
  }
}

export default useAddStep
