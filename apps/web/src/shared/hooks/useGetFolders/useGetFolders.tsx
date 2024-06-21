import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getFolders from '@/services/getFolders'
import { FoldersResponse } from '@/services/getFolders/getFolders.interface'

export const useGetFolders = (initialData?: FoldersResponse) => {
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.FOLDER],
    queryFn: () => getFolders(),
    initialData,
  })

  return {
    isSuccess,
    folder_list: data?.folder_list,
  }
}
