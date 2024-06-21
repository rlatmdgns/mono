import { ApiError } from '@/shared/lib/ApiError'
import { loading } from '@/shared/lib/loading'
import * as Sentry from '@sentry/nextjs'
import Cookies from 'js-cookie'
import { redirect } from '@/navigations'
import { PAGE } from '@/shared/constants'

export const getToken = () => Cookies.get('token')
export const getEnterpriseId = () => Cookies.get('enterpriseId')

interface SteadResponse extends Response {
  data?: any
}

export const handleResponse = async <T>(response: SteadResponse) => {
  loading.resolved()
  const data = await response.json()
  const isUnauthorized = response.status === 401

  if (!response.ok && isUnauthorized) {
    Cookies.remove('token')
    Cookies.remove('enterpriseId')
    redirect(PAGE.SIGN_IN)
  }

  if (!response.ok) {
    console.error(data)
    Sentry.captureException(new ApiError(data))
    throw new Error(data.message)
  }

  return data as T
}
