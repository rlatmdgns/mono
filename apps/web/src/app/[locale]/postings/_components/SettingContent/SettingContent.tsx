'use client'

import * as Styles from './styles'

import { ORIGIN, PAGE } from '@/shared/constants'
import { useCopyClipBoard } from '@/shared/hooks'
import { Dropdown, LinkButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import PostingCloseContainer from '@/app/[locale]/postings/_container/PostingCloseContainer'
import PostingActivityContainer from '@/app/[locale]/postings/_components/PostingActivityContainer'
import PostingEditButton from '@/app/[locale]/postings/_components/PostingEditButton'
import PostingStoreButton from '@/app/[locale]/postings/_components/PostingStoreButton'
import DuplicateApplicantControlButton from '@/app/[locale]/postings/_components/DuplicateApplicantControlButton'
import UpdateApplicationButton from '@/app/[locale]/postings/_components/UpdateApplicationButton'

import React from 'react'
import { useTranslations } from 'next-intl'

interface SettingDropDownProps {
  url: string
  id: number
  title: string
  isClose: boolean
  isActive: boolean
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
  hasApplicationForm: boolean
  handleClosedToggle: (status: boolean) => void
}

const SettingContent = ({
  id,
  url,
  title,
  isClose,
  isActive,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
  hasApplicationForm,
  handleClosedToggle,
}: SettingDropDownProps) => {
  const recruitUrl = `${ORIGIN}/recruit/${url}/${id}`

  const $t = useTranslations('announcement_detail')

  const { handleCopyClipBoard } = useCopyClipBoard()

  const handleCopyRecruitUrl = async () => {
    await handleCopyClipBoard(recruitUrl)
    handleClosedToggle(false)
  }

  return (
    <>
      <Styles.DropdownGroup>
        <UpdateApplicationButton id={id} hasApplicationForm={hasApplicationForm} />
        <DuplicateApplicantControlButton
          id={id}
          title={title}
          isReApplyBlocked={isReApplyBlocked}
          isMultipleApplyBlocked={isMultipleApplyBlocked}
          isDuplicateApplyBlocked={isDuplicateApplyBlocked}
          handleClosedToggle={handleClosedToggle}
        />
      </Styles.DropdownGroup>
      <Styles.DropdownGroup>
        <Styles.DropdownGroupTitle>{$t('setting.announcement.title')}</Styles.DropdownGroupTitle>
        <PostingEditButton id={id} />
        <PostingCloseContainer id={id} isClose={isClose} handleClosedToggle={handleClosedToggle} />
        <PostingStoreButton id={id} disabled={!isClose} handleClosedToggle={handleClosedToggle} />
        <Dropdown.Item onClick={handleCopyRecruitUrl}>
          <Icon icon="icon/copy-line" color="neutralGray700" />
          {$t('setting.announcement.copy')}
        </Dropdown.Item>
        <PostingActivityContainer
          id={id}
          isActive={isActive}
          isClose={isClose}
          hasApplicationForm={hasApplicationForm}
          handleClosedToggle={handleClosedToggle}
        />
      </Styles.DropdownGroup>
      <Dropdown.Divider />
      <Styles.PostingPreview>
        <LinkButton
          isNewTab
          href={PAGE.RECRUIT(url, id)}
          iconSource="icon/document-line"
          size="sm"
          state="standard"
          text={$t('setting.announcement.preview')}
        />
      </Styles.PostingPreview>
    </>
  )
}

export default SettingContent
