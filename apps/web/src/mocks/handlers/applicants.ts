import { http, HttpResponse } from 'msw'
import { applicantsMockData } from '@/mocks/model/applicant'

export const applicantsHandler = [
  http.post('/applicants/:id', () => {
    return HttpResponse.json(applicantsMockData)
  }),
]
