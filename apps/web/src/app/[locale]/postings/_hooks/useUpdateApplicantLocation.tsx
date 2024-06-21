import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateApplicantLocation from '@/services/applicant/updateApplicantLocation'
import { UpdateApplicantLocationRequest } from '@/services/applicant/updateApplicantLocation/updateApplicantLocation.interface'

const useUpdateApplicantLocation = (postingId: string) => {
  const queryClient = useQueryClient()
  const { mutate: updateApplicantLocationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_LOCATION],
    mutationFn: (data: UpdateApplicantLocationRequest) => updateApplicantLocation(postingId, data),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANTS, postingId],
      })
    },
  })
  return {
    updateApplicantLocationMutate,
  }
}

export default useUpdateApplicantLocation
