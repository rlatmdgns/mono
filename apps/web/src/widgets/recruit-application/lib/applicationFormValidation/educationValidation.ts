import { isValueFilled } from './isValueFilled'
import { Education, EducationKeys } from '@/entities/Application/types'

const highSchoolValidation = (education: Education) => {
  const isGeneralEducational = !!education?.is_general_educational

  let keys: EducationKeys[] = [
    'name',
    'classfication',
    'period_enrollment',
    'period_graduation',
    'enrollment_date',
    'graduation_date',
  ]

  if (isGeneralEducational) {
    return !!education.passing_date
  }

  if (education.period_graduation === '재학 중') {
    keys = keys.filter((key) => key !== 'graduation_date')
  }

  return keys.every((key) => isValueFilled(education[key]))
}

const universityValidation = (education: Education) => {
  let keys: EducationKeys[] = [
    'name',
    'major',
    'line',
    'classfication',
    'period_enrollment',
    'period_graduation',
    'enrollment_date',
    'graduation_date',
    'grade',
    'maximum_grade',
  ]

  if (education.period_graduation === '재학 중') {
    keys = keys.filter((key) => key !== 'graduation_date')
  }

  if (!!education.is_minor) {
    keys.push('minor', 'minor_line')
  }

  if (!!education.is_double_major) {
    keys.push('double_major', 'double_major_line')
  }

  return keys.every((key) => isValueFilled(education[key]))
}

export const educationValidation = (form: Education[]) => {
  if (!form) {
    return true
  }

  return form?.every((education: Education) => {
    if (!education.education_type) {
      return false
    }
    if (education?.education_type === '해당없음') {
      return true
    }
    if (education?.education_type === 'highschool') {
      return highSchoolValidation(education)
    }
    return universityValidation(education)
  })
}
