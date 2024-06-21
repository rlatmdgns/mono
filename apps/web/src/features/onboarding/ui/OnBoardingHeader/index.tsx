import { wrapper, title, number } from './styles.css'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Button } from '@repo/ui'
import { FinalStageApplicantResponse } from '@/entities/onboarding/types'

interface OnBoardingHeaderProps {
  onBoardingFreshmanLength: number
  initialFinalStageApplicant: FinalStageApplicantResponse
}

export const OnBoardingHeader = ({
  onBoardingFreshmanLength,
  initialFinalStageApplicant,
}: OnBoardingHeaderProps) => {
  const { openModal, closeModal } = useModal()
  const freshmanLength = onBoardingFreshmanLength || 0

  const handleClick = () => {
    openModal(MODAL.CREATE_ATS_FRESHMAN, {
      initialFinalStageApplicant,
      onClose: () => closeModal(MODAL.CREATE_ATS_FRESHMAN),
    })
  }

  return (
    <div className={wrapper}>
      <h1 className={title}>
        입사자
        <span className={number}>({freshmanLength})</span>
      </h1>
      <Button onClick={handleClick} text="입사자 추가" leadingIcon="icon/plus-line" />
    </div>
  )
}
