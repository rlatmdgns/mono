import * as Styles from '../styles'
import { EmptyData } from '../EmptyData'
import { ApplicationViewerItemDataType } from '../../types'
import { isVeteranBenefit } from '../../lib'

interface VeteranBenefitDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const VeteranBenefitData = ({ name, data }: VeteranBenefitDataProps) => {
  if (name !== 'veteran_benefit') return null
  if (!isVeteranBenefit(data)) return null

  if (!data.is_veteran_benefit) {
    return <EmptyData text="비대상" />
  }
  return (
    <Styles.Content>
      <Styles.Text>대상</Styles.Text>
      <Styles.Detail>{data.veteran_benefit_number}</Styles.Detail>
    </Styles.Content>
  )
}
