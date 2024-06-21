import { useRef } from 'react'
import { TAB_CONTENTS_DUMMY } from '../../constants'
import { ReportEvaluationBarContents } from './ReportEvaluationBarContents'
import { ReportEvaluationBarHeader } from './ReportEvaluationBarHeader'
import { background, wrapper } from './styles.css'

interface OnboardingReportEvaluationBarProps {
  isActive: boolean
  onClose: () => void
}

export const OnboardingReportEvaluationBar = ({
  isActive,
  onClose,
}: OnboardingReportEvaluationBarProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current !== event.target) return
    onClose()
  }

  if (!isActive) return null

  return (
    <div className={background} ref={modalRef} onClick={closeModal}>
      <div className={wrapper}>
        <ReportEvaluationBarHeader name={TAB_CONTENTS_DUMMY.freshman_name} onClose={onClose} />
        <ReportEvaluationBarContents />
      </div>
    </div>
  )
}
