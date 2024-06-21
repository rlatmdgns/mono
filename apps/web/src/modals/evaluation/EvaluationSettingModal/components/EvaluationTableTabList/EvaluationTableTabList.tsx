import * as Styles from './styles'
import EvaluationTableTabItem from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableTabItem'
import { EvaluationTable } from '@/interface/evaluation'

interface EvaluationTableTabListProps {
  tables: EvaluationTable[]
  selectedTableId: number
  onSelectTable: (id: number) => void
  evaluationId: number
}

const EvaluationTableTabList = ({
  tables,
  selectedTableId,
  onSelectTable,
  evaluationId,
}: EvaluationTableTabListProps) => {
  const activeTableIndex = tables.findIndex((table) => table.table_id === selectedTableId) || 0
  const barPositionTop = activeTableIndex * 48

  return (
    <Styles.Wrapper>
      {tables.map((table) => (
        <EvaluationTableTabItem
          key={table.table_id}
          id={table.table_id}
          title={table.table_title}
          canDelete={table.can_delete}
          canEdit={table.can_edit}
          selectedTableId={selectedTableId}
          onSelectTable={onSelectTable}
          evaluationId={evaluationId}
        />
      ))}
      <Styles.Bar $top={barPositionTop} />
    </Styles.Wrapper>
  )
}

export default EvaluationTableTabList
