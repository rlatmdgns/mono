import * as Styles from './styles'
import { getEvaluationArticleLength } from '@/modals/evaluation/evaluation.factory'
import EvaluationTableFormHeader from '@/modals/evaluation/container/EvaluationTableFormHeader'
import EvaluationTableContent from '@/features/Evaluation/components/EvaluationTableContent'

interface EvaluationTemplatePreviewProps {
  template: any
}

const EvaluationTemplatePreview = ({ template }: EvaluationTemplatePreviewProps) => {
  const length = getEvaluationArticleLength(template?.evaluation_sections)

  if (!template) return
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <EvaluationTableFormHeader title={template?.table_title} length={length} isPreview />
        <EvaluationTableContent evaluationSections={template?.evaluation_sections} />
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default EvaluationTemplatePreview
