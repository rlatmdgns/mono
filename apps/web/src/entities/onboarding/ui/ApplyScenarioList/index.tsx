import { ApplyScenarioItem } from './ApplyScenarioItem'
import { list } from './styles.css'

interface ApplyScenarioListProps {
  scenarios: any[]
}

export const ApplyScenarioList = ({ scenarios }: ApplyScenarioListProps) => {
  return (
    <ul className={list}>
      {scenarios.map((scenario) => (
        <ApplyScenarioItem
          key={`scenario_${scenario}`}
          id={scenario.id}
          title={scenario.title}
          desc={scenario.description}
        />
      ))}
    </ul>
  )
}
