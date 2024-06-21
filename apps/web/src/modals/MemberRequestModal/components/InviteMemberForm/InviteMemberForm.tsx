import * as Styles from './stlyes'
import { ENTERPRISE_AUTHORITY_OPTIONS } from '@/shared/constants'
import {
  RegisterOrInvitedMembersAtom,
  RequestMembersAtom,
} from '@/modals/MemberRequestModal/recoil/atom'
import { Button, Select, TextInput, Toast } from '@/shared/ui'
import getEnterpriseMemberCheck from '@/entities/enterprise/api/getEnterpriseMemberCheck'
import { Controller, useForm } from 'react-hook-form'
import { getErrorMember } from '@/modals/MemberRequestModal/components/InviteMemberForm/InviteMemberForm.function'
import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'

const InviteMemberForm = () => {
  const { control, watch, setValue } = useForm()
  const [requestMembers, setRequestMembers] = useRecoilState(RequestMembersAtom)
  const [registerOrInvitedMember, setRegisterOrInvitedMember] = useRecoilState(
    RegisterOrInvitedMembersAtom,
  )
  const $t = useTranslations()

  const errorMember = useRef({
    title: '',
    email: '',
  })

  const handleCheckMember = async () => {
    const isContainsRequestMember = requestMembers.some(
      (member) => member.email === watch('invite_email'),
    )
    const isContainsRegisterOrInvitedMember = registerOrInvitedMember.some(
      (member) => member.email === watch('invite_email'),
    )

    if (isContainsRequestMember || isContainsRegisterOrInvitedMember) {
      return Toast.error($t('messages.email_already_added'))
    }

    const response = await getEnterpriseMemberCheck(watch('invite_email'))
    const { data } = response

    if (data?.invalid_member && data?.invalid_member.length > 0) {
      errorMember.current.title = getErrorMember('invalid_member')
      errorMember.current.email = watch('invite_email')
      return Toast.error(`${errorMember.current.title}`)
    }

    const postData = {
      email: watch('invite_email'),
      user_authority: watch('invite_authority').value,
    }

    if (
      (data?.invited_member && data?.invited_member.length > 0) ||
      (data?.registered_member && data?.registered_member.length > 0)
    ) {
      setRegisterOrInvitedMember((prev) => [...prev, postData])
    }

    if (response.success) {
      setRequestMembers((prev) => [...prev, postData])
      setValue('invite_email', '')
    }
  }

  const isAddStatus = !watch('invite_email') && !!watch('invite_authority')

  useEffect(() => {
    setValue('invite_authority', ENTERPRISE_AUTHORITY_OPTIONS[2])
  }, [])

  return (
    <Styles.InviteMemberRow>
      <Styles.InviteMemberBox>
        <Styles.InputBox>
          <Controller
            render={({ field: { value, onChange } }) => (
              <TextInput
                value={value}
                placeholder={$t('setting.member_setting.email_placeholder')}
                onChange={onChange}
              />
            )}
            name={'invite_email'}
            control={control}
          />
        </Styles.InputBox>
        <Styles.SelectWrap>
          <Controller
            render={({ field: { onChange } }) => (
              <Select
                options={ENTERPRISE_AUTHORITY_OPTIONS}
                placeholder={$t('setting.member_setting.authority_select')}
                onChange={onChange}
                defaultValue={ENTERPRISE_AUTHORITY_OPTIONS[2]}
              />
            )}
            name={'invite_authority'}
            control={control}
          />
        </Styles.SelectWrap>
      </Styles.InviteMemberBox>
      <Button
        text={$t('common.add')}
        style="fill-weak"
        width="50px"
        onClick={handleCheckMember}
        disabled={isAddStatus}
      />
    </Styles.InviteMemberRow>
  )
}

export default InviteMemberForm
