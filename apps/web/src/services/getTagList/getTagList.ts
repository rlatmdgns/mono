import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { TagListResponse } from '@/services/getTagList/getTagList.interface'

const getTagList = async () => await http.get<TagListResponse>(API_URL.TAG_LIST)

export default getTagList
