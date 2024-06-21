import * as Styles from './styles'
import { SummaryResult } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import EvaluationSummaryItem from '@/features/Evaluation/components/EvaluationSummaryItem'

interface EvaluationSummaryProps {
  isSummary: boolean
  summary?: SummaryResult
}

const EvaluationSummaryList = ({ isSummary, summary }: EvaluationSummaryProps) => {
  if (!isSummary || !summary) return null
  return (
    <Styles.Wrapper>
      {summary.evaluation_sections.map((section) => (
        <EvaluationSummaryItem
          key={section.section_id}
          sectionTitle={section.section_title}
          sectionDescription={section.section_description}
          evaluationItems={section.evaluation_items}
        />
      ))}
    </Styles.Wrapper>
  )
}

export default EvaluationSummaryList
