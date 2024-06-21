import { ScenarioSidebarItem } from '@/features/onboarding/ui/ScenarioSidebarItem'
import { OnboardingSidebarFreshmanList } from '@/widgets/onboarding/entities'

interface ScenarioSidebarListProps {
  freshmen: OnboardingSidebarFreshmanList[]
}
export const ScenarioSidebarList = ({ freshmen }: ScenarioSidebarListProps) => {
  return (
    <ul>
      {freshmen.map((item: OnboardingSidebarFreshmanList, index: number) => {
        return (
          <li key={`freshman_${index}`}>
            <ScenarioSidebarItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}
