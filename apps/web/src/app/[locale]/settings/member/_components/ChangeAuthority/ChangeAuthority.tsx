'use client'
import * as Styles from '@/app/[locale]/settings/member/_components/MemberRow/styles'

import { Dropdown } from '@/shared/ui'
import { MemberData } from '@/interface/member'

import {
  CurrentAuthorityAtom,
  CurrentMemberAtom,
} from '@/app/[locale]/settings/member/_recoil/atom'
import { userAtom } from '@/shared/model/user/atom'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useAuthority } from '@/shared/hooks'
import { useMemberRowConstant } from '@/app/[locale]/settings/member/_hooks/useMemberRowConstant'

interface ChangeAuthorityProps {
  data: MemberData
  authority: string
  changeConfirm: boolean
  handleChangeConfirm: (status: boolean) => void
}

const ChangeAuthority = ({
  data,
  authority,
  changeConfirm,
  handleChangeConfirm,
}: ChangeAuthorityProps) => {
  const user = useRecoilValue(userAtom)
  const $t = useTranslations()
  const { AUTHORITY_LIST } = useMemberRowConstant()
  const setCurrentMember = useSetRecoilState(CurrentMemberAtom)
  const setCurrentAuthority = useSetRecoilState(CurrentAuthorityAtom)

  const getLocaleAuthority = (authority: string | number | undefined) => {
    switch (authority) {
      case 'adminMember':
        return $t('authority.adminMember')
      case 'recruitmentMember':
        return $t('authority.recruitmentMember')
      case 'evaluationMember':
        return $t('authority.evaluationMember')
      default:
        return ''
    }
  }

  if (authority !== 'adminMember' || data.user_email === user.user_email) {
    return (
      <Styles.AuthoritySelect>{getLocaleAuthority(data.user_authority)}</Styles.AuthoritySelect>
    )
  }

  return (
    <Styles.AuthoritySelect>
      <Dropdown
        button={
          <Styles.AuthoritySelectButton>
            {getLocaleAuthority(data.user_authority)}
          </Styles.AuthoritySelectButton>
        }
        isTypeSelect
        isParentStatusClosed={!changeConfirm}
      >
        {AUTHORITY_LIST.map((list) => (
          <Dropdown.Item
            key={`member_${list.label}`}
            onClick={() => {
              handleChangeConfirm(true)
              setCurrentMember({ ...data })
              setCurrentAuthority(list)
            }}
          >
            {getLocaleAuthority(list.value)}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </Styles.AuthoritySelect>
  )
}

export default ChangeAuthority
