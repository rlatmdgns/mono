import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import updateMailAlarm from '@/services/auth/updateMailAlarm/updateAccountInfo'
import { updateMailAlarmRequest } from '@/services/auth/updateMailAlarm/interface'
import { useTranslations } from 'next-intl'

const useUpdateMailAlarm = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateMailMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_USER_ALARM],
    mutationFn: (data: updateMailAlarmRequest) => updateMailAlarm(data),
    onSuccess: (data) => {
      Toast.success($t('mail_alarm_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.USER],
      })
    },
    onError: () => {
      Toast.error($t('mail_alarm_change_fail'))
    },
  })
  return {
    updateMailMutate,
  }
}
export default useUpdateMailAlarm
