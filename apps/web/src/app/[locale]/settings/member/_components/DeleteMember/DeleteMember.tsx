import * as Styles from '@/app/[locale]/settings/member/_components/MemberRow/styles'

import { Dropdown, IconButton } from '@/shared/ui'

import { MemberData } from '@/interface/member'

import { CurrentMemberAtom } from '@/app/[locale]/settings/member/_recoil/atom'
import { userAtom } from '@/shared/model/user/atom'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import React from 'react'
import { useTranslations } from 'next-intl'

interface DeleteMemberProps {
  data: MemberData
  authority: string
  deleteConfirm: boolean
  expireConfirm: boolean
  handleDeleteConfirm: (status: boolean) => void
  handleExpireConfirm: (status: boolean) => void
}

const DeleteMember = ({
  data,
  authority,
  deleteConfirm,
  expireConfirm,
  handleDeleteConfirm,
  handleExpireConfirm,
}: DeleteMemberProps) => {
  const user = useRecoilValue(userAtom)
  const setCurrentMember = useSetRecoilState(CurrentMemberAtom)

  const $t = useTranslations('setting.member_setting')
  if (authority !== 'adminMember') return

  return (
    <Styles.DeleteMember>
      <Dropdown
        button={<IconButton size="sm" icon="icon/more-solid" />}
        isParentStatusClosed={!(deleteConfirm || expireConfirm)}
      >
        {user.user_email === data.user_email && (
          <Dropdown.Item
            onClick={() => {
              handleExpireConfirm(true)
            }}
            isWarning
          >
            {$t('workspace_withdrawal')}
          </Dropdown.Item>
        )}
        {user.user_email !== data.user_email && (
          <Dropdown.Item
            onClick={() => {
              handleDeleteConfirm(true)
              setCurrentMember({ ...data })
            }}
            isWarning
          >
            {$t('kick')}
          </Dropdown.Item>
        )}
      </Dropdown>
    </Styles.DeleteMember>
  )
}

export default DeleteMember
