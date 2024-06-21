import * as Styles from './styles'
import StepEvaluation from '@/features/Evaluation/containers/StepEvaluation'
import EvaluationStatus from '@/features/Evaluation/containers/EvaluationStatus'
import MemberEvaluationResult from '@/features/Evaluation/containers/MemberEvaluationResult'
import EvaluationSubmitForm from '@/features/Evaluation/containers/EvaluationSubmitForm'
import UpdateMyEvaluationForm from '@/features/Evaluation/containers/UpdateMyEvaluationForm'
import useGetApplicantEvaluation from '@/features/Evaluation/hooks/useGetApplicantEvaluation'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import React, { useEffect } from 'react'
import useCloseEvaluationTables from '@/features/Evaluation/hooks/useCloseEvaluationTables'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import { evaluationIdsAtom, evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'
import MyEvaluationResult from '@/features/Evaluation/containers/MyEvaluationResult'
import { evaluationStateAtom } from '@/modals/ApplicantModal/recoil'
import { useLocale, useTranslations } from 'next-intl'

interface EvaluationProps {
  postingId: number
  applicantId: string
  stepId: string
}

const Evaluation = ({ postingId, applicantId, stepId }: EvaluationProps) => {
  const $t = useTranslations()
  const currentLocale = useLocale()
  const { openModal, closeModal } = useModal()
  const evaluationIds = useRecoilValue(evaluationIdsAtom)
  const resetEvaluationIds = useResetRecoilState(evaluationIdsAtom)
  const setEvaluationViewState = useSetRecoilState(evaluationViewStateAtom)
  const setEvaluationState = useSetRecoilState(evaluationStateAtom)

  const { data: applicantEvaluation } = useGetApplicantEvaluation(`${postingId}`, applicantId)
  const { closeEvaluationTableMutate } = useCloseEvaluationTables(
    `${postingId}`,
    `${evaluationIds.evaluationId}`,
    applicantId,
    `${evaluationIds.tableId}`,
    () => {
      closeModal(MODAL.CONFIRM)
      setEvaluationViewState('main')
      resetEvaluationIds()
    },
  )

  const handleEvaluationTableClose = (
    isClosed: boolean,
    evaluation_id?: string,
    table_id?: string,
  ) => {
    const evaluationId = evaluation_id || evaluationIds.evaluationId
    const tableId = table_id || evaluationIds.tableId

    const data = {
      evaluation_id: `${evaluationId}`,
      table_id: `${tableId}`,
      data: {
        applicant_ids: [applicantId],
      },
    }

    openModal(MODAL.CONFIRM, {
      title: isClosed
        ? $t('messages.evaluation_close_cancel_confirm')
        : $t('messages.evaluation_close_confirm'),
      subtitle:
        currentLocale === 'ko' ? (
          <>
            평가표를 마감하면 평가표 삭제가 불가하며
            <br /> 필요시 마감을 취소할 수 있습니다.
          </>
        ) : (
          <>
            Once the evaluation form is closed, it cannot be deleted.
            <br /> If necessary, you can cancel the closure.
          </>
        ),
      state: 'positive',
      textCancel: $t('common.close'),
      textConfirm: isClosed ? $t('evaluation.close_cancel') : $t('evaluation.close'),
      iconSource: 'icon/assessment-solid',
      onClick: () => closeEvaluationTableMutate(data),
    })
  }

  const getEvaluationState = () => {
    if (!applicantEvaluation) return
    const activeStep = applicantEvaluation.step?.filter((step) => step.step_id === stepId)[0]
    setEvaluationState(activeStep?.evaluation_status)
  }

  useEffect(() => {
    getEvaluationState()
  }, [applicantEvaluation])

  if (!applicantEvaluation) return null
  return (
    <Styles.Wrapper>
      <StepEvaluation
        applicantId={applicantId}
        applicantEvaluation={applicantEvaluation.step}
        onEvaluationTableClose={handleEvaluationTableClose}
      />
      <EvaluationStatus
        applicantId={applicantId}
        onEvaluationTableClose={handleEvaluationTableClose}
      />
      <MemberEvaluationResult
        applicantId={applicantId}
        onEvaluationTableClose={handleEvaluationTableClose}
      />
      <MyEvaluationResult applicantId={applicantId} />
      <EvaluationSubmitForm applicantId={applicantId} />
      <UpdateMyEvaluationForm applicantId={applicantId} />
    </Styles.Wrapper>
  )
}

export default Evaluation
