import { API_URL, BASE_URL } from '@/shared/constants'
import { apiHttp } from '@/shared/lib/apiHttp'
import { CreateEmailRequest, CreateEmailResponse } from './interface'

const createEmail = async (data: CreateEmailRequest): Promise<CreateEmailResponse> => {
  return await apiHttp.post(`${BASE_URL}${API_URL.ENTERPRISE_EMAIL}`, data)
}

export default createEmail
