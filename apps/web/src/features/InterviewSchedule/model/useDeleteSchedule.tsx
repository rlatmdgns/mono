import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deleteSchedule from '@/services/interview/deleteSchedule'
import { useTranslations } from 'next-intl'

export const useDeleteSchedule = (scheduleId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_INTERVIEW],
    mutationFn: () => deleteSchedule(scheduleId),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.SCHEDULE, QUERY_KEY.SCHEDULE_DETAIL, QUERY_KEY.SCHEDULE_ONCOMING]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('delete_interview_schedule'))
    },
    onError: () => {
      Toast.error($t('delete_interview_schedule_fail'))
    },
  })

  return {
    deleteMutate,
  }
}
