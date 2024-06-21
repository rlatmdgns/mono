import { BASE_URL } from '@/shared/constants'
import { handleResponse } from '@/shared/lib/helper'

interface VerifyTokenResponse {
  massage: string
  is_plan: boolean
}

export const verifyToken = async (token?: string): Promise<VerifyTokenResponse> => {
  const api = `${BASE_URL}/token`

  const response = await fetch(api, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  return handleResponse(response)
}
