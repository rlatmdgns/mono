import React, { useEffect } from 'react'
import * as Styles from './styles'
import { ModalLayout } from '@/shared/ui'
import { usePathname, useRouter } from 'next/navigation'
import MainContent from '@/modals/ApplicantModal/components/MainContent'
import useApplicantModal from '@/modals/ApplicantModal/hooks/useApplicantModal'
import DisplayLock from '@/modals/ApplicantModal/components/DisplayLock'
import ApplicantModalSidebar from '@/modals/ApplicantModal/components/ApplicantModalSidebar'
import { useAuthority } from '@/shared/hooks'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { AUTHORITY } from '@/shared/constants'

import {
  activeFileIdAtom,
  activeTabIndexAtom,
  applicantIdAtom,
  applicantNameAtom,
} from '@/modals/ApplicantModal/recoil'
import useApplicant from '@/modals/ApplicantModal/hooks/useApplicant'
import useApplicantPublic from '@/modals/ApplicantModal/hooks/useApplicantPublic'
import { evaluationIdsAtom, evaluationViewStateAtom } from '@/features/Evaluation/recoil/atom'
import {
  IsMemoEditorActiveAtom,
  IsMyMemoAtom,
  MemoAtom,
  MemosAtom,
} from '@/features/Memo/recoil/atom'

interface ApplicantModalProps {
  onClose: () => void
  applicantId: string
}

const ApplicantModal = ({ onClose, applicantId }: ApplicantModalProps) => {
  const pathname = usePathname() as string
  const router = useRouter()

  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  const setApplicantId = useSetRecoilState(applicantIdAtom)
  const resetApplicantId = useResetRecoilState(applicantIdAtom)
  const resetActiveTabIndex = useResetRecoilState(activeTabIndexAtom)
  const resetActiveFileId = useResetRecoilState(activeFileIdAtom)
  const setApplicantNameAtom = useSetRecoilState(applicantNameAtom)
  const resetApplicantEvaluationState = useResetRecoilState(evaluationViewStateAtom)
  const resetEvaluationIds = useResetRecoilState(evaluationIdsAtom)

  /* Memo */
  const resetMemos = useResetRecoilState(MemosAtom)
  const resetMemo = useResetRecoilState(MemoAtom)
  const resetIsMyMemo = useResetRecoilState(IsMyMemoAtom)
  const resetIsMemoEditorActive = useResetRecoilState(IsMemoEditorActiveAtom)

  const { publicMutate } = useApplicantPublic()
  const { data: applicantModal } = useApplicantModal(applicantId)
  const { data: applicant } = useApplicant(applicantId, isEvaluator)

  const isNoData = !applicantId || !applicantModal
  const isNotPublicEvaluation = isEvaluator && !applicantModal?.is_public

  const resetApplicantState = () => {
    resetApplicantId()
    resetActiveTabIndex()
    resetActiveFileId()
    resetApplicantEvaluationState()
    resetEvaluationIds()

    resetMemos()
    resetMemo()
    resetIsMyMemo()
    resetIsMemoEditorActive()
  }

  const handleClick = () => {
    if (!pathname) return
    onClose()
    resetApplicantState()
    router.replace(pathname)
  }

  const handlePublic = () => {
    publicMutate(applicantId)
  }

  const setApplicantName = () => {
    if (!applicantModal) return
    setApplicantNameAtom(applicantModal.applicant_name)
  }

  useEffect(() => {
    setApplicantName()
  }, [applicantModal])

  useEffect(() => {
    setApplicantId(`${applicantId}`)
  }, [])

  if (isNoData || isNotPublicEvaluation) return null

  const { is_public, posting_id, step_id } = applicantModal

  return (
    <ModalLayout isDimmed>
      <Styles.Wrapper>
        <DisplayLock isPublic={is_public} />
        <Styles.Container $isPublic={is_public}>
          <ApplicantModalSidebar
            isEvaluator={isEvaluator}
            applicantModal={applicantModal}
            applicant={applicant}
            onClose={handleClick}
          />
          <MainContent
            applicantName={applicantModal.applicant_name}
            isEvaluator={isEvaluator}
            isPublic={is_public}
            postingId={posting_id}
            stepId={step_id}
            onClose={handleClick}
            onPublic={handlePublic}
          />
        </Styles.Container>
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default ApplicantModal
