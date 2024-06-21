import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { UpdateApplicantFilePublicRequest } from '@/services/applicantFile/updateApplicantFilePublic/updateApplicantFilePublic.interface'
import updateApplicantFilePublic from '@/services/applicantFile/updateApplicantFilePublic'

const useUpdateApplicantFilePublic = (file_id: string) => {
  const queryClient = useQueryClient()
  const { mutate: updateApplicantFilePublicMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_FILE_PUBLIC],
    mutationFn: (form: UpdateApplicantFilePublicRequest) =>
      updateApplicantFilePublic(file_id, form),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_FILES],
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { updateApplicantFilePublicMutate }
}

export default useUpdateApplicantFilePublic
