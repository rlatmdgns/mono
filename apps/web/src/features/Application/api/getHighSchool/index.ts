import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { HighSchoolSearch } from '@/entities/Application/types'

export const getHighSchool = (high_school_name: string) => {
  return nestHttp.get<HighSchoolSearch[]>(API_URL.HIGHSCHOOL(high_school_name))
}
