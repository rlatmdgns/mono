import * as Styles from '../styles'
import { EducationDataItem } from './EducationDataItem'
import { EmptyData } from '../EmptyData'
import { ApplicationViewerItemDataType } from '../../types'
import { isEducation } from '../../lib'

interface EducationsDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const EducationsData = ({ name, data }: EducationsDataProps) => {
  if (name !== 'educations') return null
  if (!isEducation(data)) return null

  const firstClassification = data[0]?.education_type
  const isEmpty = firstClassification === '해당없음'

  if (!firstClassification) {
    return <EmptyData text="미제출" />
  }
  if (isEmpty) {
    return <EmptyData text="해당없음" />
  }

  return (
    <Styles.List>
      {data.map((education, index) => (
        <EducationDataItem
          key={`applicant_education_${index}`}
          name={education.name}
          isTransfer={education.is_transfer}
          isNightSchool={education.is_night_school}
          major={education.major}
          minor={education.minor}
          doubleMajor={education.double_major}
          isMinor={education.is_minor}
          isDoubleMajor={education.is_double_major}
          periodEnrollment={education.period_enrollment}
          periodGraduation={education.period_graduation}
          enrollmentDate={education.enrollment_date}
          graduationDate={education.graduation_date}
          grade={education.grade}
          maximumGrade={education.maximum_grade}
          passingDate={education.passing_date}
          isGeneralEducational={education.is_general_educational}
          educationType={education.education_type}
          classfication={education.classfication}
        />
      ))}
    </Styles.List>
  )
}
