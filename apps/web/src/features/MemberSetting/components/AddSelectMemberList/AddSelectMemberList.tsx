import { useAuthority } from '@/shared/hooks'
import AddSelectMember from '@/features/MemberSetting/components/AddSelectMember'
import { getDeleteDisabled } from '@/features/MemberSetting/MemberSetting.factory'
import { PostingMember } from '@/interface/posting'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'

const AddSelectMemberList = () => {
  const { watch, setValue } = useFormContext()
  const { email } = useAuthority()
  const selectMembers = watch('posting_member') || []
  const length = selectMembers.length
  const isOverThenTwenty = length > 20
  const columnRepeatLength = isOverThenTwenty
    ? length % 2 === 0
      ? length / 2
      : (length + 1) / 2
    : 10

  const isNotDelete = (user_email?: string, user_authority?: string | number) =>
    getDeleteDisabled(email, user_email, user_authority)

  const handleDelete = (id?: string) => {
    if (!id) return
    const newPostingMember = selectMembers.filter(
      (member: PostingMember) => member.identification !== id,
    )
    setValue('posting_member', newPostingMember)
  }

  return (
    <Styles.Wrapper>
      <Styles.List $columnRepeatLength={columnRepeatLength}>
        {selectMembers?.map((member: PostingMember) => (
          <AddSelectMember
            key={member.user_email}
            name={member.user_name}
            profile={member.user_profile}
            id={member.identification}
            isNotDelete={isNotDelete(member.user_email, member.user_authority)}
            onClick={handleDelete}
          />
        ))}
      </Styles.List>
    </Styles.Wrapper>
  )
}

export default AddSelectMemberList
