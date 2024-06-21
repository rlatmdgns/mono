import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import modifySchedule from '@/services/interview/modifySchedule'
import { ModifyScheduleRequest } from '@/services/interview/modifySchedule/modifySchedule.interface'
import { useTranslations } from 'next-intl'

const useModifySchedule = (schedule_id: string, handleModalClose: () => void) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: modifyScheduleMutate } = useMutation({
    mutationKey: [MUTATION_KEY.MODIFY_SCHEDULE],
    mutationFn: (data: ModifyScheduleRequest) => modifySchedule(schedule_id, data),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.SCHEDULE, QUERY_KEY.SCHEDULE_DETAIL, QUERY_KEY.SCHEDULE_ONCOMING]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('interview_schedule_modified_success'))
      handleModalClose()
    },
    onError: () => {
      Toast.error($t('interview_schedule_modified_fail'))
    },
  })

  return {
    modifyScheduleMutate,
  }
}

export default useModifySchedule
