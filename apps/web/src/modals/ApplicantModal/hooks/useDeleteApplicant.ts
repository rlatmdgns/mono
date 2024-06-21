import deleteApplicant from '@/services/applicant/deleteApplicant'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useDeleteApplicant = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteApplicantMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_APPLICANT],
    mutationFn: (applicant_id: string) => deleteApplicant(applicant_id),
    onSuccess: () => {
      Toast.success($t('delete_applicant_success'))
      const queryKeys = [
        QUERY_KEY.APPLICANTS,
        QUERY_KEY.SCHEDULE_ONCOMING,
        QUERY_KEY.SCHEDULE_DETAIL,
      ]

      return queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('delete_applicant_fail'))
    },
  })
  return { deleteApplicantMutate }
}

export default useDeleteApplicant
