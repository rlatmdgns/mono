import * as Styles from './styles'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import EvaluationSubmitMethodButtonBox from '@/features/Evaluation/components/EvaluationSubmitMethodButtonBox'
import EvaluationEssayTextarea from '@/features/Evaluation/components/EvaluationEssayTextarea'
import EvaluationCommentTextarea from '@/features/Evaluation/components/EvaluationCommentTextarea'

interface EvaluationSubmitBox {
  type: EvaluationAllMethodLabel
  isRequiredComment?: boolean
  itemSrc: string
}

const EvaluationSubmitBox = ({ type, isRequiredComment, itemSrc }: EvaluationSubmitBox) => {
  return (
    <Styles.Wrapper>
      <EvaluationSubmitMethodButtonBox type={type} itemSrc={itemSrc} />
      <EvaluationEssayTextarea itemSrc={itemSrc} type={type} />
      <EvaluationCommentTextarea
        itemSrc={itemSrc}
        isRequiredComment={isRequiredComment}
        type={type}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationSubmitBox
