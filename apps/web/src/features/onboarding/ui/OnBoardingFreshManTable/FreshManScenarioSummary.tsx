import { Tooltip } from '@/shared/ui'
import { Chip } from '@repo/ui'
import { FreshMenScenario } from '@/entities/onboarding/types'
import { getScenarioSummaryText } from '@/features/onboarding/lib/getScenarioSummaryText'

interface FreshManScenarioSummaryProps {
  scenarios?: FreshMenScenario[]
}

export const FreshManScenarioSummary = ({ scenarios }: FreshManScenarioSummaryProps) => {
  if (!scenarios) return null
  if (scenarios?.length < 2) return null
  const scenarioConunt = scenarios.length - 1

  return (
    <Tooltip text={getScenarioSummaryText(scenarios)} direction="bottom">
      <Chip label={`외 ${scenarioConunt}개`} status="info" />
    </Tooltip>
  )
}
