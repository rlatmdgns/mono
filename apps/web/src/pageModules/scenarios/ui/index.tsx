'use client'

import { TemplateScenario, TemplateScenarioWithId } from '@/entities/onboarding/types/scenario'
import { ScenarioCardList } from '@/features/onboarding/ui'
import { ScenariosHeader } from '@/features/onboarding/ui/ScenariosHeader'
import { wrapper } from './styles.css'
import { useGetTemplateScenarios } from '@/entities/onboarding/hooks/useGetScenarios'

interface ScenariosPageProps {
  // initialData: TemplateScenario[] | TemplateScenarioWithId
  initialData : any
}

export const ScenariosPage = ({ initialData }: ScenariosPageProps) => {
  const { data: scenarios } = useGetTemplateScenarios(initialData)
  const scenariosCount = scenarios?.length
  return (
    <div className={wrapper}>
      <ScenariosHeader count={scenariosCount} />
      <ScenarioCardList scenarios={scenarios} />
    </div>
  )
}
