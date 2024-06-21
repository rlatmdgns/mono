import { Toast } from '@/shared/ui'
import { QUERY_KEY } from '@/shared/constants'
import updateApplicant from '@/services/applicant/updateApplicant'
import {
  ApplicantInfo,
  UpdateApplicantRequest,
} from '@/services/applicant/updateApplicant/updateApplicant.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useUpdateApplicant = (applicant_id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: applicantMutate } = useMutation({
    mutationFn: (form: ApplicantInfo) => updateApplicant(applicant_id, form),
    onSuccess: () => {
      const queryKeys = [
        QUERY_KEY.APPLICANT,
        applicant_id,
        QUERY_KEY.APPLICANTS,
        QUERY_KEY.APPLICANT_TAG,
        applicant_id,
      ]
      Toast.success($t('change_applicant_info_success'))
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error: UpdateApplicantRequest) => {
      if (error.message) {
        return Toast.error(error.message)
      }
      return Toast.error($t('change_applicant_info_fail'))
    },
  })
  return { applicantMutate }
}

export default useUpdateApplicant
