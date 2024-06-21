import * as Styles from './styles'
import { SummaryEvaluationItemScore } from '@/services/evaluation/getEvaluationMembersResult/getEvaluationMembersResult.interface'
import { EvaluationAllMethodLabel } from '@/modals/evaluation/evaluation.interface'
import { convertEvaluationSummaryItemStatus } from '@/features/Evaluation/components/EvaluationTabList/EvaluationTabList.factory'
import EvaluationTabItem from '@/features/Evaluation/components/EvaluationTabItem'

interface EvaluationTabListProps {
  itemType: EvaluationAllMethodLabel
  summaryScore: SummaryEvaluationItemScore[]
}

const EvaluationTabList = ({ itemType, summaryScore }: EvaluationTabListProps) => {
  const isPoints = itemType.includes('points')
  const scoreItems = convertEvaluationSummaryItemStatus(itemType, summaryScore)
  return (
    <Styles.TabList>
      {scoreItems.map((item, index) => (
        <EvaluationTabItem
          key={index}
          isPoints={isPoints}
          title={item.title}
          percent={item.percent || 0}
        />
      ))}
    </Styles.TabList>
  )
}

export default EvaluationTabList
