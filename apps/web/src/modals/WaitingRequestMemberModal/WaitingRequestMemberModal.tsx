import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import WaitingRequestMemberHeader from '@/modals/WaitingRequestMemberModal/components/WaitingRequestMemberHeader'
import WaitingRequestMemberBody from '@/modals/WaitingRequestMemberModal/components/WaitingRequestMemberBody'
import WaitingRequestMemberFooter from '@/modals/WaitingRequestMemberModal/components/WaitingRequestMemberFooter'
import useWaitingRequestMember from '@/modals/WaitingRequestMemberModal/hooks/useWaitingRequestMember'

interface WaitingRequestMemberModalProps {
  onClose: () => void
}

const WaitingRequestMemberModal = ({ onClose }: WaitingRequestMemberModalProps) => {
  const { data } = useWaitingRequestMember()
  if (!data) return null

  return (
    <ModalLayout onClick={onClose} isDimmed>
      <Styles.WaitingRequestMemberModalWrapper>
        <WaitingRequestMemberHeader onClose={onClose} />
        <WaitingRequestMemberBody waitingMember={data.waiting_member} />
        <WaitingRequestMemberFooter onClose={onClose} />
      </Styles.WaitingRequestMemberModalWrapper>
    </ModalLayout>
  )
}
export default WaitingRequestMemberModal
