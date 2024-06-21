'use client'

import * as Styles from './styles'

import { MODAL } from '@/shared/constants'
import { Dropdown } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { Button } from '@repo/ui'

import { TabCountAtom } from '@/app/[locale]/settings/member/_recoil/atom'

import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface MemberUtilsProps {
  authority: string
}

const MemberUtils = ({ authority }: MemberUtilsProps) => {
  const tabCount = useRecoilValue(TabCountAtom)
  const { openModal } = useModal()
  const $t = useTranslations()

  const handleGetWaitingMember = () => {
    openModal(MODAL.WAITING_REQUEST_MEMBER)
  }
  const handleAddMember = () => {
    openModal(MODAL.MEMBER_REQUEST)
    handleClosedToggle(false)
  }
  const handleBatchAddMember = () => {
    openModal(MODAL.MEMBER_BATCH_REQUEST)
    handleClosedToggle(false)
  }

  const [isClosed, setIsClosed] = useState(false)

  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }
  if (authority !== 'adminMember') return

  return (
    <Styles.MemberUtils>
      <Button
        text={`${$t('setting.member_setting.wait')} (${tabCount.waiting})`}
        state="secondary"
        style="line"
        onClick={handleGetWaitingMember}
      />
      <Styles.AddMember>
        <Dropdown
          button={
            <Button
              text={$t('common.add_member')}
              style="fill-weak"
              leadingIcon="icon/add-member-solid"
              trailingIcon="icon/down-solid"
              onClick={() => handleClosedToggle(true)}
            />
          }
          isParentStatusClosed={isClosed}
        >
          <Dropdown.Item onClick={handleAddMember}>
            {$t('setting.member_setting.add_individual_member')}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleBatchAddMember}>
            {$t('setting.member_setting.add_batch_member')}
          </Dropdown.Item>
        </Dropdown>
      </Styles.AddMember>
    </Styles.MemberUtils>
  )
}
export default MemberUtils
