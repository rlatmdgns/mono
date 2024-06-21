import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { STEPS } from '@/modals/ReqeustInterviewModal/RequestInterviewModal.constants'
import { InterviewRequestStepAtom } from '@/modals/ReqeustInterviewModal/recoil/atom'
import { useLocale } from 'next-intl'
import { Step } from '@/entities/RequestInterview'

export const Steps = () => {
  const currentLocale = useLocale()
  const requestStep = useRecoilValue(InterviewRequestStepAtom)
  const StepList = STEPS[currentLocale]

  return (
    <Styles.StepWrap>
      {StepList.map((step, stepIdx) => (
        <Step key={`step_${stepIdx + 1}`} step={step} stepIdx={stepIdx} requestStep={requestStep} />
      ))}
    </Styles.StepWrap>
  )
}
