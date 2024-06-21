import { ModalLayout } from '@/shared/ui'
import * as Styles from './styles'
import PlanInformationHeader from '@/modals/PlanInformationModal/components/PlanInformationHeader'
import PlanInformationForm from '@/modals/PlanInformationModal/components/PlanInformationForm'

interface PlanInformationModalProps {
  onClose: () => void
}

const PlanInformationModal = ({ onClose }: PlanInformationModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <PlanInformationHeader onClose={onClose} />
        <PlanInformationForm onClose={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default PlanInformationModal
