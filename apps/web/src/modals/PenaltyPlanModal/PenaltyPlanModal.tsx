import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import PenaltyPlanHeader from '@/modals/PenaltyPlanModal/components/PenaltyPlanHeader/PenaltyPlanHeader'
import PenaltyPlanForm from '@/modals/PenaltyPlanModal/components/PenaltyPlanForm'

interface AddPlanModalProps {
  currentType: string
  onClose: () => void
}

const PenaltyPlanModal = ({ currentType, onClose }: AddPlanModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <PenaltyPlanHeader onClose={onClose} />
        <PenaltyPlanForm currentType={currentType} onClose={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default PenaltyPlanModal
