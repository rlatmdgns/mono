import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'

import useEditStep from '@/app/[locale]/postings/_hooks/useEditStep'
import useDeleteStep from '@/app/[locale]/postings/_hooks/useDeleteStep'

import { PostingStep } from '@/interface/applicants'

import React from 'react'
import { useTranslations } from 'next-intl'

interface StepMenuGroupProps {
  postingId: string
  step: PostingStep
  isDocumentSubmission: boolean
  isFinalPass: boolean
}

const StepMenuGroup = ({
  postingId,
  step,
  isDocumentSubmission,
  isFinalPass,
}: StepMenuGroupProps) => {
  const { openModal, closeModal } = useModal()
  const { editStepMutate } = useEditStep(postingId, step.step_id)
  const { deleteStepMutate } = useDeleteStep(postingId, step.step_id)

  const $t = useTranslations()
  const isDeleteDisabled = step.applicant_count > 0

  const editStepTitle = (title: string) => {
    editStepMutate(title)
    closeModal(MODAL.INPUT)
  }
  const handleEdit = () => {
    openModal(MODAL.INPUT, {
      title: $t('announcement_detail.features.change_step_name'),
      placeholder: $t('announcement_detail.step.step_title_input_placeholder'),
      value: step.step_name,
      textSubmit: $t('common.save'),
      maxLength: 50,
      onSubmit: editStepTitle,
    })
  }

  const deleteStep = () => {
    deleteStepMutate()
    closeModal(MODAL.CONFIRM)
  }

  const handleDelete = () => {
    openModal(MODAL.CONFIRM, {
      iconSource: 'icon/delete-solid',
      title: $t('announcement_detail.step.delete_step_confirm', { stepName: step.step_name }),
      subtitle: $t('announcement_detail.step.delete_step_description'),

      onClick: deleteStep,
    })
  }

  if (isDocumentSubmission || isFinalPass) return null
  return (
    <>
      <Dropdown.Item onClick={handleEdit}>
        <Icon icon="icon/edit-solid" color="neutralGray500" />
        {$t('announcement_detail.features.change_step_name')}
      </Dropdown.Item>
      <Dropdown.Item disabled={isDeleteDisabled} onClick={handleDelete} isWarning>
        <Icon icon="icon/delete-solid" color="red500" />
        {$t('common.delete')}
      </Dropdown.Item>
    </>
  )
}

export default StepMenuGroup
