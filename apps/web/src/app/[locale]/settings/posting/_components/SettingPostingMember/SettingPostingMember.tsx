'use client'
import SettingPostingMemberList from '@/app/[locale]/settings/posting/_components/SettingPostingMemberList'
import SettingPostingMemberTop from '@/app/[locale]/settings/posting/_components/SettingPostingMemberTop'
import useDeletePostingMember from '@/app/[locale]/settings/posting/_hooks/useDeletePostingMember'
import {
  settingPostingHasAccessAtom,
  settingPostingHasAccessiblePostingAtom,
  settingPostingIdAtom,
} from '@/app/[locale]/settings/posting/_recoil'
import { Empty, SearchInput } from '@/shared/ui'
import { useDebounce, useGetPostingMember, useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useRecoilValue } from 'recoil'
import React, { ChangeEvent, useDeferredValue, useState } from 'react'
import { useTranslations } from 'next-intl'

const SettingPostingMember = () => {
  const { openModal } = useModal()

  const id = useRecoilValue(settingPostingIdAtom)
  const hasAccess = useRecoilValue(settingPostingHasAccessAtom)
  const hasAccessiblePosting = useRecoilValue(settingPostingHasAccessiblePostingAtom)

  const [search, setSearch] = useState('')

  const { data, refetch } = useGetPostingMember(id, search)
  const { deleteMutate } = useDeletePostingMember(id)
  const deferredQuery = useDeferredValue(search)

  const $t = useTranslations()

  useDebounce(
    () => {
      refetch()
    },
    500,
    deferredQuery,
  )

  const getMembers = () => {
    if (!data) return []
    return [...data.posting_member, ...data.admin_member]
  }

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleButtonClick = () => {
    openModal(MODAL.MEMBER_SETTING, { id })
  }

  const handleDelete = (identification: string) => {
    deleteMutate(identification)
  }

  if (!hasAccessiblePosting) {
    return (
      <Empty title={$t('messages.no_announcements_list')} iconSource="icon/recruitment-solid" />
    )
  }

  if (!hasAccess) {
    return (
      <Empty title={$t('messages.no_access_announcements')} iconSource="icon/recruitment-solid" />
    )
  }

  return (
    <div>
      <SearchInput
        placeholder={$t('setting.member_setting.search_placeholder')}
        onChange={handleSearch}
      />
      <SettingPostingMemberTop count={getMembers()?.length} onClick={handleButtonClick} />
      <SettingPostingMemberList members={getMembers()} onClick={handleDelete} />
    </div>
  )
}

export default SettingPostingMember
