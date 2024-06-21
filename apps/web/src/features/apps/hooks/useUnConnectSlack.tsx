'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { unConnectSlack } from '@/features/apps/api/unConnectSlack'
import { Toast } from '@/shared/ui'

export const useUnConnectSlack = () => {
  const queryClient = useQueryClient()

  const { mutate: unConnectSlackMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UN_CONNECT_SLACK],
    mutationFn: () => unConnectSlack(),
    onSuccess: () => {
      Toast.success('해제되었습니다.')
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CONNECT_SLACK] })
    },
  })

  return {
    unConnectSlackMutate,
  }
}
