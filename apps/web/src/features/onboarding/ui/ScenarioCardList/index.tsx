import { ScenarioItem } from '../../../../entities/onboarding/types/scenario'
import { ScenarioCardItem } from './ScenarioCardItem'
import { bookcards } from './styles.css'

interface ScenarioCardListProps {
  scenarios: ScenarioItem[]
}

export const ScenarioCardList = ({ scenarios }: ScenarioCardListProps) => {
  return (
    <div className={bookcards} data-testid={'bookcards'}>
      {scenarios?.map((scenario, index) => (
        <ScenarioCardItem
          key={`scenario_${index}`}
          id={scenario.id}
          title={scenario.title}
          description={scenario.description}
          number={scenario.number}
        />
      ))}
    </div>
  )
}
