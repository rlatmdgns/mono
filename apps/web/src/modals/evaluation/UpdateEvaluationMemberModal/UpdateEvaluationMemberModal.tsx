import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import UpdateEvaluationMemberHeader from '@/modals/evaluation/UpdateEvaluationMemberModal/container/UpdateEvaluationMemberHeader'
import UpdateEvaluationMemberBody from '@/modals/evaluation/UpdateEvaluationMemberModal/container/UpdateEvaluationMemberBody'
import UpdateEvaluationMemberFooter from '@/modals/evaluation/UpdateEvaluationMemberModal/container/UpdateEvaluationMemberFooter'
import { useSetRecoilState } from 'recoil'
import { selectedMemberIdsAtom } from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'
import { PostingMember } from '@/interface/posting'

interface UpdateEvaluationMemberModalProps {
  onClose: () => void
  selectedMemberIds: string[]
  postingMembers: PostingMember[]
}

const UpdateEvaluationMemberModal = ({
  onClose,
  selectedMemberIds,
  postingMembers,
}: UpdateEvaluationMemberModalProps) => {
  const setSelectedMemberIds = useSetRecoilState(selectedMemberIdsAtom)

  const methods = useForm({
    defaultValues: {
      evaluationMembers: [...selectedMemberIds],
    },
  })
  const { handleSubmit, watch } = methods

  const handleFormSubmit = (form: FieldValues) => {
    setSelectedMemberIds(form.evaluationMembers)
    onClose()
  }

  const isDirty =
    [...selectedMemberIds]?.sort().toString() !== watch('evaluationMembers')?.sort().toString()

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <UpdateEvaluationMemberHeader count={postingMembers.length} />
          <UpdateEvaluationMemberBody
            postingMembers={postingMembers}
            defaultSelectedMemberIds={selectedMemberIds}
          />
          <UpdateEvaluationMemberFooter isDirty={isDirty} onClose={onClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default UpdateEvaluationMemberModal
