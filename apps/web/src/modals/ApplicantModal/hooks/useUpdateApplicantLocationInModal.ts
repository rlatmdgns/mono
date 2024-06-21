import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateApplicantLocationInModal from '@/services/applicant/updateApplicantLocationinModal'
import { UpdateApplicantLocationInModalRequest } from '@/services/applicant/updateApplicantLocationinModal/updateApplicantLocationInModal.interface'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdateApplicantLocationInModal = (postingId: string, applicantId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateApplicantLocationMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_APPLICANT_LOCATION],
    mutationFn: (data: UpdateApplicantLocationInModalRequest) =>
      updateApplicantLocationInModal(postingId, data),
    onSuccess: () => {
      const queryKeys = [
        QUERY_KEY.APPLICANTS,
        postingId,
        QUERY_KEY.APPLICANT_MODAL,
        applicantId,
        QUERY_KEY.APPLICANT_EVALUATION,
      ]
      Toast.success($t('recruitment_step_changed'))
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return {
    updateApplicantLocationMutate,
  }
}

export default useUpdateApplicantLocationInModal
