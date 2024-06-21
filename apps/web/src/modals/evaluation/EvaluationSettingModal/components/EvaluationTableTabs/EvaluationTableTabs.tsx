import * as Styles from './styles'
import EvaluationTableTabList from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableTabList'
import { EvaluationTable } from '@/interface/evaluation'

interface EvaluationTableTabsProps {
  tables: EvaluationTable[]
  evaluationId: number
  selectedTableId: number
  onSelectTable: (id: number) => void
}

const EvaluationTableTabs = ({
  tables,
  evaluationId,
  selectedTableId,
  onSelectTable,
}: EvaluationTableTabsProps) => {
  return (
    <Styles.Wrapper>
      <EvaluationTableTabList
        tables={tables}
        selectedTableId={selectedTableId}
        onSelectTable={onSelectTable}
        evaluationId={evaluationId}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableTabs
