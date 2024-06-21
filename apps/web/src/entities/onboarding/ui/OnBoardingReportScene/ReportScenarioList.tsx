import React from 'react'
import { ScenarioReport } from '@/entities/onboarding/types/reports'
import { Chip } from '@repo/ui'

interface ReportScenarioListProps {
  scenarios: ScenarioReport[]
}

const ReportScenarioList = ({ scenarios }: ReportScenarioListProps) => {
  return (
    <>
      {scenarios.map((scenario) => {
        if (scenario.is_edited) {
          return (
            <Chip
              key={`scenario_${scenario.id}`}
              label={scenario.title}
              size="md"
              status="info"
              trailingIcon="icon/sync-line"
            />
          )
        }
        return (
          <Chip key={`scenario_${scenario.id}`} label={scenario.title} size="md" status="info" />
        )
      })}
    </>
  )
}

export default ReportScenarioList
