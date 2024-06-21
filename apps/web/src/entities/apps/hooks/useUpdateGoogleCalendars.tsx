import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { GoogleCalendars } from '@/entities/apps/types/calendar'
import { updateGoogleCalendars } from '@/entities/apps/api/updateGoogleCalendars'
import { Toast } from '@/shared/ui'

export const useUpdateGoogleCalendars = () => {
  const queryClient = useQueryClient()

  const { mutate: updateCalendarMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_GOOGLE_CALENDER],
    mutationFn: (data: GoogleCalendars) => updateGoogleCalendars(data),
    onSuccess: () => {
      Toast.success('구글 캘린더 설정이 변경되었습니다.')
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GOOGLE_CALENDAR] })
    },
  })

  return {
    updateCalendarMutate,
  }
}
