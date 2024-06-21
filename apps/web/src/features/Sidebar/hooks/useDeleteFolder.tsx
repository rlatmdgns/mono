import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import deleteFolder from '@/services/sidebar/deleteFolder'

const useDeleteFolder = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteFolderMutate } = useMutation({
    mutationKey: [MUTATION_KEY.DELETE_FOLDER],
    mutationFn: (folderId: string) => deleteFolder(folderId),
    onSuccess: () => {
      Toast.success('폴더가 삭제되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SIDE_BAR],
      })
    },
  })

  return { deleteFolderMutate }
}

export default useDeleteFolder
