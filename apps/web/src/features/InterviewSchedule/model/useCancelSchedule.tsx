import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import cancelSchedule from '@/services/interview/cancelSchedule'
import { InterviewCancelRequest } from '@/interface/interview'
import { useTranslations } from 'next-intl'

export const useCancelSchedule = (scheduleId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: cancelMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CANCEL_INTERVIEW],
    mutationFn: (cancelReason: InterviewCancelRequest) => cancelSchedule(scheduleId, cancelReason),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.SCHEDULE, QUERY_KEY.SCHEDULE_DETAIL, QUERY_KEY.SCHEDULE_ONCOMING]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('interview_schedule_cancelled'))
    },
    onError: () => {
      Toast.error($t('interview_schedule_cancel_fail'))
    },
  })

  return {
    cancelMutate,
  }
}
