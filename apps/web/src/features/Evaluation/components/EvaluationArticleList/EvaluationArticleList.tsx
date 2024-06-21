import * as Styles from './styles'
import EvaluationArticleItem from '@/features/Evaluation/components/EvaluationArticleItem'
import { EvaluationTableArticle } from '@/features/Evaluation/Evaluation.interface'

interface EvaluationArticleListProps {
  evaluationItems: EvaluationTableArticle[]
  sectionIndex: number
}

const EvaluationArticleList = ({ evaluationItems, sectionIndex }: EvaluationArticleListProps) => {
  return (
    <Styles.Wrapper>
      {evaluationItems?.map((item, index) => {
        const itemSrc = `evaluation_data.evaluation_sections.${sectionIndex}.evaluation_items.${index}`
        return (
          <EvaluationArticleItem
            key={index}
            itemTitle={item.item_title}
            itemType={item.item_type}
            isRequiredComment={item.is_required_comment}
            itemSrc={itemSrc}
          />
        )
      })}
    </Styles.Wrapper>
  )
}

export default EvaluationArticleList
