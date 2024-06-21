import { ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import UpgradePlanHeader from '@/modals/UpgradePlanModal/components/UpgradePlanHeader'
import UpgradePlanForm from '@/modals/UpgradePlanModal/components/UpgradePlanForm'

interface AddPlanModalProps {
  currentType: string
  onClose: () => void
}

const UpgradePlanModal = ({ currentType, onClose }: AddPlanModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <UpgradePlanHeader onClose={onClose} />
        <UpgradePlanForm currentType={currentType} onClose={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default UpgradePlanModal
