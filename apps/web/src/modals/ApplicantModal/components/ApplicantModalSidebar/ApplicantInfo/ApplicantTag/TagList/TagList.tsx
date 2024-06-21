import * as Styles from './styles'
import Tag from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantTag/Tag'
import AddTag from '@/modals/ApplicantModal/components/AddTag'

interface TagListProps {
  isEvaluator: boolean
  tags?: string[]
  applicantTags?: string[]
}
const TagList = ({ isEvaluator, tags, applicantTags }: TagListProps) => {
  return (
    <Styles.Wrapper>
      <AddTag isEvaluator={isEvaluator} applicantTags={applicantTags} tags={tags} />
      {applicantTags?.map((tag, index) => <Tag key={index} index={index} value={tag} />)}
    </Styles.Wrapper>
  )
}

export default TagList
