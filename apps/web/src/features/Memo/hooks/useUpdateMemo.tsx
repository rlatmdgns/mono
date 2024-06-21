import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { PostMemo } from '@/services/applicant/addApplicantMemo/addApplicantMemo.interface'
import updateApplicantMemo from '@/services/applicant/updateApplicantMemo/updateApplicantMemo'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { IsMemoEditorActiveAtom, MemoAtom } from '@/features/Memo/recoil/atom'
import { useTranslations } from 'next-intl'

const useUpdateMemo = (applicantId: string, memoId: string) => {
  const $t = useTranslations('messages')
  const resetMemo = useResetRecoilState(MemoAtom)
  const setIsMemoEditorActive = useSetRecoilState(IsMemoEditorActiveAtom)

  const queryClient = useQueryClient()
  const { mutate: updateMemoMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT_MEMO],
    mutationFn: (postData: PostMemo) => updateApplicantMemo(applicantId, memoId, postData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_MEMO, applicantId],
      })
      Toast.success($t('memo_modify_success'))
      resetMemo()
      setIsMemoEditorActive(false)
    },
    onError: () => {
      Toast.error($t('memo_modify_fail'))
    },
  })

  return {
    updateMemoMutate,
  }
}

export default useUpdateMemo
