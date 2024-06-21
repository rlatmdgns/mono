import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MUTATION_KEY, QUERY_KEY } from '@/shared/constants'
import { PostingSortRequest } from '@/services/sidebar/updatePostingSort/updatePostingSort.interface'
import { Toast } from '@/shared/ui'
import updatePostingSort from '@/services/sidebar/updatePostingSort'

const usePostingSort = () => {
  const queryClient = useQueryClient()
  const { mutate: postingSortMutate } = useMutation({
    mutationKey: [MUTATION_KEY.UPDATE_POSTING_SORT],
    mutationFn: (posting: PostingSortRequest) => updatePostingSort(posting),
    onSuccess: (result: any) => {
      Toast.success('공고 순서가 변경되었습니다.', { hideProgressBar: true })
      return queryClient.setQueryData([QUERY_KEY.SIDE_BAR], (previous: any) => {
        return {
          ...previous,
          folder_list: result.folder_list,
          none_folder: result.none_folder,
        }
      })
    },
    onError: () => {
      Toast.error('공고 순서 변경을 실패 하였습니다.')
    },
  })
  return {
    postingSortMutate,
  }
}

export default usePostingSort
