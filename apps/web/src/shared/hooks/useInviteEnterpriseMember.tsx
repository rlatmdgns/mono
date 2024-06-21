import inviteEnterpriseMember from '@/services/enterprise/inviteEnterpriseMember'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import { PostEnterpriseMember } from '@/interface/enterpriseInformation'

export const useInviteEnterpriseMember = (onClose: () => void) => {
  const queryClient = useQueryClient()
  const { mutate: inviteEnterpriseMemberMutate } = useMutation({
    mutationKey: [MUTATION_KEY.INVITE_ENTERPRISE_MEMBER],
    mutationFn: (members: PostEnterpriseMember) => inviteEnterpriseMember(members),
    onSuccess: () => {
      const queryKeys = [QUERY_KEY.WAITING_ENTERPRISE_MEMBER, QUERY_KEY.ENTERPRISE_MEMBER]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })

      Toast.success('멤버가 초대되었습니다.')
      onClose()
    },
    onError: () => {
      Toast.error('멤버 초대에 실패하였습니다.')
    },
  })
  return {
    inviteEnterpriseMemberMutate,
  }
}
