import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { UniversitySearch } from '@/entities/Application/types'

export const getUniversity = (grade: string, university_duration?: number) => {
  return nestHttp.get<UniversitySearch[]>(API_URL.UNIVERSITY(grade, university_duration))
}
