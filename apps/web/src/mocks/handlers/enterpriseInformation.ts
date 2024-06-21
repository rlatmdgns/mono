import { http, HttpResponse } from 'msw'
import { API_URL } from '@/shared/constants'
import { enterPriseInformationMockData } from '@/mocks/model/enterpriseInformation'

export const enterPriseInformationHandler = [
  http.get(API_URL.ENTERPRISE_INFORMATION, () => {
    return HttpResponse.json(enterPriseInformationMockData)
  }),
]
