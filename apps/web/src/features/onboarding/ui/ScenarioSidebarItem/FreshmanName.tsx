import {
  freshmanWrapper,
  scenariosLengthStyle,
} from '@/features/onboarding/ui/ScenarioSidebarItem/styles.css'
import { Button } from '@repo/ui'
import { OnboardingSidebarFreshmanList } from '@/widgets/onboarding/entities'

interface FreshmanNameProps {
  item: OnboardingSidebarFreshmanList
  isToggle: boolean
  onToggle: () => void
}

export const FreshmanName = ({ item, isToggle, onToggle }: FreshmanNameProps) => {
  const { name, scenarios } = item
  const scenariosLength = scenarios?.length

  const toggleIcon = isToggle ? 'icon/up-solid' : 'icon/down-solid'

  return (
    <div className={freshmanWrapper}>
      <Button
        text={name}
        style={'mono'}
        state={'secondary'}
        leadingIcon={toggleIcon}
        onClick={() => onToggle()}
      />
      <span className={scenariosLengthStyle}>{scenariosLength}</span>
    </div>
  )
}
