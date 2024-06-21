import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'
import useStorePosting from '@/app/[locale]/postings/_hooks/useStorePosting'

import React from 'react'
import { useLocale, useTranslations } from 'next-intl'

interface PostingStoreButtonProps {
  id: number
  disabled?: boolean
  handleClosedToggle: (status: boolean) => void
}

const PostingStoreButton = ({ id, disabled, handleClosedToggle }: PostingStoreButtonProps) => {
  const { openModal, closeModal } = useModal()
  const { storePostingMutate } = useStorePosting(id)
  const $t = useTranslations('announcement_detail.setting.announcement')
  const currentLocale = useLocale()

  const getSubtitle = (locale: string) => {
    if (locale !== 'ko') {
      return (
        <>
          You can check it in the storage box, and if necessary, you can cancel the storage in the
          storage box.
        </>
      )
    }

    return (
      <>
        보관함에서 확인이 가능하며, <br />
        필요할 경우 보관함에서 보관 취소하실 수 있습니다.
      </>
    )
  }

  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      state: 'positive',
      title: $t('keep_modal_title'),
      subtitle: getSubtitle(currentLocale),
      iconSource: 'icon/check-line1',
      textConfirm: $t('keep'),
      onClick: () => {
        storePostingMutate()
        handleClosedToggle(false)
        closeModal(MODAL.CONFIRM)
      },
    })
  }

  return (
    <Dropdown.Item onClick={handleClick} disabled={disabled}>
      <Icon icon="icon/archive-line" color="neutralGray700" />
      {$t('announce_keep')}
    </Dropdown.Item>
  )
}

export default withAuth(PostingStoreButton)
