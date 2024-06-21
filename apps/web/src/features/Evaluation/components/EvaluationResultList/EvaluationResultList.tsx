import EvaluationResultItem from '@/features/Evaluation/components/EvaluationResultItem'
import { EvaluationResultItem as EvaluationResultItemProps } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'

interface EvaluationResultListProps {
  evaluationItems: EvaluationResultItemProps[]
}

const EvaluationResultList = ({ evaluationItems }: EvaluationResultListProps) => {
  return (
    <>
      {evaluationItems.map((item) => (
        <EvaluationResultItem
          key={item.item_id}
          itemTitle={item.item_title}
          itemType={item.item_type}
          evaluationScore={item.evaluation_score}
          evaluationSubjective={item.evaluation_subjective}
          evaluationOptionalValue={item.evaluation_optional_value}
        />
      ))}
    </>
  )
}

export default EvaluationResultList
