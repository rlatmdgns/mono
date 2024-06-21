import { useAuthority } from '@/shared/hooks'
import AddMemberItem from '@/features/MemberSetting/components/AddMemberItem'
import { getDeleteDisabled } from '@/features/MemberSetting/MemberSetting.factory'
import { MemberData } from '@/interface/member'
import React from 'react'
import * as Styles from './styles'

interface MemberSettingListProps {
  members: MemberData[]
}

const AddMemberList = ({ members }: MemberSettingListProps) => {
  const { email } = useAuthority()

  const isNotDelete = (user_email?: string, user_authority?: string | number) =>
    getDeleteDisabled(email, user_email, user_authority)

  return (
    <Styles.List>
      {members.map((member) => (
        <AddMemberItem
          key={member.user_email}
          member={member}
          isNotDelete={isNotDelete(member.user_email, member.user_authority)}
        />
      ))}
    </Styles.List>
  )
}

export default AddMemberList
