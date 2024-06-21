'use client'

import * as Styles from './styles'

import { useAuthority, useModal } from '@/shared/hooks'
import { AUTHORITY, MODAL } from '@/shared/constants'
import { AvatarMultiple, Dropdown, MemberList } from '@/shared/ui'

import { PostingMember } from '@/interface/posting'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface PostingHeaderMenuProps {
  id: number
  members: PostingMember[]
}

const PostingMemberButton = ({ members, id }: PostingHeaderMenuProps) => {
  const [mounted, setMounted] = React.useState(false)
  const { openModal } = useModal()
  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  const $t = useTranslations('setting.member_setting')
  const handleSetModal = () => {
    openModal(MODAL.MEMBER_SETTING, { id })
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (isEvaluator) {
    return (
      <Dropdown button={<AvatarMultiple members={members} />} direction="right">
        <MemberList members={members} />
      </Dropdown>
    )
  }

  return (
    <>
      <Styles.MemberSettingButton onClick={handleSetModal} aria-label={$t('title')} />
      <AvatarMultiple members={members} />
    </>
  )
}

export default PostingMemberButton
