import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import addInterviewPlace from '@/services/interview/addInterviewPlace'
import { Toast } from '@/shared/ui'
import { AddInterviewPlaceRequest } from '@/interface/interview'
import { useTranslations } from 'next-intl'

const useAddInterviewPlace = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: addInterviewPlaceMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_INTERVIEW_PLACE],
    mutationFn: (postData: AddInterviewPlaceRequest) => addInterviewPlace(postData),
    onSuccess: () => {
      Toast.success($t('add_interview_location_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.INTERVIEW_PLACE],
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { addInterviewPlaceMutate }
}

export default useAddInterviewPlace
