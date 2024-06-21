import * as Styles from './styles'

interface StepProps {
  step: string
  stepIdx: number
  requestStep: number
}

export const Step = ({ step, stepIdx, requestStep }: StepProps) => {
  return (
    <Styles.Step>
      {stepIdx > 0 && <Styles.StepLine $step={stepIdx + 1} $requestStep={requestStep} />}
      <Styles.StepNumber $step={stepIdx + 1} $requestStep={requestStep}>
        {`${stepIdx + 1}`}{' '}
      </Styles.StepNumber>
      <Styles.StepText $step={stepIdx + 1} $requestStep={requestStep}>
        {step}
      </Styles.StepText>
    </Styles.Step>
  )
}
