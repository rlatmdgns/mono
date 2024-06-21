'use client'

import React from 'react'
import * as Styles from './styles'
import { Applicant } from '@/interface/applicantPool'
import { TagList } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { AUTHORITY, MODAL } from '@/shared/constants'
import { useAuthority, useModal } from '@/shared/hooks'

interface ApplicantItemProps {
  applicant: Applicant
}

const ApplicantItem = ({ applicant }: ApplicantItemProps) => {
  const { openModal } = useModal()
  const { authority } = useAuthority()
  const isAccess = authority === AUTHORITY.ADMIN || applicant.access

  const handleModalOpen = () => {
    if (!isAccess) {
      return
    }
    openModal(MODAL.APPLICANT_MODAL, {
      applicantId: applicant.applicant_id,
    })
  }
  const {
    applicant_name,
    posting_title,
    posting_field,
    step_name,
    application_date,
    applicant_re_url,
  } = applicant

  return (
    <Styles.Wrapper onClick={handleModalOpen}>
      <Styles.Inner $isAccess={isAccess}>
        <Styles.ApplicantNameBox>
          <Styles.ApplicantName>{applicant_name}</Styles.ApplicantName>
          {!isAccess && <Icon icon="icon/lock-solid" color="neutralGray300" />}
        </Styles.ApplicantNameBox>
        <Styles.JobPosting>{posting_title}</Styles.JobPosting>
        <Styles.Step>{!step_name ? '-' : step_name}</Styles.Step>
        <Styles.Category>{posting_field}</Styles.Category>
        <Styles.Tag>
          <TagList tags={applicant?.applicant_tag} />
        </Styles.Tag>
        <Styles.Route>{applicant_re_url}</Styles.Route>
        <Styles.Date>{isAccess ? application_date : '-'}</Styles.Date>
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default ApplicantItem
