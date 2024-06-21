import * as Styles from './styles'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import EvaluationTitleAndScore from '@/features/Evaluation/components/EvaluationTitleAndScore'
import { useTranslations } from 'next-intl'

interface EvaluationTableItemContentProps {
  itemTitle: string
  itemType: EvaluationAllMethodLabel
  isRequiredComment?: boolean
}

const EvaluationTableItemContent = ({
  itemTitle,
  itemType,
  isRequiredComment,
}: EvaluationTableItemContentProps) => {
  const $t = useTranslations()
  const itemMethods = EVALUATION_METHODS[filterMethodWithOutComment(itemType)]
  const isEssay = itemType === 'essay'

  return (
    <Styles.Wrapper>
      <EvaluationTitleAndScore title={itemTitle} isEssay={isEssay} />
      {!isEssay && (
        <Styles.MethodList>
          {itemMethods.map((method, index) => (
            <Styles.MethodItem key={index}>{method}</Styles.MethodItem>
          ))}
        </Styles.MethodList>
      )}
      {(itemType.includes('Comment') || isEssay) && (
        <Styles.InputBox>
          {$t('evaluation.feedback_placeholder')}
          {itemType.includes('Comment') &&
            (isRequiredComment ? ` (${$t('common.required')})` : ` (${$t('common.optional')})`)}
        </Styles.InputBox>
      )}
    </Styles.Wrapper>
  )
}

export default EvaluationTableItemContent
