'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { connectGoogleCalendar } from '@/features/apps/api'
import { useRouter } from 'next/navigation'

export const useConnectGoogleCalendar = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate: connectGoogleMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CONNECT_GOOGLE],
    mutationFn: () => connectGoogleCalendar(),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CONNECT_GOOGLE] })
    },
    onError: (error) => {
      console.error(error)
      const URI = process.env.NEXT_PUBLIC_GOOGLE_CALENDER_URI
      return router.push(`${URI}`)
    },
  })

  return {
    connectGoogleMutate,
  }
}
