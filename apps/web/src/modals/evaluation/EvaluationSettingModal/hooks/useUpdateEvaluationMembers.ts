import updateEvaluationMembers from '@/services/evaluation/updateEvaluationMembers'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { UpdateEvaluationMembersRequest } from '@/services/evaluation/updateEvaluationMembers/updateEvaluationMembers.interface'
import { useTranslations } from 'next-intl'

const useUpdateEvaluationMembers = (postingId: string, step_id: string, callbackFn: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateEvaluationMembersMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_EVALUATION_MEMBER],
    mutationFn: (data: UpdateEvaluationMembersRequest) => updateEvaluationMembers(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.EVALUATION, postingId, step_id],
      })
      callbackFn()
      Toast.success($t('modify_evaluation_member_success'))
    },
    onError: () => {
      Toast.error($t('modify_evaluation_member_fail'))
    },
  })
  return {
    updateEvaluationMembersMutate,
  }
}

export default useUpdateEvaluationMembers
