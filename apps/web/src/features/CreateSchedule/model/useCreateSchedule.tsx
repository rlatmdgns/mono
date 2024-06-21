import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { createSchedule } from '../api/createSchedule'
import { CreateScheduleRequest } from '../api/createSchedule/createSchedule.interface'
import { useTranslations } from 'next-intl'

export const useCreateSchedule = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: createScheduleMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_SCHEDULE],
    mutationFn: (data: CreateScheduleRequest) => createSchedule(data),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.SCHEDULE, QUERY_KEY.SCHEDULE_ONCOMING, QUERY_KEY.HOME]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('add_interview_schedule_success'))
    },
    onError: () => {
      Toast.error($t('add_interview_schedule_fail'))
    },
  })

  return {
    createScheduleMutate,
  }
}
