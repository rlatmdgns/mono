import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import addApplicant from '@/services/applicant/addApplicant'

const useAddApplicant = (postingId: string, onClose: () => void) => {
  const queryClient = useQueryClient()

  const { mutate: addApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_APPLICANT],
    mutationFn: (data: FormData) => addApplicant(postingId, data),
    onSuccess: () => {
      Toast.success('지원자가 추가되었습니다.')
      onClose()
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANTS, postingId],
      })
    },
    onError: (error) => {
      Toast.error(error.message)
    },
  })

  return { addApplicantMutate }
}

export default useAddApplicant
