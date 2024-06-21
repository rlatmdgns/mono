import { AUTHORITY, MODAL } from '@/shared/constants'
import { useAuthority, useModal } from '@/shared/hooks'

import { Dropdown } from '@/shared/ui'

import useDeleteMyEvaluation from '@/features/Evaluation/hooks/useDeleteMyEvaluation'
import { evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'

import { useSetRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface DeleteMyEvaluationButtonProps {
  evaluationId: string
  applicantId: string
  tableId: string
}

const DeleteMyEvaluationButton = ({
  evaluationId,
  applicantId,
  tableId,
}: DeleteMyEvaluationButtonProps) => {
  const $t = useTranslations()
  const { openModal, closeModal } = useModal()
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const setEvaluationViewState = useSetRecoilState(evaluationViewStateAtom)

  const { deleteMyEvaluationMutate } = useDeleteMyEvaluation(
    `${evaluationId}`,
    applicantId,
    `${tableId}`,
    () => setEvaluationViewState(isEvaluation ? 'main' : 'member_result_list'),
  )

  const handleDeleteMyEvaluation = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('messages.evaluation_delete_confirm'),
      subtitle: $t('messages.evaluation_delete_description'),
      iconSource: 'icon/delete-solid',
      textConfirm: $t('common.confirm'),
      textCancel: $t('common.close'),
      onClick: () => {
        deleteMyEvaluationMutate()
        closeModal(MODAL.CONFIRM)
      },
    })
  }

  return (
    <Dropdown.Item onClick={handleDeleteMyEvaluation} isWarning>
      <Icon icon="icon/delete-solid" color="red500" />
      {$t('evaluation.delete')}
    </Dropdown.Item>
  )
}

export default DeleteMyEvaluationButton
