import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import { PostMemo } from '@/services/applicant/addApplicantMemo/addApplicantMemo.interface'
import addApplicantMemo from '@/services/applicant/addApplicantMemo/addApplicantMemo'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { IsMemoEditorActiveAtom, MemoAtom } from '@/features/Memo/recoil/atom'
import { useTranslations } from 'next-intl'

const useAddMemo = (applicantId: string) => {
  const $t = useTranslations('messages')
  const resetMemo = useResetRecoilState(MemoAtom)
  const setIsMemoEditorActive = useSetRecoilState(IsMemoEditorActiveAtom)

  const queryClient = useQueryClient()
  const { mutate: addMemoMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT_MEMO],
    mutationFn: (postData: PostMemo) => addApplicantMemo(applicantId, postData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.APPLICANT_MEMO],
      })

      Toast.success($t('memo_register_success'))
      resetMemo()
      setIsMemoEditorActive(false)
    },
    onError: () => {
      Toast.error($t('memo_register_fail'))
    },
  })

  return {
    addMemoMutate,
  }
}

export default useAddMemo
