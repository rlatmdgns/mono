import * as Styles from './styles'

import { ApplicantPostingStep } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import { Badge, Dropdown, Tooltip } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface UpdateStepOptionProps {
  selectedStepId: string
  step: ApplicantPostingStep
  onUpdateStep: (step: ApplicantPostingStep) => void
}

const UpdateStepOption = ({ selectedStepId, step, onUpdateStep }: UpdateStepOptionProps) => {
  const isSelected = step.step_id === selectedStepId
  const $t = useTranslations('common')

  const handleUpdateStep = () => {
    if (isSelected) return
    onUpdateStep(step)
  }

  return (
    <Tooltip text={step.step_name} disabled={step.step_name.length <= 10} direction="right">
      <Dropdown.Item onClick={handleUpdateStep}>
        <Styles.Container>
          <Styles.Text>{step.step_name}</Styles.Text>
          {isSelected && <Badge text={$t('current')} />}
        </Styles.Container>
      </Dropdown.Item>
    </Tooltip>
  )
}

export default UpdateStepOption
