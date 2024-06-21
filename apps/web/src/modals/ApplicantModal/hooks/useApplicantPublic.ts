import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import applicantPublic from '@/services/applicantPublic/applicantPublic'
import { useTranslations } from 'next-intl'

const useApplicantPublic = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: publicMutate } = useMutation({
    mutationKey: [MUTATION_KEY.APPLICANT_PUBLIC],
    mutationFn: (applicant_id: string) => applicantPublic(applicant_id),
    onSuccess: (result) => {
      Toast.success(result.message)
      const queryKeys = [QUERY_KEY.APPLICANT_MODAL, QUERY_KEY.APPLICANTS]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('applicant_lock_fail'))
    },
  })
  return { publicMutate }
}

export default useApplicantPublic
