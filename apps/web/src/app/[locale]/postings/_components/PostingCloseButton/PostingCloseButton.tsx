import React from 'react'

import { MODAL } from '@/shared/constants'
import { Dropdown } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { Icon } from '@repo/ui'
import useClosePosting from '@/app/[locale]/postings/_hooks/useClosePosting'
import { useTranslations } from 'next-intl'

interface PostingCloseButtonProps {
  id: number
  handleClosedToggle: (status: boolean) => void
}

const PostingCloseButton = ({ id, handleClosedToggle }: PostingCloseButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { closePostingMutate } = useClosePosting(id)
  const $t = useTranslations('announcement_detail.setting.announcement')

  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('deadline_description'),
      iconSource: 'icon/check-line1',
      textConfirm: $t('deadline'),
      onClick: () => {
        closePostingMutate()
        closeModal(MODAL.CONFIRM)
        handleClosedToggle(false)
      },
    })
  }

  return (
    <Dropdown.Item onClick={handleClick} isWarning>
      <Icon icon="icon/ban-line" color="red500" />
      {$t('announce_deadline')}
    </Dropdown.Item>
  )
}

export default PostingCloseButton
