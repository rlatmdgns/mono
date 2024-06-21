import AddMemberList from '@/features/MemberSetting/components/AddMemberList'
import AddMemberTop from '@/features/MemberSetting/components/AddMemberTop'
import AddSelectMemberList from '@/features/MemberSetting/components/AddSelectMemberList'

import { MemberData } from '@/interface/member'
import { PostingMember } from '@/interface/posting'
import { SearchInput } from '@/shared/ui'
import React from 'react'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface MemberSettingProps {
  height?: string
  members?: PostingMember[] | MemberData[]
  search?: string
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const MemberSetting = ({ members, search, onSearch, placeholder }: MemberSettingProps) => {
  const $t = useTranslations('setting.member_setting')

  if (!members) return
  return (
    <Styles.Wrapper>
      <AddSelectMemberList />
      <SearchInput
        value={search}
        placeholder={!placeholder ? $t('search_placeholder') : placeholder}
        onChange={onSearch}
      />
      <AddMemberTop count={members?.length} />
      <AddMemberList members={members} />
    </Styles.Wrapper>
  )
}

export default MemberSetting
