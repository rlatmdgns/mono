'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { SlackAlertValues } from '@/entities/apps/types/slack'
import { updateSlackNotification } from '@/features/apps/api/updateSlackNotification'

export const useUpdateSlackNotification = () => {
  const queryClient = useQueryClient()

  const { mutate: updateSlackMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_SLACK_NOTIFICATION],
    mutationFn: (values: SlackAlertValues) => updateSlackNotification(values),
    onSuccess: () => {
      Toast.success('알람 설정이 변경되었습니다.')
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CONNECT_SLACK] })
    },
  })

  return {
    updateSlackMutate,
  }
}
