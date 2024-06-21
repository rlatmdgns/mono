import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { ApplicantPassRequest } from '@/services/applicant/applicantPass/applicantPass.interface'
import { Toast } from '@/shared/ui'
import applicantPass from '@/services/applicant/applicantPass'
import { useTranslations } from 'next-intl'

const useApplicantPass = (postingId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: passApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.ADD_STEP],
    mutationFn: (data: ApplicantPassRequest) => applicantPass(postingId, data),
    onSuccess: () => {
      Toast.success($t('applicant_pass_success'))
      const queryKeys = [QUERY_KEY.APPLICANT_MODAL, QUERY_KEY.APPLICANTS, postingId]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('applicant_pass_fail'))
    },
  })
  return {
    passApplicantMutate,
  }
}

export default useApplicantPass
