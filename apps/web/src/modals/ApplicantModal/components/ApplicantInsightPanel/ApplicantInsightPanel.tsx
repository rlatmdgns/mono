import { Tabs } from '@/shared/ui'
import Evaluation from '@/features/Evaluation'
import Memo from '@/features/Memo'
import * as Styles from './styles'
import { useApplicantModalConstants } from '@/modals/ApplicantModal/hooks/useApplicantModalConstants'

interface ApplicantInsightPanelProps {
  postingId: number
  applicantId: string
  stepId: string
}

const ApplicantInsightPanel = ({ postingId, applicantId, stepId }: ApplicantInsightPanelProps) => {
  const { APPLICANT_INSIGHT_TRIGGERS } = useApplicantModalConstants()

  const APPLICANT_INSIGHT_PANELS = [
    <Evaluation key="evaluation" postingId={postingId} applicantId={applicantId} stepId={stepId} />,
    <Memo applicantId={applicantId} key="memo" />,
  ]

  return (
    <Styles.Wrapper>
      <Tabs state="standard">
        <Tabs.TriggerList state="standard" tabContents={APPLICANT_INSIGHT_TRIGGERS} />
        <Tabs.PanelList height="calc(100% - 32px)" tabContents={APPLICANT_INSIGHT_PANELS} />
      </Tabs>
    </Styles.Wrapper>
  )
}

export default ApplicantInsightPanel
