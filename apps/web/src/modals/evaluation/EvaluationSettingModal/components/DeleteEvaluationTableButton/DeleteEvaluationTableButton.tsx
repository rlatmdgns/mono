import { MODAL } from '@/shared/constants'
import { Dropdown, Tooltip } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { Icon } from '@repo/ui'
import useDeleteEvaluationTable from '@/modals/evaluation/EvaluationSettingModal/hooks/useDeleteEvaluationTable'
import { EvaluationTableState } from '@/interface/evaluation'

import React from 'react'
import { useTranslations } from 'next-intl'

interface DeleteEvaluationTableButtonProps {
  id: number
  evaluationId: number
  canDelete: EvaluationTableState
}

const DeleteEvaluationTableButton = ({
  id,
  evaluationId,
  canDelete,
}: DeleteEvaluationTableButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { deleteEvaluationTableMutate } = useDeleteEvaluationTable(`${evaluationId}`, `${id}`)
  const $t = useTranslations()

  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('evaluation.delete_evaluation_table_title'),
      subtitle: $t('evaluation.delete_evaluation_table_description'),
      iconSource: 'icon/delete-solid',
      textConfirm: $t('common.confirm'),
      textCancel: $t('common.close'),
      onClick: () => {
        deleteEvaluationTableMutate()
        closeModal(MODAL.CONFIRM)
      },
    })
  }

  return (
    <Tooltip
      disabled={canDelete.status}
      text={$t('evaluation.not_delete_is_evaluation_deadline')}
      direction="right"
    >
      <Dropdown.Item onClick={handleClick} disabled={!canDelete.status} isWarning>
        <Icon icon="icon/check-solid" color="red500" />
        {$t('evaluation.delete_evaluation_table')}
      </Dropdown.Item>
    </Tooltip>
  )
}

export default DeleteEvaluationTableButton
