import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Toast } from '@/shared/ui'
import deleteWaitingEnterpriseMember from '@/services/enterprise/deleteWaitingEnterpriseMember'
import { useTranslations } from 'next-intl'

const useDeleteWaitingRequest = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: deleteWaitingRequestMutate } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_APPLICANT_MEMO],
    mutationFn: (memberId: string) => deleteWaitingEnterpriseMember(memberId),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.WAITING_ENTERPRISE_MEMBER, QUERY_KEY.ENTERPRISE_MEMBER]
      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
      Toast.success($t('request_invite_link_expired_success'))
    },
    onError: () => {
      Toast.error($t('request_invite_link_expired_fail'))
    },
  })

  return {
    deleteWaitingRequestMutate,
  }
}

export default useDeleteWaitingRequest
