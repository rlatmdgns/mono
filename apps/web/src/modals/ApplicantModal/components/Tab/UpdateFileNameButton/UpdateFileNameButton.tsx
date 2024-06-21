import { MODAL } from '@/shared/constants'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useModal } from '@/shared/hooks'

import React from 'react'
import { useTranslations } from 'next-intl'

interface UpdateFileButtonProps {
  id: number
  isResume: boolean
  title: string
  onToggleClosed: (status: boolean) => void
}

const UpdateFileNameButton = ({ id, title, isResume, onToggleClosed }: UpdateFileButtonProps) => {
  const $t = useTranslations('common')
  const { openModal } = useModal()
  const handleModalOpen = () => {
    openModal(MODAL.UPDATE_APPLICANT_FILE_NAME, {
      id: id,
      file_name: title,
    })
    onToggleClosed(false)
  }

  if (isResume) return null

  return (
    <Dropdown.Item size="lg" onClick={handleModalOpen}>
      <Icon icon="icon/edit-line" color="neutralGray500" />
      {$t('modify_document')}
    </Dropdown.Item>
  )
}

export default UpdateFileNameButton
