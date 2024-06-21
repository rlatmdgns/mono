import { API_URL } from '@/shared/constants'
import { serverHttp } from '@/shared/lib/serverHttp'
import { CreateEmailRequest, CreateEmailResponse } from './interface'

const serverCreateEmail = async (data: CreateEmailRequest): Promise<CreateEmailResponse> => {
  return serverHttp.post(API_URL.ENTERPRISE_EMAIL, data)
}

export default serverCreateEmail
