import { useMutation, useQueryClient } from '@tanstack/react-query'
import deleteApplicantTag from '@/services/applicantTag/deleteApplicantTag'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useDeleteApplicantTag = (applicant_id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: applicantTagMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_APPLICANT_TAG],
    mutationFn: (tag_id: number) => deleteApplicantTag(applicant_id, tag_id),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.APPLICANT_TAG, QUERY_KEY.APPLICANTS]
      Toast.success($t('delete_tag_success'))
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: () => {
      Toast.error($t('delete_tag_fail'))
    },
  })
  return {
    applicantTagMutate,
  }
}

export default useDeleteApplicantTag
