import { MODAL } from '@/shared/constants'
import { Dropdown, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useModal } from '@/shared/hooks'

import { EvaluationTableState } from '@/interface/evaluation'
import React from 'react'
import { useTranslations } from 'next-intl'

interface UpdateEvaluationTableButtonProps {
  id: number
  evaluationId: number
  canEdit: EvaluationTableState
}

const UpdateEvaluationTableButton = ({
  id,
  evaluationId,
  canEdit,
}: UpdateEvaluationTableButtonProps) => {
  const $t = useTranslations('evaluation')
  const { openModal } = useModal()
  const updateDisabledTooltip =
    canEdit?.reason === 'evaluation_existence'
      ? $t('evaluation_table_in_progress_description')
      : $t('evaluation_table_in_closed_description')

  const handleClick = () => {
    openModal(MODAL.UPDATE_EVALUATION_TABLE, {
      evaluationId: evaluationId,
      tableId: id,
    })
  }

  return (
    <Tooltip disabled={canEdit.status} text={updateDisabledTooltip} direction="right">
      <Dropdown.Item onClick={handleClick} disabled={!canEdit.status}>
        <Icon icon="icon/edit-solid" color="neutralGray500" />
        {$t('modify_evaluation_table')}
      </Dropdown.Item>
    </Tooltip>
  )
}

export default UpdateEvaluationTableButton
