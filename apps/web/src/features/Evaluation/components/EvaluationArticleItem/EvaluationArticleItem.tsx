import * as Styles from './styles'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import EvaluationTitleAndScore from '@/features/Evaluation/components/EvaluationTitleAndScore'
import EvaluationSubmitBox from '@/features/Evaluation/components/EvaluationSubmitBox'
import { useFormContext } from 'react-hook-form'

interface EvaluationArticleItemProps {
  itemTitle: string
  itemType: EvaluationAllMethodLabel
  isRequiredComment?: boolean
  itemSrc: string
}

const EvaluationArticleItem = ({
  itemTitle,
  itemType,
  isRequiredComment,
  itemSrc,
}: EvaluationArticleItemProps) => {
  const { watch } = useFormContext()
  const score = watch(`${itemSrc}.item_score`) || 0
  const isEssay = itemType === 'essay'

  return (
    <Styles.Wrapper>
      <EvaluationTitleAndScore title={itemTitle} isEssay={isEssay} score={score} />
      <EvaluationSubmitBox
        type={itemType}
        isRequiredComment={isRequiredComment}
        itemSrc={itemSrc}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationArticleItem
