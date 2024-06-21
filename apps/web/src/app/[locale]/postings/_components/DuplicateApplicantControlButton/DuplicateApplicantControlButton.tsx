import * as Styles from './styles'

import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { Dropdown } from '@/shared/ui'
import { Icon } from '@repo/ui'

import React from 'react'
import { useTranslations } from 'next-intl'

interface DuplicateApplicantControlButtonProps {
  id: number
  title: string
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
  handleClosedToggle: (status: boolean) => void
}

const DuplicateApplicantControlButton = ({
  id,
  title,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
  handleClosedToggle,
}: DuplicateApplicantControlButtonProps) => {
  const { openModal } = useModal()

  const handleClick = () => {
    openModal(MODAL.DUPLICATE_APPLICANT_CONTROL, {
      id,
      title,
      isReApplyBlocked,
      isMultipleApplyBlocked,
      isDuplicateApplyBlocked,
      handleClosedToggle,
    })
  }

  const $t = useTranslations('announcement_detail.setting.applicant_document')

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Dropdown.Item onClick={handleClick}>
          <Icon icon="icon/member-line" color="neutralGray700" />
          {$t('limit')}
        </Dropdown.Item>
      </Styles.Container>
      <Dropdown.Divider />
    </Styles.Wrapper>
  )
}

export default withAuth(DuplicateApplicantControlButton)
