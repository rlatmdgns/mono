import { EvaluationResultSection } from '@/services/evaluation/getEvaluationMemberResult/getEvaluationMemberResult.interface'
import EvaluationResultSectionItem from '@/features/Evaluation/components/EvaluationResultSectionItem'

interface EvaluationResultSectionListProps {
  evaluationSections: EvaluationResultSection[]
}

const EvaluationResultSectionList = ({ evaluationSections }: EvaluationResultSectionListProps) => {
  return (
    <>
      {evaluationSections.map((section) => (
        <EvaluationResultSectionItem
          key={section.section_id}
          sectionTitle={section.section_title}
          sectionDescription={section.section_description}
          evaluationItems={section.evaluation_items}
        />
      ))}
    </>
  )
}

export default EvaluationResultSectionList
