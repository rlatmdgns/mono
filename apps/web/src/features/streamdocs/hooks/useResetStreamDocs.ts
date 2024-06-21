import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { resetStreamDocs } from '@/features/streamdocs/api/resetStreamDocs'

export const useResetStreamDocs = (id: number) => {
  const queryClient = useQueryClient()
  const { mutate: resetStreamDocsMutate } = useMutation({
    mutationKey: [MUTATION_KEY.APPLICANT_FILE_STREAMDOC],
    mutationFn: (id: number) => resetStreamDocs(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLICANT_FILE, id] })
    },
    onError: (error) => {
      console.error(error)
    },
  })
  return {
    resetStreamDocsMutate,
  }
}
