import { useModal } from '@/shared/hooks'
import { EnterpriseMember, IconButton } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberSettingItemProps {
  id: string
  email?: string
  name: string
  isNotDelete?: boolean
  profile?: string
  department?: string
  job?: string
  onClick: (identification: string) => void
}

const SettingPostingMemberItem = ({
  id,
  email,
  name,
  isNotDelete = false,
  profile,
  department,
  job,
  onClick,
}: MemberSettingItemProps) => {
  const $t = useTranslations()
  const { openModal, closeModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('messages.kick_member_confirm', { user_name: name }),
      textConfirm: $t('setting.member_setting.kick'),
      onClick: () => {
        onClick(id)
        closeModal(MODAL.CONFIRM)
      },
      onClose: () => closeModal(MODAL.CONFIRM),
    })
  }

  return (
    <Styles.Item>
      <EnterpriseMember
        name={name}
        email={email}
        profile={profile}
        department={department}
        job={job}
      />
      {!isNotDelete && <IconButton size="xs" icon="icon/cancle-line1" onClick={handleClick} />}
    </Styles.Item>
  )
}

export default SettingPostingMemberItem
