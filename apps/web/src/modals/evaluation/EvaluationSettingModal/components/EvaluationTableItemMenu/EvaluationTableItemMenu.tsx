import { IconButton, Dropdown } from '@/shared/ui'
import DeleteEvaluationTableButton from '@/modals/evaluation/EvaluationSettingModal/components/DeleteEvaluationTableButton'
import UpdateEvaluationTableButton from '@/modals/evaluation/EvaluationSettingModal/components/UpdateEvaluationTableButton/UpdateEvaluationTableButton'
import { EvaluationTableState } from '@/interface/evaluation'

interface EvaluationTableTabItemMenuProps {
  isSelected: boolean
  canDelete: EvaluationTableState
  canEdit: EvaluationTableState
  id: number
  evaluationId: number
}

const EvaluationTableItemMenu = ({
  isSelected,
  canDelete,
  canEdit,
  id,
  evaluationId,
}: EvaluationTableTabItemMenuProps) => {
  if (!isSelected) return null
  return (
    <Dropdown isNotPortal button={<IconButton icon="icon/more-solid" size="xs" />}>
      <UpdateEvaluationTableButton evaluationId={evaluationId} id={id} canEdit={canEdit} />
      <DeleteEvaluationTableButton evaluationId={evaluationId} id={id} canDelete={canDelete} />
    </Dropdown>
  )
}

export default EvaluationTableItemMenu
