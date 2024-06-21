import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { UniversitySearch } from '@/entities/Application/types'

export const getGraduateUniversity = (grade: string, type: string) => {
  return nestHttp.get<UniversitySearch[]>(API_URL.GRADUATE_UNIVERSITY(grade, type))
}
