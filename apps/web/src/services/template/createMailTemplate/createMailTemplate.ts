import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'

const createMailTemplate = async (data: any) => await http.post(API_URL.CREATE_MAIL_TEMPLATE, data)

export default createMailTemplate
