import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deleteApplicantMemo from '@/services/applicant/deleteApplicantMemo/deleteApplicantMemo'
import { useTranslations } from 'next-intl'

const useDeleteMemo = (applicantId: string, memoId: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteMemoMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT_MEMO],
    mutationFn: () => deleteApplicantMemo(applicantId, memoId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_MEMO, applicantId],
      })

      Toast.success($t('memo_delete_success'))
    },
    onError: () => {
      Toast.error($t('memo_delete_fail'))
    },
  })

  return {
    deleteMemoMutate,
  }
}

export default useDeleteMemo
