import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import DeleteInterviewPlace from '@/services/interview/deleteInterviewPlace'
import { DeleteInterviewPlaceRequest } from '@/interface/interview'

export const useAddressDelete = (interview_type: string) => {
  const queryClient = useQueryClient()
  const { mutate: addressDeleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.MODIFY_INTERVIEW_PLACE],
    mutationFn: (postData: DeleteInterviewPlaceRequest) =>
      DeleteInterviewPlace(interview_type, postData),
    onSuccess: () => {
      Toast.success('면접 장소가 삭제되었습니다.')

      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.INTERVIEW_PLACE],
      })
    },
    onError: () => {
      Toast.error('면접 장소 삭제에 실패하였습니다.')
    },
  })

  return {
    addressDeleteMutate,
  }
}
