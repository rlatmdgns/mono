import { useAuthority } from '@/shared/hooks'
import { AUTHORITY } from '@/shared/constants'
import MemberSetting from '@/features/MemberSetting'
import { MemberData } from '@/interface/member'
import React, { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface CreatPostingMemberProps {
  members: MemberData[]
}

const CreatePostingMemberContainer = ({ members }: CreatPostingMemberProps) => {
  const { email } = useAuthority()
  const { setValue, watch } = useFormContext()
  const $t = useTranslations('search')

  const searchMembers = watch('search_member')
  const adminMembers = members?.filter((member) => {
    if (member.user_email === email) return
    if (member.user_authority === AUTHORITY.ADMIN) {
      return member
    }
  })
  const me = members?.find((member) => member.user_email === email)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setValue('search_member', members)
      return
    }
    const filerMembers = members?.filter((member) => {
      if (member.user_name.includes(event.target.value)) {
        return member
      }
    })
    setValue('search_member', filerMembers)
  }

  useEffect(() => {
    setValue('posting_member', [...adminMembers, me])
    setValue('search_member', members)
  }, [])

  return (
    <Styles.Wrapper>
      <MemberSetting members={searchMembers} onSearch={handleSearch} placeholder={$t('name')} />
    </Styles.Wrapper>
  )
}

export default CreatePostingMemberContainer
