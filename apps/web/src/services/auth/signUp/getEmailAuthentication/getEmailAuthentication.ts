import { serverHttp } from '@/shared/lib/serverHttp'
import { API_URL, PAGE } from '@/shared/constants'
import { Response } from './interface'
import { redirect } from 'next/navigation'

const getEmailAuthentication = async (code: string) => {
  try {
    return await serverHttp.get<Response>(API_URL.GET_EMAIL_AUTHENTICATION(code))
  } catch (e) {
    redirect(PAGE.EXPIRE)
  }
}

export default getEmailAuthentication
