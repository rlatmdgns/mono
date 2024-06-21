import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import updateMemberAuthority from '@/services/enterprise/updateMemberAuthority'
import { UpdateMemberAuthority } from '@/interface/enterpriseInformation'
import { Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const useUpdateMemberAuthority = () => {
  const $t = useTranslations('messages')
  const queryClient = useQueryClient()
  const { mutate: updateMemberAuthorityMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_MEMBER_AUTHORITY],
    mutationFn: (member: UpdateMemberAuthority) => updateMemberAuthority(member),
    onSuccess: () => {
      Toast.success($t('change_member_authority_success'))
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.ENTERPRISE_MEMBER],
      })
    },
  })
  return {
    updateMemberAuthorityMutate,
  }
}

export default useUpdateMemberAuthority
