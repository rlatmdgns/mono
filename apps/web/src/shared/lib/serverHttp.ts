import { BASE_URL, NEST_URL } from '@/shared/constants'
import { handleResponse } from '@/shared/lib/helper'
import { cookies } from 'next/headers'

const headers = () => {
  const cookieStore = cookies()
  const token = cookieStore.get('token')?.value
  const enterpriseId = cookieStore.get('enterpriseId')?.value

  const defaultHeaders = {
    'Content-Type': 'application/json',
    accept: 'application/json',
  }

  if (!token) {
    return new Headers(defaultHeaders)
  }

  return new Headers({
    ...defaultHeaders,
    authorization: `Bearer ${token}`,
    'enterprise-id': `${enterpriseId}`,
  })
}

export const serverHttp = {
  get: async <T>(url: string, cache?: RequestCache): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: headers(),
      cache: cache || 'no-store',
    })
    return handleResponse<T>(response)
  },

  post: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },
}

export const serverNestHttp = {
  get: async <T>(url: string, cache?: RequestCache): Promise<T> => {
    const response = await fetch(`${NEST_URL}${url}`, {
      method: 'GET',
      headers: headers(),
      cache: cache || 'no-store',
    })
    return handleResponse<T>(response)
  },

  post: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(`${NEST_URL}${url}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },
}
