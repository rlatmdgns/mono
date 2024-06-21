import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updatePostingMember from '@/services/posting/updateMember'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdateMember = (id: string) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateMemberMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_POSTING_MEMBER],
    mutationFn: (selectedMemberIdentifies: string[]) =>
      updatePostingMember(id, { posting_member: selectedMemberIdentifies }),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.POSTING, QUERY_KEY.POSTING_MEMBER, id]
      Toast.success($t('change_posting_members'))
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (error: Error) => {
      Toast.error(error.message)
    },
  })
  return { updateMemberMutate }
}

export default useUpdateMember
