import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const createPostingTemplate = (data: any) => http.post(API_URL.CREATE_POSTING_TEMPLATE, data)

export default createPostingTemplate
