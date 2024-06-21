import { FreshMenScenario } from '@/entities/onboarding/types'
import { Chip, Tooltip } from '@repo/ui'

interface FreshManFirstScenarioProps {
  scenarios?: FreshMenScenario[]
}

export const FreshManFirstScenario = ({ scenarios }: FreshManFirstScenarioProps) => {
  if (!scenarios || scenarios?.length < 1) {
    return <span>-</span>
  }

  const isChanged = scenarios?.[0].is_changed
  const scenarioTitle = scenarios?.[0].title

  return (
    <Tooltip
      disabled={!isChanged}
      text={`${scenarioTitle}에서 수정된 작업이 있습니다`}
      direction="bottom"
    >
      {isChanged && <Chip label={scenarioTitle} status="info" />}
      {!isChanged && <Chip trailingIcon="icon/sync-line" label={scenarioTitle} status="info" />}
    </Tooltip>
  )
}
