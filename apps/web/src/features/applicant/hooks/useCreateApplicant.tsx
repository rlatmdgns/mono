import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createApplicant } from '@/features/applicant/api'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'

export const useCreateApplicant = (id: string, callbackFn?: () => void) => {
  const queryClient = useQueryClient()
  const { mutate: createApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT, id],
    mutationFn: (data: any) => createApplicant(id, data),
    onSuccess: () => {
      if (callbackFn) {
        callbackFn()
      }
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLICANTS, id] })
    },
    onError: (error) => {
      Toast.error(error.message)
    },
  })

  return {
    createApplicantMutate,
  }
}
