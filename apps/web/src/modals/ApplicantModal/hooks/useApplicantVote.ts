import { useMutation, useQueryClient } from '@tanstack/react-query'
import applicantVote from '@/services/applicantVote'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useApplicantVote = (applicantId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: applicantVoteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.APPLICANT_VOTE],
    mutationFn: (data: number) => applicantVote(applicantId, data),
    onSuccess: (result) => {
      const queryKeys = [QUERY_KEY.APPLICANT_MODAL, QUERY_KEY.APPLICANTS]

      if (result.message.includes('투표 취소 완료')) {
        Toast.success($t('vote_cancelled'))
      }
      if (result.message.includes('변경 완료')) {
        Toast.success($t('vote_changed'))
      }
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
  })
  return {
    applicantVoteMutate,
  }
}

export default useApplicantVote
