import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import AddCardForm from '@/modals/AddCardModal/components/AddCardForm'
import AddCardHeader from '@/modals/AddCardModal/components/AddCardHeader'

interface AddCardModalProps {
  submitType: string
  onClose: () => void
}

const AddCardModal = ({ submitType, onClose }: AddCardModalProps) => {
  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <AddCardHeader onClose={onClose} />
        <AddCardForm submitType={submitType} onClose={onClose} />
      </Styles.Wrapper>
    </ModalLayout>
  )
}
export default AddCardModal
