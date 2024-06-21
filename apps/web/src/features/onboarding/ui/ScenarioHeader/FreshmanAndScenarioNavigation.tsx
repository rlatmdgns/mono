import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import { useRouter } from 'next/navigation'
import { useFormContext } from 'react-hook-form'
import { buttonWrapper } from '@/features/onboarding/ui/ScenarioHeader/styles.css'
import { Button, Icon } from '@repo/ui'
import DropdownItem from '@/shared/ui/Dropdowns/DropdownItem'

interface FreshmanAndScenarioProps {
  isPublish?: boolean
  isChanged: boolean
}

export const FreshmanAndScenarioNavigation = ({
  isPublish,
  isChanged,
}: FreshmanAndScenarioProps) => {
  const { openModal } = useModal()

  const router = useRouter()

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

  if (!isPublish) return null

  return (
    <div className={buttonWrapper}>
      <Button
        state={'secondary'}
        style={'mono'}
        leadingIcon={'icon/home-line'}
        leadingIconColor={'neutralGray400'}
        onClick={handleBack}
      />
      <Icon icon={'icon/right-line'} />
      <Dropdown
        button={<Button state={'secondary'} style={'mono'} text={'테스트'} />}
        zIndex={20}
        direction={'left'}
      >
        <DropdownItem>테스트 1</DropdownItem>
      </Dropdown>
      <Icon icon={'icon/right-line'} />
      <Dropdown
        button={<Button state={'secondary'} style={'mono'} text={'테스트'} />}
        zIndex={20}
        direction={'left'}
      >
        <DropdownItem>테스트 1</DropdownItem>
      </Dropdown>
    </div>
  )
}
