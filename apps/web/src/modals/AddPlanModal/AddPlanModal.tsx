import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import AddPlanHeader from '@/modals/AddPlanModal/components/AddPlanHeader'
import AddPlanForm from '@/modals/AddPlanModal/components/AddPlanForm'

interface AddPlanModalProps {
  currentType: string
  onClose: () => void
}

const AddPlanModal = ({ currentType, onClose }: AddPlanModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <AddPlanHeader onClose={onClose} />
        <AddPlanForm currentType={currentType} onClose={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default AddPlanModal
