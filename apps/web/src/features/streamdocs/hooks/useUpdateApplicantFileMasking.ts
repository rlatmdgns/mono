import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateApplicantFileMasking } from '@/features/streamdocs/api/updateApplicantFileMasking'

export const useUpdateApplicantFileMasking = (id: number) => {
  const queryClient = useQueryClient()
  const { mutate: updateMaskingMutate, isSuccess } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_FILE_MASKING],
    mutationFn: () => updateApplicantFileMasking(id),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: [QUERY_KEY.APPLICANT_FILE, id] })
    },
    onError: (error) => {
      console.error(error)
    },
  })
  return {
    isSuccess,
    updateMaskingMutate,
  }
}
