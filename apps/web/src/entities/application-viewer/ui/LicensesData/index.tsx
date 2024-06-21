import * as Styles from '../styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isLicense } from '../../lib'
import { EmptyData } from '../EmptyData'
import { LicenseDataItem } from './LicenseDataItem'

interface LicensesDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const LicensesData = ({ name, data }: LicensesDataProps) => {
  if (name !== 'licenses') return null
  if (!isLicense(data)) return null

  const isEmpty = !data[0]?.is_licence
  if (isEmpty) {
    return <EmptyData text="없음" />
  }
  return (
    <Styles.List>
      {data.map((item, index) => (
        <LicenseDataItem
          key={`applicant_license_${index}`}
          name={item.name}
          level={item.level}
          issuingAuthority={item.issuing_authority}
          acquisitionDate={item.acquisition_date}
          qualificationNumber={item.qualification_number}
        />
      ))}
    </Styles.List>
  )
}
