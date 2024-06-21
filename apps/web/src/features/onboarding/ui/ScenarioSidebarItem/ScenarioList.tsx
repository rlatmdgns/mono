import {
  OnboardingSidebarFreshmanList,
  OnboardingSidebarScenarioItem,
} from '@/widgets/onboarding/entities'
import { ScenarioItem } from '@/features/onboarding/ui/ScenarioSidebarItem/ScenarioItem'
import { Button } from '@repo/ui'
import { addScenarioButtonWrapper } from '@/features/onboarding/ui/ScenarioSidebarItem/styles.css'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'

interface ScenarioListProps {
  item: OnboardingSidebarFreshmanList
  isToggle: boolean
}

export const ScenarioList = ({ item, isToggle }: ScenarioListProps) => {
  const { openModal, closeModal } = useModal()
  const { name, scenarios } = item
  const freshmanId = item.id

  const handleAddScenarioModal = () => {
    openModal(MODAL.ADD_SCENARIO, {
      onClose: () => closeModal(MODAL.ADD_SCENARIO),
    })
  }

  if (!isToggle) return null

  return (
    <ul>
      {scenarios.map((scenario: OnboardingSidebarScenarioItem, index: number) => {
        return (
          <li key={`freshman_scenario_${index}`}>
            <ScenarioItem name={name} freshmanId={freshmanId} scenario={scenario} />
          </li>
        )
      })}
      <li className={addScenarioButtonWrapper}>
        <Button
          text={'시나리오 추가'}
          state={'secondary'}
          style={'mono'}
          leadingIcon={'icon/plus-line'}
          leadingIconColor={'neutralGray500'}
          onClick={handleAddScenarioModal}
        />
      </li>
    </ul>
  )
}
