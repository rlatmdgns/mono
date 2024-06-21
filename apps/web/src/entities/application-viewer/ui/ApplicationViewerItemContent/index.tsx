import { PersonalData } from '../PersonalData'
import { AddressData } from '../AddressData'
import { DisabledData } from '../DisabledData'
import { VeteranBenefitData } from '../VeteranBenefitData'
import { EducationsData } from '../EducationsData'
import { MilitaryData } from '../MilitaryData'
import { CareersData } from '../CareersData'
import { DocumentData } from '../DocumentData'
import { QuestionData } from '../QuestionData'
import { ActivitiesData } from '../ActivitiesData'
import { LanguagesData } from '../LanguagesData'
import { LicensesData } from '../LicensesData'
import { AwardsData } from '../AwardsData'
import { EmptyData } from '../EmptyData'
import { BirthdayData } from '../BirthdayData/BirthdayData'
import { NationalityData } from '../NationalityData'
import { GenderData } from '../GenderData'
import { ApplicationViewerItemDataType } from '../../types'

interface ApplicationViewerItemContentProps {
  name: string
  type?: string
  data: ApplicationViewerItemDataType
}

export const ApplicationViewerItemContent = ({
  name,
  type,
  data,
}: ApplicationViewerItemContentProps) => {
  const isEmptyArray = Array.isArray(data) && data.length < 1
  const isUnSubmitted = name !== 'default' && (!data || isEmptyArray)

  if (isUnSubmitted) {
    return <EmptyData text="미제출" />
  }
  return (
    <>
      <PersonalData name={name} data={data} />
      <AddressData name={name} data={data} />
      <BirthdayData name={name} data={data} />
      <NationalityData name={name} data={data} />
      <GenderData name={name} data={data} />
      <DisabledData name={name} data={data} />
      <VeteranBenefitData name={name} data={data} />
      <EducationsData name={name} data={data} />
      <MilitaryData name={name} data={data} />
      <CareersData name={name} data={data} />
      <DocumentData type={type} name={name} data={data} />
      <QuestionData type={type} data={data} />
      <ActivitiesData name={name} activities={data} />
      <LanguagesData name={name} data={data} />
      <LicensesData name={name} data={data} />
      <AwardsData name={name} data={data} />
    </>
  )
}
