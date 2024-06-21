import {
  buttonWrapper,
  scenarioItemWrapper,
} from '@/features/onboarding/ui/ScenarioSidebarItem/styles.css'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown } from '@/shared/ui'
import DropdownItem from '@/shared/ui/Dropdowns/DropdownItem'
import { OnboardingSidebarScenarioItem } from '@/widgets/onboarding/entities'
import { Button, Toast } from '@repo/ui'
import { useSetRecoilState } from 'recoil'

interface FreshmanScenarioItemProps {
  name: string
  freshmanId: number
  scenario: OnboardingSidebarScenarioItem
}

export const ScenarioItem = ({ name, freshmanId, scenario }: FreshmanScenarioItemProps) => {
  const { openModal, closeModal } = useModal()

  const handleSetCurrentScenario = () => {
    //   TODO: SelectBox 시나리오 변경시 이벤트
  }

  const handleDeleteScenarioModal = () => {
    // TODO : 진행전 or 진행중
    const isProcess = false
    const subTitleText = !isProcess
      ? '삭제한 정보는 복구가 불가합니다.'
      : '삭제 시 진행중인 온보딩 시나리오는 모두 중단되며 전송된 링크는 만료됩니다.'
    openModal(MODAL.NEW_CONFIRM, {
      title: '시나리오를 삭제하시겠습니까?',
      subTitle: subTitleText,
      state: 'danger',
      onClick: handleDeleteScenario,
      onClose: handleCloseDeleteSceneModal,
    })
  }

  const handleDeleteScenario = () => {
    // TODO : 시나리오 삭제 API 연동 필요
    handleCloseDeleteSceneModal()
    Toast.success('삭제되었습니다.')
  }

  const handleCloseDeleteSceneModal = () => {
    closeModal(MODAL.NEW_CONFIRM)
  }

  return (
    <div className={scenarioItemWrapper}>
      {/* TODO : 아이콘 변경 필요 (icon/sync-line) */}
      <Button
        text={scenario.title}
        style={'mono'}
        state={'secondary'}
        leadingIcon={'icon/more-solid'}
        onClick={handleSetCurrentScenario}
      />
      <Dropdown
        button={
          <Button size={'xs'} style={'mono'} state={'secondary'} leadingIcon={'icon/more-solid'} />
        }
        isAutoClose
        isNotPortal={false}
        zIndex={20}
      >
        <DropdownItem>
          <div className={buttonWrapper}>
            <Button
              text={'삭제'}
              state={'danger'}
              style={'mono'}
              leadingIcon={'icon/delete-line'}
              onClick={handleDeleteScenarioModal}
            />
          </div>
        </DropdownItem>
      </Dropdown>
    </div>
  )
}
