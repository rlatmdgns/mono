import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

const createTemplate = (data: any) => nestHttp.post(API_URL.CREATE_TEMPLATE, data)

export default createTemplate
