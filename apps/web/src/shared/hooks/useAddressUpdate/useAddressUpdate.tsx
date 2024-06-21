import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import updateInterviewPlace from '@/services/interview/updateInterviewPlace/updateInterviewPlace'
import { ModifyInterviewPlaceRequest } from '@/interface/interview'

export const useAddressUpdate = (interview_type: string) => {
  const queryClient = useQueryClient()
  const { mutate: addressUpdateMutate } = useMutation({
    mutationKey: [MUTATION_KEY.MODIFY_INTERVIEW_PLACE],
    mutationFn: (postData: ModifyInterviewPlaceRequest) =>
      updateInterviewPlace(interview_type, postData),
    onSuccess: () => {
      Toast.success('면접 장소가 수정되었습니다.')

      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.INTERVIEW_PLACE],
      })
    },
    onError: () => {
      Toast.error('면접 장소 수정에 실패하였습니다.')
    },
  })

  return {
    addressUpdateMutate,
  }
}
