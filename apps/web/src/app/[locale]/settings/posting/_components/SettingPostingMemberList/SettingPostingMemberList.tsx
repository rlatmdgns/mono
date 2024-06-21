import SettingPostingMemberItem from '@/app/[locale]/settings/posting/_components/SettingPostingMemberItem'
import { AUTHORITY } from '@/shared/constants'
import { MemberData } from '@/interface/member'
import React from 'react'
import * as Styles from './styles'

interface MemberSettingListProps {
  members?: MemberData[]
  onClick: (identification: string) => void
  height?: string
}

const SettingPostingMemberList = ({ members, onClick }: MemberSettingListProps) => {
  return (
    <Styles.ListWrap>
      <Styles.List>
        {members?.map((member) => (
          <SettingPostingMemberItem
            id={member.identification}
            key={member.user_email}
            name={member.user_name}
            isNotDelete={member.user_authority === AUTHORITY.ADMIN}
            email={member.user_email}
            profile={member.user_profile}
            department={member.user_department}
            job={member.user_job}
            onClick={onClick}
          />
        ))}
      </Styles.List>
    </Styles.ListWrap>
  )
}

export default SettingPostingMemberList
