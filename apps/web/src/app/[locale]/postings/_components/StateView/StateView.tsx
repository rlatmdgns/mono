import React from 'react'
import VoteResult from '@/app/[locale]/postings/_components/VoteResult'
import { ApplicantHistory } from '@/interface/applicants'
import { Badge, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { APPLICANT_HISTORY_TYPE } from '@/app/[locale]/postings/_components/StateView/StateView.constants'
import { useLocale } from 'next-intl'

interface StateViewProps {
  isVote?: boolean
  passCount?: number
  failCount?: number
  url: string
  isInaccessible: boolean
  applicantHistory: ApplicantHistory
}

const StateView = ({
  isVote = false,
  url,
  passCount,
  failCount,
  isInaccessible,
  applicantHistory,
}: StateViewProps) => {
  const currentLocale = useLocale()

  const renderApplicantHistory = () => {
    if (!applicantHistory) return
    const historyType = APPLICANT_HISTORY_TYPE[applicantHistory.history_type][currentLocale]

    return (
      <div style={{ height: '16px' }}>
        <Tooltip text={historyType} direction="right">
          <Icon icon="icon/warning-solid" color="red500" />
        </Tooltip>
      </div>
    )
  }
  if (isInaccessible) {
    return <Icon icon="icon/lock-solid" color="neutralGray300" />
  }
  if (isVote) {
    return (
      <>
        <VoteResult passCount={passCount} failCount={failCount} />
        {renderApplicantHistory()}
      </>
    )
  }
  return (
    <>
      <Badge text={url} type="gray" />
      {renderApplicantHistory()}
    </>
  )
}

export default StateView
