import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { getURLSearchParams } from '@/shared/lib/utils'
import {
  ScheduleSearchParams,
  ScheduleSearchResponse,
} from '@/services/interview/getScheduleSearch/getScheduleSearch.interface'

const getScheduleSearch = async (params: ScheduleSearchParams) => {
  const search = {
    query: '?',
  }

  params.interviewer.forEach((interview) => (search.query += `interviewer%5B%5D=${interview}&`))

  search.query += `start_date=${params.start_date}`
  search.query += `&end_date=${params.end_date}`

  return await http.get<ScheduleSearchResponse>(`${API_URL.SCHEDULE_SEARCH}${search.query}`)
}

export default getScheduleSearch
