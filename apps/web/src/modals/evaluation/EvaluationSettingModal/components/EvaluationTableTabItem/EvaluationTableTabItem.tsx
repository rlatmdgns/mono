import * as Styles from './styles'
import EvaluationTableItemMenu from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableItemMenu'
import { EvaluationTableState } from '@/interface/evaluation'

interface EvaluationTableTabItemProps {
  id: number
  title: string
  canDelete: EvaluationTableState
  canEdit: EvaluationTableState
  selectedTableId: number
  onSelectTable: (id: number) => void
  evaluationId: number
}

const EvaluationTableTabItem = ({
  id,
  title,
  canDelete,
  canEdit,
  selectedTableId,
  onSelectTable,
  evaluationId,
}: EvaluationTableTabItemProps) => {
  const isSelected = selectedTableId === id
  const handleClick = () => onSelectTable(id)

  return (
    <Styles.Wrapper $isSelected={isSelected} onClick={handleClick}>
      <Styles.Text>{title}</Styles.Text>
      <Styles.MenuBox>
        <EvaluationTableItemMenu
          isSelected={isSelected}
          canDelete={canDelete}
          canEdit={canEdit}
          evaluationId={evaluationId}
          id={id}
        />
      </Styles.MenuBox>
    </Styles.Wrapper>
  )
}

export default EvaluationTableTabItem
