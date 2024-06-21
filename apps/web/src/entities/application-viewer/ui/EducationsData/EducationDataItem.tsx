import * as Styles from '../styles'
import { StateBadge } from './StateBadge'
import { EducationDetail } from './EducationDetail'

interface EducationDataItemProps {
  name: string
  isTransfer: boolean
  isNightSchool: boolean
  major: string
  minor: string
  doubleMajor: string
  isMinor: boolean
  isDoubleMajor: boolean
  periodEnrollment: string | null
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

export const EducationDataItem = ({
  name,
  isTransfer,
  isNightSchool,
  major,
  minor,
  doubleMajor,
  isMinor,
  isDoubleMajor,
  periodEnrollment,
  periodGraduation,
  enrollmentDate,
  graduationDate,
  grade,
  maximumGrade,
  passingDate,
  isGeneralEducational,
  educationType,
  classfication,
}: EducationDataItemProps) => {
  return (
    <Styles.Item>
      <Styles.Text>
        {isGeneralEducational ? '대입 검정고시' : name}
        <StateBadge
          isTransfer={isTransfer}
          isNightSchool={isNightSchool}
          periodEnrollment={periodEnrollment}
          periodGraduation={periodGraduation}
        />
      </Styles.Text>
      <EducationDetail
        major={major}
        minor={minor}
        doubleMajor={doubleMajor}
        isMinor={isMinor}
        isDoubleMajor={isDoubleMajor}
        periodGraduation={periodGraduation}
        enrollmentDate={enrollmentDate}
        graduationDate={graduationDate}
        grade={grade}
        maximumGrade={maximumGrade}
        passingDate={passingDate}
        isGeneralEducational={isGeneralEducational}
        educationType={educationType}
        classfication={classfication}
      />
    </Styles.Item>
  )
}
