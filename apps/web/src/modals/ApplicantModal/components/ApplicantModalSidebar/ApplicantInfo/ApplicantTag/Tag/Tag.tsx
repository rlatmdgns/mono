import * as Styles from './styles'
import { IconButton } from '@/shared/ui'
import { AUTHORITY } from '@/shared/constants'
import useDeleteApplicantTag from '@/modals/ApplicantModal/hooks/useDeleteApplicantTag'
import { useRecoilValue } from 'recoil'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import { useAuthority } from '@/shared/hooks'

interface TagProps {
  index: number
  value: string
}

const Tag = ({ index, value }: TagProps) => {
  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  const applicantId = useRecoilValue(applicantIdAtom)
  const { applicantTagMutate } = useDeleteApplicantTag(applicantId)

  const handleDeleteTag = () => {
    applicantTagMutate(index)
  }

  if (isEvaluator) {
    return (
      <Styles.Wrapper>
        <Styles.Text>{value}</Styles.Text>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <Styles.Text>{value}</Styles.Text>
      <IconButton onClick={handleDeleteTag} icon="icon/cancle-solid" size="xs" />
    </Styles.Wrapper>
  )
}

export default Tag
