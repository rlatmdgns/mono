'use client'
import React, { useEffect, useRef } from 'react'
import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import {
  ApplicantsIdsAtom,
  InterviewerAtom,
  InterviewInformationAtom,
  InterviewRequestStepAtom,
  NextDisabledStatusAtom,
  SubmitDisabledStatusAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import InterviewTitle from '@/modals/ReqeustInterviewModal/components/InterviewTitle'
import InterviewFooter from '@/modals/ReqeustInterviewModal/components/InterviewFooter'
import InterviewLocation from '@/modals/ReqeustInterviewModal/components/InterviewLocation'
import { RequestInterviewProps } from '@/interface/requestInterview'
import { selectApplicantCardsAtom } from '@/app/[locale]/postings/_recoil'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import Schedules from '@/features/Schedules'
import { CurrentInterviewPlaceAtom } from '@/shared/ui/LocationSelect/recoil/atom'

const RequestInterviewModal = ({ id, title, onClose }: RequestInterviewProps) => {
  const resetStep = useResetRecoilState(InterviewRequestStepAtom)
  const interviewerReset = useResetRecoilState(InterviewerAtom)
  const currentInterviewPlaceReset = useResetRecoilState(CurrentInterviewPlaceAtom)
  const interviewInformationReset = useResetRecoilState(InterviewInformationAtom)
  const nextDisabledStatusReset = useResetRecoilState(NextDisabledStatusAtom)
  const submitDisabledStatusReset = useResetRecoilState(SubmitDisabledStatusAtom)

  const selectApplicants = useRecoilValue(selectApplicantCardsAtom)
  const applicantIds = selectApplicants?.map((applicant) => applicant.applicant_id.toString())

  const applicantId = useRecoilValue(applicantIdAtom)
  const setApplicantsIds = useSetRecoilState<string[]>(ApplicantsIdsAtom)
  const currentStep = useRecoilValue(InterviewRequestStepAtom)

  const onModalClose = () => {
    resetStep()
    interviewerReset()
    currentInterviewPlaceReset()
    interviewInformationReset()
    nextDisabledStatusReset()
    submitDisabledStatusReset()
    onClose()
  }

  const resetApplicantIds = () => {
    if (applicantId) return
    setApplicantsIds(applicantIds)
  }

  useEffect(() => {
    resetApplicantIds()
  }, [])

  return (
    <ModalLayout isDimmed={true}>
      <Styles.RequestInterViewModal>
        <InterviewTitle title={title} onClose={onModalClose} />
        <Styles.InterviewBody $currentStep={currentStep}>
          {currentStep === 1 && <InterviewLocation id={id} />}
          {currentStep === 2 && <Schedules />}
        </Styles.InterviewBody>
        <InterviewFooter id={id} onClose={onModalClose} />
      </Styles.RequestInterViewModal>
    </ModalLayout>
  )
}

export default RequestInterviewModal
