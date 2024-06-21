import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import deleteMember from '@/services/enterprise/deleteMember'

const useDeleteMember = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteMemberMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_MEMBER],
    mutationFn: (identification: string) => deleteMember(identification),
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.ENTERPRISE_MEMBER],
      })
    },
  })
  return {
    deleteMemberMutate,
  }
}

export default useDeleteMember
