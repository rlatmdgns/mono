import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import editStep from '@/services/step/editStep'
import { useTranslations } from 'next-intl'

const useEditStep = (postingId: string, stepId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: editStepMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_STEP],
    mutationFn: (title: string) => editStep({ postingId, stepId, title }),
    onSuccess: () => {
      Toast.success($t('change_step_name_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANTS, postingId],
      })
    },
    onError: (error) => {
      if (error.message) {
        Toast.error(error.message)
        return
      }
      Toast.error($t('change_step_name_fail'))
    },
  })
  return {
    editStepMutate,
  }
}

export default useEditStep
