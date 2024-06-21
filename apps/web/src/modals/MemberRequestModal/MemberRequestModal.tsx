import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import MemberRequestBody from '@/modals/MemberRequestModal/container/MemberRequestBody/MemberRequestBody'
import MemberRequestHeader from './container/MemberRequestHeader'
import MemberRequestFooter from './container/MemberRequestFooter'
import MemberRequestForm from '@/modals/MemberRequestModal/container/MemberRequestForm'
import { useResetRecoilState } from 'recoil'
import {
  RegisterOrInvitedMembersAtom,
  RequestMembersAtom,
} from '@/modals/MemberRequestModal/recoil/atom'
import { FormProvider, useForm } from 'react-hook-form'

interface SendEmailModalProps {
  onClose: () => void
}

const MemberRequestModal = ({ onClose }: SendEmailModalProps) => {
  const resetRequestMembers = useResetRecoilState(RequestMembersAtom)
  const resetRegisterOrInvitedMembers = useResetRecoilState(RegisterOrInvitedMembersAtom)
  const method = useForm()

  const handleModalClose = () => {
    resetRequestMembers()
    resetRegisterOrInvitedMembers()
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <FormProvider {...method}>
        <Styles.Wrap>
          <MemberRequestHeader onClose={handleModalClose} />
          <Styles.BodyWrap>
            <MemberRequestBody />
            <MemberRequestForm />
          </Styles.BodyWrap>
          <MemberRequestFooter onClose={handleModalClose} />
        </Styles.Wrap>
      </FormProvider>
    </ModalLayout>
  )
}

export default MemberRequestModal
