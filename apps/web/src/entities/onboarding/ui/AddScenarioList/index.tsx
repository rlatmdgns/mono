import { Scenario } from '@/entities/onboarding/types'
import { AddScenarioItem } from '@/features/onboarding/ui'
import { wrapper } from '@/entities/onboarding/ui/AddScenarioList/styles.css'

interface AddScenarioListProps {
  scenarios: Scenario[]
}

export const AddScenarioList = ({ scenarios }: AddScenarioListProps) => {
  return (
    <ul className={wrapper}>
      {scenarios.map((scenario: Scenario, index: number) => {
        return (
          <AddScenarioItem
            scenario={scenario}
            name={`scenario_${index}`}
            key={`add_scenario_${index}`}
          />
        )
      })}
    </ul>
  )
}
