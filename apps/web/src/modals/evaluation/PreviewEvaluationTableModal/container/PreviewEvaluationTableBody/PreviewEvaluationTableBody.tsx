import * as Styles from './styles'
import { EvaluationTableSection } from '@/features/Evaluation/Evaluation.interface'
import EvaluationTableContent from '@/features/Evaluation/components/EvaluationTableContent'

interface PreviewEvaluationTableBodyProps {
  title: string
  evaluation_sections: EvaluationTableSection[]
}

const PreviewEvaluationTableBody = ({
  title,
  evaluation_sections,
}: PreviewEvaluationTableBodyProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.Title>{title}</Styles.Title>
        <EvaluationTableContent evaluationSections={evaluation_sections} />
      </Styles.Content>
    </Styles.Wrapper>
  )
}

export default PreviewEvaluationTableBody
