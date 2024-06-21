import * as Styles from '../styles'
import { EmptyData } from '../EmptyData'
import { CareerDataItem } from './CareerDataItem'
import { ApplicationViewerItemDataType } from '../../types'
import { isCareer } from '../../lib'

interface CareersDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const CareersData = ({ name, data }: CareersDataProps) => {
  if (name !== 'careers') return null
  if (!isCareer(data)) return null

  const isNewcomer = data[0]?.experience_type === '신입'

  if (isNewcomer) {
    return <EmptyData text="신입" />
  }
  return (
    <Styles.List>
      {data.map((career, index) => (
        <CareerDataItem
          key={`applicant_career_${index}`}
          companyName={career.company_name}
          startDate={career.start_date}
          endDate={career.end_date}
          workingStatus={career.working_status}
          employmentType={career.employment_type}
          department={career.department}
          position={career.position}
          role={career.role}
        />
      ))}
    </Styles.List>
  )
}
