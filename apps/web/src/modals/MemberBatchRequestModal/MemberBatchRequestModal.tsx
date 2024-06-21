import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import MemberBatchRequestHeader from '@/modals/MemberBatchRequestModal/container/MemberBatchRequestHeader'
import MemberBatchRequestBody from '@/modals/MemberBatchRequestModal/container/MemberBatchRequestBody'
import MemberBatchRequestFooter from '@/modals/MemberBatchRequestModal/container/MemberBatchRequestFooter'
import { useResetRecoilState } from 'recoil'
import {
  DuplicateMembersAtom,
  MemberBatchRequestExcelDataAtom,
  RegisterOrInvitedMembersAtom,
  RequestMembersAtom,
} from '@/modals/MemberBatchRequestModal/recoil/atom'
import { FormProvider, useForm } from 'react-hook-form'

interface MemberBatchRequestModalProps {
  onClose: () => void
}

const MemberBatchRequestModal = ({ onClose }: MemberBatchRequestModalProps) => {
  const resetExcelData = useResetRecoilState(MemberBatchRequestExcelDataAtom)
  const resetInviteMember = useResetRecoilState(RequestMembersAtom)
  const resetRegisterOrMember = useResetRecoilState(RegisterOrInvitedMembersAtom)
  const resetDuplicateMember = useResetRecoilState(DuplicateMembersAtom)

  const handleCloseModal = () => {
    resetExcelData()
    resetInviteMember()
    resetRegisterOrMember()
    resetDuplicateMember()
    onClose()
  }
  const method = useForm()

  return (
    <ModalLayout onClick={onClose} isDimmed>
      <FormProvider {...method}>
        <Styles.Wrapper>
          <MemberBatchRequestHeader onClose={handleCloseModal} />
          <MemberBatchRequestBody />
          <MemberBatchRequestFooter onClose={handleCloseModal} />
        </Styles.Wrapper>
      </FormProvider>
    </ModalLayout>
  )
}
export default MemberBatchRequestModal
