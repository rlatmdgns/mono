import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'

type OmsMemberCheckResponse = {
  invalidEmails: string[]
}

export const getOmsMember = (emails: string[]) => {
  const params = new URLSearchParams()
  params.append('emails', emails.join(','))
  const queryString = params.toString()
  return nestHttp.get<OmsMemberCheckResponse>(`${API_URL.OMS_MANAGER_CHECK}?${queryString}`)
}
