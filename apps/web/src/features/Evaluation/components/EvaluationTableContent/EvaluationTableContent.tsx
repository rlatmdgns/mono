import * as Styles from './styles'
import { EvaluationTableSection } from '@/interface/evaluation'
import EvaluationSection from '@/features/Evaluation/components/EvaluationSection'
import EvaluationTableItemContent from '@/features/Evaluation/components/EvaluationTableItemContent'

interface EvaluationTableContentProps {
  evaluationSections: EvaluationTableSection[]
}

const EvaluationTableContent = ({ evaluationSections }: EvaluationTableContentProps) => {
  return (
    <Styles.Wrapper>
      {evaluationSections?.map((section, index) => {
        return (
          <Styles.Item key={`evaluation_${index}`}>
            <EvaluationSection
              key={`evaluation_section_${index}`}
              title={section.section_title}
              desc={section.section_description}
            />
            {section.evaluation_items.map((item, index) => (
              <EvaluationTableItemContent
                key={`evaluation_item_${index}`}
                itemTitle={item.item_title}
                itemType={item.item_type}
                isRequiredComment={item.is_required_comment}
              />
            ))}
          </Styles.Item>
        )
      })}
    </Styles.Wrapper>
  )
}
export default EvaluationTableContent
