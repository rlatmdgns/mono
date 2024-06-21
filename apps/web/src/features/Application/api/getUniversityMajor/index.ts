import { API_URL } from '@/shared/constants'
import { nestHttp } from '@/shared/lib/http'
import { UniversityMajorSearch } from '@/entities/Application/types'

export const getUniversityMajor = (
  univ_type: string,
  university_name: string,
  department_name: string,
) => {
  return nestHttp.get<UniversityMajorSearch[]>(
    API_URL.UNIVERSITY_MAJOR(univ_type, university_name, department_name),
  )
}
