'use client'

import { ScenarioBackButton } from '@/features/onboarding/ui'
import { buttons, headerStyle } from '@/features/onboarding/ui/ScenarioHeader/styles.css'
import { Button } from '@repo/ui'
import { useFormContext } from 'react-hook-form'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useCreateTemplateScenario } from '@/features/onboarding/hooks/useCreateTemplateScenario'
import { FreshmanAndScenarioNavigation } from '@/features/onboarding/ui/ScenarioHeader/FreshmanAndScenarioNavigation'
import { Toast } from '@/shared/ui'

interface BackButtonProps {
  title?: string
  description?: string
  scenarioId: string
  isChanged: boolean
  isPublish: boolean
}

export const ScenarioHeader = ({
  title,
  description,
  scenarioId,
  isChanged,
  isPublish,
}: BackButtonProps) => {
  const { openModal } = useModal()
  const { getValues, watch } = useFormContext()
  const { createTemplateScenarioMutate } = useCreateTemplateScenario()
  const isEmptyManager = watch('manager').every(
    (managerSequence: any) => managerSequence.scenes.length === 0,
  )
  const isEmptyFreshman = watch('freshman').every(
    (managerSequence: any) => managerSequence.scenes.length === 0,
  )
  const isEmptySequence = isEmptyManager && isEmptyFreshman

  const handleSaveScenario = () => {
    const convertScenarios = () => {
      const payloadSequences = getValues()['manager'].map((managerSequence: any, index: number) => {
        const freshmanSequence = getValues()['freshman'][index]
        return {
          d_day: managerSequence.d_day,
          managers: [...managerSequence.scenes],
          freshmans: [...freshmanSequence.scenes],
        }
      })
      return payloadSequences
    }

    const scenarios = convertScenarios()
    const emptySequences = scenarios.reduce((acc: any, cur: any) => {
      const isEmptyFreshmen = cur.freshmans.length === 0
      const isEmptyManagers = cur.managers.length === 0

      if (isEmptyFreshmen && isEmptyManagers) {
        acc.push(`${cur.d_day}일(전체)`)
      }

      if (isEmptyFreshmen && !isEmptyManagers) {
        acc.push(`${cur.d_day}일(입사자)`)
      }

      if (isEmptyManagers && !isEmptyFreshmen) {
        acc.push(`${cur.d_day}일(매니저)`)
      }
      return acc
    }, [])

    const notEmptySequenceFilteredScenarios = scenarios.filter((scenario: any) => {
      const isEmptyFreshmen = scenario.freshmans.length === 0
      const isEmptyManagers = scenario.managers.length === 0
      if (isEmptyManagers && isEmptyFreshmen) {
        return false
      }
      return true
    })

    openModal(MODAL.SAVE_SCENARIO, {
      title,
      description,
      emptySequences,
      onClick: (data: any) => {
        if (notEmptySequenceFilteredScenarios.length === 0) {
          return Toast.error('설정된 시퀀스가 없습니다.')
        }

        const payload = {
          title: data.title,
          description: data.description,
          scenario: notEmptySequenceFilteredScenarios,
          is_edited: !!scenarioId,
        }
        createTemplateScenarioMutate(payload)
      },
    })
  }

  return (
    <header className={headerStyle}>
      <ScenarioBackButton scenarioId={scenarioId} isPublish={isPublish} isChanged={isChanged} />
      <FreshmanAndScenarioNavigation isPublish={isPublish} isChanged={isChanged} />
      <div className={buttons}>
        <Button
          type="submit"
          text="저장하기"
          style="mono"
          width="61px"
          onClick={() => handleSaveScenario()}
          disabled={isEmptySequence}
        />
      </div>
    </header>
  )
}
