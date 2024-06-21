import * as Styles from '../styles'
import { getDayFormat } from '@/shared/lib/utils'
import { DetailDivide } from '../DetailDivide'
import { GRADE_TYPES } from '@/features/Application/constants'

interface EducationDetailProps {
  major: string
  minor: string
  doubleMajor: string
  isMinor: boolean
  isDoubleMajor: boolean
  periodGraduation: string
  enrollmentDate: Date
  graduationDate: Date
  grade: string
  maximumGrade: string
  passingDate: Date | null
  isGeneralEducational: boolean
  educationType?: string
  classfication?: string
}

export const EducationDetail = ({
  major,
  minor,
  doubleMajor,
  isMinor,
  isDoubleMajor,
  periodGraduation,
  enrollmentDate,
  graduationDate,
  grade,
  maximumGrade,
  passingDate,
  isGeneralEducational,
  educationType,
  classfication,
}: EducationDetailProps) => {
  const educationTypeLabel = GRADE_TYPES.find((grade) => grade.dataValue === educationType)?.label
  const isUniv = educationType?.includes('university')
  const isHighSchoolGraduation = isGeneralEducational && passingDate
  const endDate = () => {
    if (
      periodGraduation === '휴학' ||
      periodGraduation === '재학 중' ||
      periodGraduation === '제적'
    ) {
      return '현재'
    }
    return getDayFormat(graduationDate, 'YY년 M월')
  }

  if (isHighSchoolGraduation) {
    return <Styles.Detail>{getDayFormat(passingDate, 'YY년 M월')}</Styles.Detail>
  }
  return (
    <>
      <Styles.Detail>
        {getDayFormat(enrollmentDate, 'YY년 M월')} ~ {endDate()}
      </Styles.Detail>
      {!isHighSchoolGraduation && (
        <Styles.Detail>
          {educationTypeLabel}
          <DetailDivide />
          {isUniv ? (
            <>
              {major}
              {isMinor && (
                <>
                  <DetailDivide />
                  {minor}(부전공)
                </>
              )}
              {isDoubleMajor && (
                <>
                  <DetailDivide />
                  {doubleMajor}(복수전공)
                </>
              )}
              {grade && (
                <>
                  <DetailDivide />
                  {grade}/{maximumGrade}
                </>
              )}
            </>
          ) : (
            classfication
          )}
        </Styles.Detail>
      )}
    </>
  )
}
