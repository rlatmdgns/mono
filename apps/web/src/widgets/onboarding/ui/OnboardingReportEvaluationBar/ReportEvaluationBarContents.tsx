import { NavigationTabs } from '@repo/ui'
import { TAB_CONTENTS_DUMMY } from '../../constants'
import { SubmittedReportList } from '@/entities/onboarding'
import React from 'react'

export const ReportEvaluationBarContents = () => {
  const countForFreshman = TAB_CONTENTS_DUMMY.sequences_submitted_by_freshman.length
  const countForManager = TAB_CONTENTS_DUMMY.sequences_submitted_by_manager.length
  const countForTotalSubmitted = countForFreshman + countForManager

  const totalSurveys = [
    ...TAB_CONTENTS_DUMMY.sequences_submitted_by_freshman,
    ...TAB_CONTENTS_DUMMY.sequences_submitted_by_manager,
  ]

  const buttons = [
    { label: `전체보기 (${countForTotalSubmitted})` },
    { label: `입사자가 제출한 (${countForFreshman})` },
    { label: `온보딩 매니저가 제출한 (${countForManager})` },
  ]

  const contents = [
    <SubmittedReportList key="content_0" sequences={totalSurveys} />,
    <SubmittedReportList
      key="content_1"
      sequences={TAB_CONTENTS_DUMMY.sequences_submitted_by_freshman}
    />,
    <SubmittedReportList
      key="content_2"
      sequences={TAB_CONTENTS_DUMMY.sequences_submitted_by_manager}
    />,
  ]

  return <NavigationTabs buttons={buttons} contents={contents} />
}
