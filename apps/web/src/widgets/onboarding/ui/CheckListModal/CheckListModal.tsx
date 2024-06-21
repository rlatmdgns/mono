import { ModalLayout } from '@/shared/ui'
import { wrapper } from '@/widgets/onboarding/ui/CheckListModal/styles.css'

interface CheckListModalProps {
  onClose: () => void
}
const CheckListModal = ({ onClose }: CheckListModalProps) => {
  return (
    <ModalLayout isDimmed>
      <div className={wrapper}>CheckList</div>
    </ModalLayout>
  )
}
export default CheckListModal
