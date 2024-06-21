import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import updateApplicantTag from '@/services/applicantTag/updateApplicantTag'
import { UpdateApplicantTagRequest } from '@/services/applicantTag/updateApplicantTag/updateApplicantTag.interface'

const useUpdateApplicantTag = (applicant_id: string) => {
  const queryClient = useQueryClient()
  const { mutate: updateApplicantTagMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_TAG],
    mutationFn: (data: UpdateApplicantTagRequest) => updateApplicantTag(applicant_id, data),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.APPLICANTS, QUERY_KEY.APPLICANT_TAG]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { updateApplicantTagMutate }
}

export default useUpdateApplicantTag
