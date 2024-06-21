import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import useClosePosting from '@/app/[locale]/postings/_hooks/useClosePosting'

import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingCloseButtonProps {
  id: number
  handleClosedToggle: (status: boolean) => void
}

const PostingOpenButton = ({ id, handleClosedToggle }: PostingCloseButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { closePostingMutate } = useClosePosting(id)
  const $t = useTranslations('announcement_detail.setting.announcement')

  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('deadline_cancel_description'),
      iconSource: 'icon/check-line1',
      textConfirm: $t('deadline_cancel'),
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
      {$t('deadline_cancel')}
    </Dropdown.Item>
  )
}

export default PostingOpenButton
