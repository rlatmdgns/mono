import getTagList from '@/services/getTagList'
import { QUERY_KEY } from '@/shared/constants'
import { useQuery } from '@tanstack/react-query'
import { TagListResponse } from '@/services/getTagList/getTagList.interface'

const useTagList = (isAccess: boolean) => {
  const { data } = useQuery<TagListResponse>({
    queryKey: [QUERY_KEY.TAG_LIST],
    queryFn: getTagList,
    enabled: isAccess,
  })
  return { data }
}

export default useTagList
