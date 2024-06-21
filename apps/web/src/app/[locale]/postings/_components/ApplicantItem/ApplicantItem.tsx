'use client'

import React, { useEffect } from 'react'
import * as Styles from './styles'
import { Applicant } from '@/interface/applicants'
import { useAuthority, useModal } from '@/shared/hooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { AUTHORITY, MODAL } from '@/shared/constants'
import { convertDateFormat } from '@/shared/lib/utils'
import { TagList } from '@/shared/ui'
import { Icon } from '@repo/ui'
import VoteResult from '@/app/[locale]/postings/_components/VoteResult'
import { useTranslations } from 'next-intl'

interface ApplicantCardProps {
  applicant: Applicant
}

const ApplicantItem = ({ applicant }: ApplicantCardProps) => {
  const { openModal } = useModal()
  const pathname = usePathname() as string
  const router = useRouter()

  const {
    applicant_name,
    application_date,
    applicant_re_url,
    applicant_state,
    applicant_id,
    vote_fail_count,
    vote_pass_count,
    is_public,
    step_name,
    applicant_tag,
  } = applicant
  const $t = useTranslations('common')
  const isFail = applicant_state === 2
  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR
  const isInaccessible = isEvaluation && !is_public

  const handleClick = () => {
    if (isInaccessible) return
    openModal(MODAL.APPLICANT_MODAL, {
      applicantId: applicant_id,
    })
    router.replace(`${pathname}?applicant=${applicant_id}`)
    return
  }

  const searchParams = useSearchParams()
  const applicantId = searchParams?.get('applicant')

  useEffect(() => {
    if (!applicantId) return
    openModal(MODAL.APPLICANT_MODAL, {
      applicantId,
    })
  }, [applicantId])

  return (
    <Styles.Item $isFail={isFail} $isInaccessible={isInaccessible} onClick={handleClick}>
      <Styles.NameBox>
        <Styles.NameText>{applicant_name}</Styles.NameText>
        {isInaccessible && <Icon icon="icon/lock-solid" color="neutralGray300" />}
      </Styles.NameBox>
      <Styles.Step>
        {step_name}
        {isFail && $t('fail')}
      </Styles.Step>
      <Styles.Evaluation>
        <VoteResult passCount={vote_pass_count} failCount={vote_fail_count} />
      </Styles.Evaluation>
      <Styles.ApplyRoute>{applicant_re_url}</Styles.ApplyRoute>
      <Styles.Tag>
        <TagList tags={applicant_tag} />
      </Styles.Tag>
      <div>{convertDateFormat(application_date)}</div>
    </Styles.Item>
  )
}

export default React.memo(ApplicantItem)
