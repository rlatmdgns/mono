'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { connectGoogleCalendar } from '@/features/apps/api'
import { useRouter } from 'next/navigation'

export const useConnectSlack = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { mutate: connectSlackMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CONNECT_SLACK],
    mutationFn: () => connectGoogleCalendar(),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.CONNECT_SLACK] })
    },
    onError: (error) => {
      console.error(error)
      const URI = process.env.NEXT_PUBLIC_SLACK_URI
      return router.push(`${URI}`)
    },
  })

  return {
    connectSlackMutate,
  }
}
