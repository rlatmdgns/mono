import * as Styles from './styles'
import ModifyScheduleSendMailForm from './components/ModifyScheduleSendMailForm'
import ModifyScheduleSendMailHeader from './components/ModifyScheduleSendMailHeader'
import { ModalLayout } from '@/shared/ui'

interface ModifyInterviewSendModalProps {
  postData: any
  modifyScheduleClose: () => void
  onClose: () => void
}

const ModifyScheduleSendMailModal = ({
  postData,
  modifyScheduleClose,
  onClose,
}: ModifyInterviewSendModalProps) => {
  return (
    <>
      <ModalLayout onClick={onClose} isDimmed>
        <Styles.ModifyScheduleModal>
          <ModifyScheduleSendMailHeader />
          <ModifyScheduleSendMailForm
            postData={postData}
            onClose={onClose}
            modifyScheduleClose={modifyScheduleClose}
          />
        </Styles.ModifyScheduleModal>
      </ModalLayout>
    </>
  )
}
export default ModifyScheduleSendMailModal
