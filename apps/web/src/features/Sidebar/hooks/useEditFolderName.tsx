import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import editFolderName from '@/services/sidebar/editFolderName'

interface Folder {
  folderId: string
  folderName: string
}

const useEditFolderName = () => {
  const queryClient = useQueryClient()
  const { mutate: editFolderNameMutate } = useMutation({
    mutationKey: [MUTATION_KEY.EDIT_FOLDER_NAME],
    mutationFn: ({ folderId, folderName }: Folder) => editFolderName({ folderId, folderName }),
    onSuccess: () => {
      Toast.success('폴더명이 변경되었습니다.')
      return queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.SIDE_BAR],
      })
    },
    onError: () => {
      Toast.error('폴더명 변경에 실패하였습니다.')
    },
  })

  return { editFolderNameMutate }
}

export default useEditFolderName
