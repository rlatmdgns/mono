import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import deletePostingMember from '@/services/posting/deletePostingMember/deletePostingMember'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

const useDeletePostingMember = (id: number) => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()

  const { mutate: deleteMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_POSTING_MEMBER],
    mutationFn: (identification: string) => deletePostingMember(id, identification),
    onSuccess: () => {
      Toast.success($t('member_delete_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.POSTING_MEMBER, id],
      })
    },
    onError: () => {
      Toast.error($t('member_delete_fail'))
    },
  })
  return {
    deleteMutate,
  }
}

export default useDeletePostingMember
