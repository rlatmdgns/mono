import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import useRestorePostingLocker from '@/app/[locale]/posting-locker/_hooks/useRestorePostingLocker'

import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingStoreButtonProps {
  id: number
  handleClosedToggle: (status: boolean) => void
}

const PostingReStoreButton = ({ id, handleClosedToggle }: PostingStoreButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { restoreMutate } = useRestorePostingLocker()

  const $t = useTranslations()
  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      state: 'positive',
      title: $t('messages.deadline_announcement_restore_confirm'),
      subtitle: $t('messages.deadline_announcement_restore_description'),
      iconSource: 'icon/return-solid',
      textConfirm: $t('common.restore'),
      onClick: () => {
        restoreMutate(id)
        closeModal(MODAL.CONFIRM)
        handleClosedToggle(false)
      },
    })
  }
  return (
    <Dropdown.Item onClick={handleClick}>
      <Icon icon="icon/archive-solid" color="neutralGray600" />
      {$t('announcement_detail.features.restore_announcement')}
    </Dropdown.Item>
  )
}

export default PostingReStoreButton
