import * as Styles from './styles'
import { ModalLayout, Toast } from '@/shared/ui'
import EvaluationSettingHeader from '@/modals/evaluation/EvaluationSettingModal/container/EvaluationSettingHeader'
import EvaluationSettingBody from '@/modals/evaluation/EvaluationSettingModal/container/EvaluationSettingBody'
import EvaluationSettingFooter from '@/modals/evaluation/EvaluationSettingModal/container/EvaluationSettingFooter'

import useGetEvaluation from '@/modals/evaluation/EvaluationSettingModal/hooks/useGetEvaluation'
import useGetPostingMember from '@/modals/evaluation/UpdateEvaluationMemberModal/hooks/useGetPostingMember'
import useUpdateEvaluationMembers from '@/modals/evaluation/EvaluationSettingModal/hooks/useUpdateEvaluationMembers'
import {
  convertToEvaluationMembers,
  getUpdateEvaluationMemberForm,
} from '@/modals/evaluation/evaluation.factory'

import { PostingStep } from '@/interface/applicants'
import { EvaluationMember } from '@/interface/evaluation'

import {
  selectedMemberIdsAtom,
  stepAtom,
} from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'

import { useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useParams } from 'next/navigation'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import { AUTHORITY } from '@/shared/constants'
import { useTranslations } from 'next-intl'

interface EvaluationSettingModalProps {
  onClose: () => void
  step: PostingStep
}

const EvaluationSettingModal = ({ onClose, step }: EvaluationSettingModalProps) => {
  const params = useParams()
  const postingId = params?.id as string
  const { step_name, applicant_count, step_id } = step

  const [selectedMemberIds, setSelectedMemberIds] = useRecoilState(selectedMemberIdsAtom)
  const setStep = useSetRecoilState(stepAtom)

  const methods = useForm<{
    evaluationMembers: EvaluationMember[]
    isAnonymous: boolean
  }>()
  const { handleSubmit, reset, setValue, watch } = methods

  const resetStatus = () => {
    setSelectedMemberIds([])
    setStep(null)
    reset()
  }
  const handleClose = () => {
    onClose()
    resetStatus()
  }

  const { data, error, refetch } = useGetEvaluation(postingId, step_id)
  const getPostingMemberId = data && !error ? postingId : ''

  const { data: postingMemberData } = useGetPostingMember(getPostingMemberId)
  const postingMembers = convertToEvaluationMembers(postingMemberData)
  const $t = useTranslations('evaluation')

  const { updateEvaluationMembersMutate } = useUpdateEvaluationMembers(
    postingId,
    step_id,
    handleClose,
  )

  const resetDefaultMembers = () => {
    if (!data) return
    const filterNotPostingMembers = selectedMemberIds.filter((id) =>
      postingMembers?.some((member) => member.identification === id),
    )
    const defaultMemberIds = data.evaluation_members.map((member) => member.identification)

    const includedRecruitmentMembers = [...filterNotPostingMembers, ...defaultMemberIds].filter(
      (value, index, self) => self.indexOf(value) === index,
    )

    return setSelectedMemberIds(includedRecruitmentMembers)
  }

  const resetInitMembers = () => {
    if (!data) return
    reset({
      evaluationMembers: data.evaluation_members,
      isAnonymous: data.is_anonymous,
    })
    setSelectedMemberIds(data.evaluation_members.map((member) => member.identification))
  }

  const resetFormDefaultValues = () => {
    if (selectedMemberIds.length > 0) {
      resetDefaultMembers()
      return
    }
    resetInitMembers()
  }
  const init = () => {
    setSelectedMemberIds([])
    setStep(step)
  }

  const updateFormValues = () => {
    const evaluationMembers = postingMembers?.filter((member: EvaluationMember) =>
      selectedMemberIds.includes(member.identification),
    )
    const defaultMembers =
      data?.evaluation_members.filter((member) =>
        selectedMemberIds.includes(member.identification),
      ) || []
    const newMembers = evaluationMembers.filter(
      (member) =>
        !defaultMembers.some(
          (defaultMember) => defaultMember.identification === member.identification,
        ),
    )
    const newEvaluationMembers = [...defaultMembers, ...newMembers]

    setValue('evaluationMembers', newEvaluationMembers, {
      shouldDirty: true,
    })
  }
  const handleFormSubmit = (form: FieldValues) => {
    if (!data) return
    const evaluationMembersData = {
      evaluation_id: `${data.evaluation_v2_id}`,
      data: getUpdateEvaluationMemberForm(form),
    }
    updateEvaluationMembersMutate(evaluationMembersData)
  }
  const handleError = () => {
    if (!error) return
    Toast.error(error.message || $t('unknown_evaluation'))
    handleClose()
  }

  useEffect(() => {
    init()
  }, [])
  useEffect(() => {
    refetch()
    resetFormDefaultValues()
  }, [data])
  useEffect(() => {
    handleError()
  }, [error])
  useEffect(() => {
    updateFormValues()
  }, [selectedMemberIds])

  const defaultMemberIds = data?.evaluation_members?.map((member) => member.identification)
  const selectedEvaluationMembers = watch('evaluationMembers')?.filter(
    (selectedMember) => selectedMember.user_authority === AUTHORITY.EVALUATOR,
  )
  const isEvaluationMemberChanged =
    !defaultMemberIds?.every((id) => selectedMemberIds?.includes(id)) ||
    !selectedMemberIds?.every((id) => defaultMemberIds?.includes(id))

  const isEvaluationAccessChanged =
    selectedEvaluationMembers?.length > 0 &&
    selectedEvaluationMembers?.some((member) =>
      data?.evaluation_members?.some(
        (defaultMember) =>
          member.identification === defaultMember.identification &&
          defaultMember.can_view !== member.can_view,
      ),
    )
  const isEvaluationMembersDirty = isEvaluationMemberChanged || isEvaluationAccessChanged

  if (!data || !postingMemberData) return null

  return (
    <ModalLayout onClick={handleClose} isDimmed>
      <FormProvider {...methods}>
        <Styles.Form onSubmit={handleSubmit(handleFormSubmit)}>
          <EvaluationSettingHeader stepName={step_name} applicantCount={applicant_count} />
          <EvaluationSettingBody
            evaluationId={data.evaluation_v2_id}
            evaluationTables={data.tables}
            evaluationMembers={data.evaluation_members}
            postingMembers={postingMembers}
          />
          <EvaluationSettingFooter isDirty={isEvaluationMembersDirty} onClose={handleClose} />
        </Styles.Form>
      </FormProvider>
    </ModalLayout>
  )
}

export default EvaluationSettingModal
