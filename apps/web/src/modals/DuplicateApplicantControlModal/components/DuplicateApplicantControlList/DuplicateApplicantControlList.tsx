import { DUPLICATE_APPLICANTS_CONTROL_ITEMS } from '../../DuplicateApplicantControlModal.constants'
import DuplicateApplicantControlItem from '../DuplicateApplicantControlItem'
import * as Styles from './styles'

interface DuplicateApplicantControlListProps {
  id: number
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
}

const DuplicateApplicantControlList = ({
  id,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
}: DuplicateApplicantControlListProps) => {
  return (
    <Styles.Wrapper>
      {DUPLICATE_APPLICANTS_CONTROL_ITEMS.map((item, index) => (
        <DuplicateApplicantControlItem
          id={id}
          key={`${item.type}_${index}`}
          title={item.title}
          desc={item.description}
          type={item.type}
          isReApplyBlocked={isReApplyBlocked}
          isMultipleApplyBlocked={isMultipleApplyBlocked}
          isDuplicateApplyBlocked={isDuplicateApplyBlocked}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default DuplicateApplicantControlList
