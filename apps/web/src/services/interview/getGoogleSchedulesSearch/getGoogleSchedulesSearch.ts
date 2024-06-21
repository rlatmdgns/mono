import { API_URL } from '@/shared/constants'
import { ScheduleSearchParams } from '@/interface/schedules'
import { nestHttp } from '@/shared/lib/http'
import { GoogleSchedules } from '@/services/interview/getScheduleSearch/getScheduleSearch.interface'

const getGoogleSchedulesSearch = async (params: ScheduleSearchParams) => {
  const search = {
    query: '?',
  }

  params.interviewer.forEach((interview) => (search.query += `interviewer%5B%5D=${interview}&`))

  search.query += `start_date=${params.start_date}`
  search.query += `&end_date=${params.end_date}`

  return await nestHttp.get<GoogleSchedules[]>(`${API_URL.GOOGLE_SCHEDULE}${search.query}`)
}

export default getGoogleSchedulesSearch
