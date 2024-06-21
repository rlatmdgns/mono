import * as Styles from '../styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isAward } from '../../lib'
import { EmptyData } from '../EmptyData'
import { AwardDataItem } from './AwardDataItem'

interface AwardsDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const AwardsData = ({ name, data }: AwardsDataProps) => {
  if (name !== 'awards') return null
  if (!isAward(data)) return null

  const isEmpty = !data[0]?.is_award
  if (isEmpty) {
    return <EmptyData text="없음" />
  }
  return (
    <Styles.List>
      {data.map((award, index) => (
        <AwardDataItem
          key={`applicant_veteran_award_${index}`}
          description={award.description}
          organization={award.organization}
          awardDate={award.award_date}
          detailDescription={award.detail_description}
        />
      ))}
    </Styles.List>
  )
}
