'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { unConnectGoogle } from '@/features/apps/api'

export const useUnConnectGoogleCalendar = () => {
  const queryClient = useQueryClient()

  const { mutate: unConnectGoogleMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UN_CONNECT_GOOGLE],
    mutationFn: () => unConnectGoogle(),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CONNECT_GOOGLE] })
    },
  })

  return {
    unConnectGoogleMutate,
  }
}
