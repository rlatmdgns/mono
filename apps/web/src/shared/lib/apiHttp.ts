import { handleResponse } from '@/shared/lib/helper'
import { headers } from '@/shared/lib/http'

export const apiHttp = {
  post: async <T, R>(url: string, data?: T): Promise<R> => {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(data),
    })
    return handleResponse<R>(response)
  },
}
