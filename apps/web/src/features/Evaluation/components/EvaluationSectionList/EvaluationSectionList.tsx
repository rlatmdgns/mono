import * as Styles from './styles'
import EvaluationItem from '@/features/Evaluation/components/EvaluationItem'
import EvaluationBody from '@/features/Evaluation/components/EvaluationBody'
import { EvaluationTableSection } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationListProps {
  evaluation_sections: EvaluationTableSection[]
}

const EvaluationSectionList = ({ evaluation_sections }: EvaluationListProps) => {
  return (
    <EvaluationBody hasFooter>
      <Styles.Wrapper>
        {evaluation_sections.map((section, index) => (
          <EvaluationItem
            key={section.section_id}
            sectionIndex={index}
            sectionTitle={section.section_title}
            sectionDescription={section.section_description}
            evaluationItems={section.evaluation_items}
          />
        ))}
      </Styles.Wrapper>
    </EvaluationBody>
  )
}

export default EvaluationSectionList
