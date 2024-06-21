'use client'

import {
  applicantMultiSort,
  applicantSort,
  moveMultiStep,
  moveStep,
} from '@/app/[locale]/postings/_components/Board/Board.factory'

import MultiSelectToolbar from '@/app/[locale]/postings/_components/MultiSelectToolbar'
import StepList from '@/app/[locale]/postings/_components/StepList'

import useUpdateApplicantLocation from '@/app/[locale]/postings/_hooks/useUpdateApplicantLocation'
import useCloseEvaluation from '@/app/[locale]/postings/_hooks/useCloseEvaluation'

import { useAuthority, useModal } from '@/shared/hooks'
import { Toast } from '@/shared/ui'
import { AUTHORITY, MODAL } from '@/shared/constants'

import React, { useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Selecto from 'react-selecto'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import {
  applicantsAtom,
  draggingIdAtom,
  evaluationIdAtom,
  selectApplicantCardsAtom,
  stepsAtom,
} from '@/app/[locale]/postings/_recoil'
import * as Styles from './styles'

interface BoardProps {
  postingId: string
}

const Board = ({ postingId }: BoardProps) => {
  const { openModal, closeModal } = useModal()
  const [applicants, setApplicants] = useRecoilState(applicantsAtom)
  const steps = useRecoilValue(stepsAtom)

  const [selectApplicantCards, setSelectApplicantCards] = useRecoilState(selectApplicantCardsAtom)
  const [evaluateId, setEvaluateId] = useRecoilState(evaluationIdAtom)

  const setDraggingId = useSetRecoilState(draggingIdAtom)

  const { updateApplicantLocationMutate } = useUpdateApplicantLocation(postingId)
  const { closeEvaluationMutate } = useCloseEvaluation(() => setEvaluateId(0))

  const { authority } = useAuthority()
  const isEvaluation = authority === AUTHORITY.EVALUATOR

  const isSameStep = selectApplicantCards?.every(
    (selectApplicantCard) => selectApplicantCard.step_id === selectApplicantCards[0].step_id,
  )
  const hasInterview = selectApplicantCards.some(
    (selectApplicantCard) =>
      selectApplicantCard.schedule === 'scheduled' || selectApplicantCard.schedule === 'ongoing',
  )

  const selectReset = () => {
    setSelectApplicantCards([])
    setDraggingId(null)
  }

  const handleDragError = (message: string) => {
    Toast.warning(message)
    setSelectApplicantCards([])
  }

  const closeEvaluation = (applicant_ids: string[], evaluation_id?: number) => {
    closeEvaluationMutate({
      evaluation_id: `${evaluation_id}`,
      data: {
        applicant_ids: applicant_ids,
      },
    })
  }

  const handleDragStart = (start: any) => {
    if (selectApplicantCards.length > 1) {
      if (!isSameStep) {
        return handleDragError('다중 드래그는 같은 절차 단계 지원자만 이동 가능합니다.')
      }
      if (hasInterview) {
        return handleDragError('면접 예정 또는 면접 중인 지원자는 이동할 수 없습니다.')
      }
    }
    setDraggingId(start.draggableId)
  }

  const handleDragFailApplicant = (applicant_id: string[], step_id: string, sort: number) => {
    openModal(MODAL.CONFIRM, {
      title: (
        <>
          불합격 지원자가 포함되어 있습니다. <br /> 이동하시겠습니까?
        </>
      ),
      subtitle: '해당 불합격 지원자를 다른 절차로 이동합니다.',
      iconSource: 'icon/check-solid',
      textConfirm: '이동',
      onClick: () => {
        closeModal(MODAL.CONFIRM)
        updateApplicantLocationMutate({
          applicant_id: applicant_id,
          step_id: step_id,
          sort: sort,
        })
        selectReset()
      },
      onClose: () => {
        closeModal(MODAL.CONFIRM)
        selectReset()
      },
    })
  }

  const handleDragProceedingEvaluationApplicant = (
    applicant_id: string[],
    step_id: string,
    sort: number,
    selectApplicantEvaluationId?: number,
  ) => {
    openModal(MODAL.CONFIRM, {
      title: (
        <>
          평가를 마감하지 않은 지원자가
          <br /> 포함되어 있습니다. 이동하시겠습니까?
        </>
      ),
      subtitle: "'이동' 버튼을 누르시면 일괄 마감 처리됩니다.",
      iconSource: 'icon/check-solid',
      textConfirm: '이동',
      onClick: () => {
        closeModal(MODAL.CONFIRM)
        closeEvaluation(applicant_id, selectApplicantEvaluationId)
        updateApplicantLocationMutate({
          applicant_id: applicant_id,
          step_id: step_id,
          sort: sort,
        })
        selectReset()
      },
      onClose: () => {
        closeModal(MODAL.CONFIRM)
        selectReset()
      },
    })
  }

  const handleDragEnd = (result: any) => {
    const isSameStartAndEndSortable = result.source.droppableId === result.destination.droppableId

    const selectedFailApplicants = selectApplicantCards.filter(
      (item) => item.is_fail === 'true' || item.applicant_state === 2,
    )
    const isSelectedApplicantFails = selectedFailApplicants.length > 0

    const selectedProceedingEvaluationApplicants = selectApplicantCards.filter(
      (item) => item.evaluation_state === 'proceeding',
    )
    const isSelectedProceedingEvaluationApplicants =
      selectedProceedingEvaluationApplicants.length > 0
    const selectApplicantEvaluationId = selectedProceedingEvaluationApplicants[0]?.evaluation_id

    if (!result.destination || result.reason === 'CANCEL') {
      return
    }

    if (selectApplicantCards.length > 1) {
      const selectIds = selectApplicantCards?.map(
        (selectApplicant: any) => selectApplicant.applicant_id,
      )
      if (isSelectedApplicantFails) {
        handleDragFailApplicant(selectIds, result.destination.droppableId, result.destination.index)
        return
      }

      if (isSelectedProceedingEvaluationApplicants) {
        console.log('1 <', selectedProceedingEvaluationApplicants)

        handleDragProceedingEvaluationApplicant(
          selectIds,
          result.destination.droppableId,
          result.destination.index,
          selectApplicantEvaluationId,
        )
        return
      }

      if (isSameStartAndEndSortable) {
        setApplicants(applicantMultiSort(applicants, selectApplicantCards, result))
      }
      if (!isSameStartAndEndSortable) {
        setApplicants(moveMultiStep(applicants, selectApplicantCards, result))
      }

      updateApplicantLocationMutate({
        applicant_id: selectIds,
        step_id: result.destination.droppableId,
        sort: result.destination.index,
      })
      selectReset()
      return
    }

    if (isSameStartAndEndSortable) {
      setApplicants(applicantSort(applicants, result))
    }

    if (!isSameStartAndEndSortable) {
      const failApplicantIds = applicants
        .filter((applicant) => applicant.applicant_state === 2)
        .map((applicant) => `${applicant.applicant_id}`)
      const isIncludeFailApplicant = failApplicantIds.includes(result.draggableId)

      if (isSelectedApplicantFails || isIncludeFailApplicant) {
        return handleDragFailApplicant(
          [result.draggableId],
          result.destination.droppableId,
          result.destination.index,
        )
      }

      const proceedEvaluationApplicantIds = applicants
        .filter((applicant) => applicant.evaluation_state === 'proceeding')
        .map((applicant) => `${applicant.applicant_id}`)
      const isIncludedProceedingEvaluationApplicant = proceedEvaluationApplicantIds.includes(
        result.draggableId,
      )

      if (isSelectedProceedingEvaluationApplicants || isIncludedProceedingEvaluationApplicant) {
        return handleDragProceedingEvaluationApplicant(
          [result.draggableId],
          result.destination.droppableId,
          result.destination.index,
          evaluateId,
        )
      }

      setApplicants(moveStep(applicants, result))
    }

    updateApplicantLocationMutate({
      applicant_id: [result.draggableId],
      step_id: result.destination.droppableId,
      sort: result.destination.index,
    })
    selectReset()
  }

  const handleDragSelect = (event: any) => {
    if (isEvaluation) return

    const filterApplicantCard = event?.selected.map((item: any) => {
      return item
    })

    const selectApplicantCard = filterApplicantCard.map((item: any) => {
      return {
        step_id: item.dataset.stepid,
        applicant_id: item.dataset.applicant,
        applicant_name: item.dataset.name,
        applicant_email: item.dataset.email,
        schedule: item.dataset.schedule,
        is_fail: item.dataset.fail,
        evaluation_state: item.dataset.evaluationstate,
        evaluation_id: item.dataset.evaluationid,
      }
    })
    setSelectApplicantCards(selectApplicantCard)
  }

  useEffect(() => {
    return () => {
      selectReset()
    }
  }, [])

  return (
    <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <Selecto
        dragContainer=".board"
        ratio={0}
        hitRate={10}
        selectByClick={false}
        selectFromInside={false}
        selectableTargets={['.applicant']}
        toggleContinueSelect={['shift']}
        onSelect={handleDragSelect}
      />
      <Styles.Wrapper className="board">
        <StepList steps={steps} applicants={applicants} postingId={postingId} />
      </Styles.Wrapper>
      <MultiSelectToolbar
        postingId={postingId}
        applicants={selectApplicantCards}
        selectReset={selectReset}
      />
    </DragDropContext>
  )
}

export default Board
