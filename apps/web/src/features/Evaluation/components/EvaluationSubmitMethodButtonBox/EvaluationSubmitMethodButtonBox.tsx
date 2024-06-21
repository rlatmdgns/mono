import * as Styles from './styles'
import { useFormContext } from 'react-hook-form'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { filterMethodWithOutComment } from '@/modals/evaluation/evaluation.factory'
import { EVALUATION_METHODS } from '@/modals/evaluation/evaluation.constants'
import { EVALUATION_METHOD_SCORES } from '@/features/Evaluation/Evaluation.constants'

interface MakeEvaluationMethodButtonBoxProps {
  type: EvaluationAllMethodLabel
  itemSrc: string
}

const EvaluationSubmitMethodButtonBox = ({ type, itemSrc }: MakeEvaluationMethodButtonBoxProps) => {
  const { setValue, watch } = useFormContext()
  const evaluationMethods = EVALUATION_METHODS[filterMethodWithOutComment(type)]
  const methodScores = EVALUATION_METHOD_SCORES[filterMethodWithOutComment(type)]

  const handleValue = (methodValue: number) => {
    setValue(`${itemSrc}.item_score`, methodValue)
  }

  if (type === 'essay') return null
  return (
    <Styles.Wrapper>
      {evaluationMethods.map((method, index) => {
        const methodValue = methodScores[index]
        return (
          <Styles.Button
            type="button"
            key={method}
            onClick={() => handleValue(methodValue)}
            $isSelected={watch(`${itemSrc}.item_score`) === methodValue}
          >
            {method}
          </Styles.Button>
        )
      })}
    </Styles.Wrapper>
  )
}

export default EvaluationSubmitMethodButtonBox
