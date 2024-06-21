import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { MAX_STEP } from '@/modals/ReqeustInterviewModal/RequestInterviewModal.constants'
import { useRecoilState, useRecoilValue } from 'recoil'
import {
  ApplicantsIdsAtom,
  InterviewerAtom,
  InterviewInformationAtom,
  InterviewRequestStepAtom,
  NextDisabledStatusAtom,
  SubmitDisabledStatusAtom,
} from '@/modals/ReqeustInterviewModal/recoil/atom'
import React, { useEffect } from 'react'
import { CurrentInterviewPlaceAtom } from '@/shared/ui/LocationSelect/recoil/atom'
import { useTranslations } from 'next-intl'

interface StepButtonsProps {
  onChangeCurrentStep: (type: string) => void
  onConfirmModal: () => void
}

const StepButtons = ({ onChangeCurrentStep, onConfirmModal }: StepButtonsProps) => {
  const applicantsIds = useRecoilValue(ApplicantsIdsAtom)
  const interviewer = useRecoilValue(InterviewerAtom)
  const interviewInformation = useRecoilValue(InterviewInformationAtom)
  const currentInterviewPlace = useRecoilValue(CurrentInterviewPlaceAtom)
  const requestStep = useRecoilValue(InterviewRequestStepAtom)
  const submitDisabledStatus = useRecoilValue(SubmitDisabledStatusAtom)
  const [nextDisabledStatus, setNextDisabledStatus] = useRecoilState(NextDisabledStatusAtom)

  const showPreviousButton = requestStep > 1
  const showNextButton = requestStep < MAX_STEP
  const showSubmitButton = requestStep === MAX_STEP

  const $t = useTranslations('common')

  useEffect(() => {
    const isNextEnabledButtonStatus =
      applicantsIds.length > 0 &&
      interviewer.length > 0 &&
      (currentInterviewPlace.type === 'contact' ? true : !!interviewInformation)
    setNextDisabledStatus(isNextEnabledButtonStatus)
  }, [applicantsIds, interviewer, currentInterviewPlace.type, interviewInformation])

  return (
    <Styles.Buttons>
      <Styles.PrevButtonBox>
        {showPreviousButton && (
          <Button
            text={$t('prev')}
            state="standard"
            style="mono"
            onClick={() => onChangeCurrentStep('prev')}
          />
        )}
      </Styles.PrevButtonBox>
      <Styles.NextButtonBox>
        {showNextButton && (
          <Button
            text={$t('next')}
            disabled={!nextDisabledStatus}
            onClick={() => onChangeCurrentStep('next')}
          />
        )}
        {showSubmitButton && (
          <Button
            text={$t('send_email')}
            disabled={!submitDisabledStatus}
            onClick={onConfirmModal}
            isIconOnLeft={false}
            iconSource={'icon/send-solid'}
          />
        )}
      </Styles.NextButtonBox>
    </Styles.Buttons>
  )
}

export default StepButtons
