import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { ApplicantFailRequest } from '@/services/applicant/applicantFail/applicantFail.interface'
import { Toast } from '@/shared/ui'
import applicantFail from '@/services/applicant/applicantFail'
import { useTranslations } from 'next-intl'

const useApplicantFail = (postingId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: failApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_STEP],
    mutationFn: (data: ApplicantFailRequest) => applicantFail(postingId, data),
    onSuccess: (result) => {
      const message =
        result.message === '불합격 처리'
          ? $t('applicant_fail_success')
          : $t('applicant_fail_cancel')
      Toast.success(message)

      const queryKeys = [QUERY_KEY.APPLICANT_MODAL, QUERY_KEY.APPLICANTS, postingId]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('applicant_fail_fail'))
    },
  })
  return {
    failApplicantMutate,
  }
}

export default useApplicantFail
