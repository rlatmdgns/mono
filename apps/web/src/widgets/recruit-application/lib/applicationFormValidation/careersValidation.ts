import { isValueFilled } from './isValueFilled'
import { Career, CareerKeys } from '@/entities/Application/types'

const careerValidation = (career: Career) => {
  let keys: CareerKeys[] = [
    'company_name',
    'working_status',
    'start_date',
    'end_date',
    'employment_type',
    'department',
    'position',
  ]
  if (career.experience_type === '신입') {
    return true
  }
  if (career.working_status === '재직 중') {
    keys = keys.filter((key) => key !== 'end_date')
  }
  return keys.every((key) => isValueFilled(career[key]))
}

export const careersValidation = (form: Career[]) => {
  if (!form) {
    return true
  }
  return form?.every((career: Career) => {
    return careerValidation(career)
  })
}
