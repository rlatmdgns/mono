import { Toast } from '@/shared/ui'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import createFolder from '@/services/sidebar/createFolder'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateFolder = () => {
  const queryClient = useQueryClient()
  const {
    isSuccess,
    data,
    mutate: createFolderMutate,
  } = useMutation({
    mutationKey: [MUTATION_KEY.CREATE_FOLDER],
    mutationFn: (name: string) => createFolder(name),
    onSuccess: () => {
      Toast.success('폴더가 생성되었습니다.')
      const queryKeys = [QUERY_KEY.SIDE_BAR, QUERY_KEY.POSTING_REQUIREMENT, QUERY_KEY.FOLDER]

      queryKeys.forEach((key) => {
        return queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
    onError: (err) => {
      Toast.error(err.message)
    },
  })
  return {
    isSuccess,
    data,
    createFolderMutate,
  }
}
