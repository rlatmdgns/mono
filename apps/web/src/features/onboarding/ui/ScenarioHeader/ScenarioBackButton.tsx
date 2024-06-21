import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { IconButton } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { titleStyle, wrapper } from '@/features/onboarding/ui/ScenarioHeader/styles.css'

interface BackButtonProps {
  scenarioId: string
  isPublish: boolean
  isChanged: boolean
}

export const ScenarioBackButton = ({ scenarioId, isPublish, isChanged }: BackButtonProps) => {
  const { openModal } = useModal()

  const router = useRouter()
  const titleText = !isPublish && scenarioId ? '시나리오 수정' : '시나리오 추가'

  const { setValue } = useFormContext()

  const handleBack = () => {
    if (!isChanged) {
      router.back()
      return
    }
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: (
        <>
          저장하지 않은 정보는 삭제됩니다.
          <br />
          뒤로 가시겠습니까?
        </>
      ),
      iconSource: 'icon/warning-solid',
      textConfirm: '뒤로가기',
      textCancel: '닫기',
      onClick: () => handleConfirm(),
    })
  }

  const handleConfirm = () => {
    if (isChanged) {
      // setValue('applicant_list', originalApplicantItems)
      router.back()
      return
    }

    router.back()
  }

  if (isPublish) return null

  return (
    <div className={wrapper}>
      <IconButton icon="icon/back-line" color="neutralGray800" onClick={handleBack} />
      <h2 className={titleStyle}>{titleText}</h2>
    </div>
  )
}
