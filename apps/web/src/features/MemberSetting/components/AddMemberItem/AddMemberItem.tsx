import { MemberData } from '@/interface/member'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { AUTHORITY } from '@/shared/constants'
import { CheckBox, EnterpriseMember } from '@/shared/ui'

interface AddMemberItemProps {
  member: MemberData
  isNotDelete?: boolean
}

const AddMemberItem = ({ member, isNotDelete = false }: AddMemberItemProps) => {
  const { watch, setValue } = useFormContext()
  const selectMembers = watch('posting_member')
  const isAdminMember = member.user_authority === AUTHORITY.ADMIN || member.user_authority === 2

  const isInclude =
    isAdminMember ||
    selectMembers?.find(
      (selectMember: MemberData) => selectMember.identification === member.identification,
    )

  const handleChange = () => {
    if (isInclude) {
      const newPostingMember = selectMembers.filter(
        (selectMember: MemberData) => selectMember.identification !== member.identification,
      )
      setValue('posting_member', newPostingMember)
      return
    }
    const newPostingMember = [...selectMembers, member]
    setValue('posting_member', newPostingMember)
  }

  return (
    <Styles.Item>
      {<CheckBox isChecked={isInclude} disabled={isNotDelete} onChange={handleChange} />}
      <EnterpriseMember
        authority={member?.user_authority}
        name={member.user_name}
        email={member.user_email}
        profile={member.user_profile}
        job={member?.user_job}
        department={member?.user_department}
      />
    </Styles.Item>
  )
}

export default AddMemberItem
