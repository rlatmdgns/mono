'use client'

import { Button, Dropdown } from '@/shared/ui'

import SettingContent from '@/app/[locale]/postings/_components/SettingContent'
import SettingDisabledContent from '@/app/[locale]/postings/_components/SettingDisabledContent'

import React, { useState } from 'react'
import { useTranslations } from 'next-intl'

interface SettingDropDownProps {
  url: string
  id: number
  title: string
  isClose: boolean
  isActive: boolean
  isStored: boolean
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
  hasApplicationForm: boolean
}

const SettingDropDown = ({
  id,
  url,
  title,
  isClose,
  isActive,
  isStored,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
  hasApplicationForm,
}: SettingDropDownProps) => {
  const [isClosed, setIsClosed] = useState(true)

  const $t = useTranslations('common')
  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }

  return (
    <Dropdown
      direction="right"
      zIndex={1}
      button={
        <Button
          type="button"
          iconSource="icon/setting-solid"
          size="sm"
          text={$t('setting')}
          state="standard"
          onClick={() => handleClosedToggle(true)}
        />
      }
      isParentStatusClosed={isClosed}
    >
      {isStored ? (
        <SettingDisabledContent
          id={id}
          isStored={isStored}
          handleClosedToggle={handleClosedToggle}
        />
      ) : (
        <SettingContent
          id={id}
          url={url}
          title={title}
          isClose={isClose}
          isActive={isActive}
          isReApplyBlocked={isReApplyBlocked}
          isMultipleApplyBlocked={isMultipleApplyBlocked}
          isDuplicateApplyBlocked={isDuplicateApplyBlocked}
          hasApplicationForm={hasApplicationForm}
          handleClosedToggle={handleClosedToggle}
        />
      )}
    </Dropdown>
  )
}

export default SettingDropDown
