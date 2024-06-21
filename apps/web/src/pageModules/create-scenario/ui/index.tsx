'use client'

import { pageWrapper, scenarioWrapper } from '@/pageModules/create-scenario/ui/styles.css'
import { SequenceInformation } from '@/entities/onboarding/ui/SequeceInformation'
import { FormProvider } from 'react-hook-form'
import { AddSequenceButton } from '@/features/onboarding/ui'
import { ScenarioHeader } from 'features/onboarding/ui/ScenarioHeader'
import { Sequences } from '@/widgets/onboarding'
import { useCreateScenario } from '@/pageModules/create-scenario/hooks/useCreateScenario'
import React, { useRef } from 'react'
import { useGetTemplateScenarios } from '@/entities/onboarding/hooks/useGetScenarioDetail'

interface CreateScenarioPageProps {
  scenarioId: string
  isPublish: boolean
  initialData: any
}

export const CreateScenarioPage = ({
  scenarioId,
  isPublish,
  initialData,
}: CreateScenarioPageProps) => {
  const scenarioWrapperEl = useRef<HTMLDivElement>(null)
  const { data } = useGetTemplateScenarios(scenarioId, initialData)
  const { methods, handleAppend, handleRemove, handleUpdate } = useCreateScenario(
    data,
    scenarioWrapperEl.current,
  )
  const managerSequence = methods.getValues('manager')
  const freshmanSequence = methods.getValues('freshman')

  return (
    <div className={pageWrapper}>
      <FormProvider {...methods}>
        <ScenarioHeader
          title={initialData.title}
          description={initialData.description}
          scenarioId={scenarioId}
          isPublish={isPublish}
          isChanged={false}
        />
        <div className={scenarioWrapper} ref={scenarioWrapperEl}>
          <SequenceInformation title={data.title} scenarioId={scenarioId} />
          <Sequences
            managerSequence={managerSequence}
            freshmanSequence={freshmanSequence}
            onAdd={handleAppend}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
            isPublish={isPublish}
          />

          <AddSequenceButton onAppend={handleAppend} />
        </div>
      </FormProvider>
    </div>
  )
}
