import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import updateFolderSort from '@/services/sidebar/updateFolderSort'

const useFolderSort = () => {
  const queryClient = useQueryClient()
  const { mutate: folderSortMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_FOLDER_SORT],
    mutationFn: (folder: any) => updateFolderSort(folder),
    onSuccess: (result) => {
      Toast.success('폴더 순서가 변경되었습니다.', { hideProgressBar: true })
      return queryClient.setQueryData([QUERY_KEY.SIDE_BAR], (previous: any) => {
        return {
          ...previous,
          folder_list: result.folder_list,
        }
      })
    },
    onError: () => {
      Toast.error('폴더 순서 변경을 실패 하였습니다.')
    },
  })
  return {
    folderSortMutate,
  }
}

export default useFolderSort
