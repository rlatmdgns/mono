import { Scenario } from '@/entities/onboarding/types'
import { descriptionStyle, wrapper } from '@/features/onboarding/ui/AddScenarioItem/styles.css'
import { CheckBox, Tooltip } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'

interface AddScenarioItemProps {
  scenario: Scenario
  name: string
}

export const AddScenarioItem = ({ scenario, name }: AddScenarioItemProps) => {
  const { control } = useFormContext()
  const isDisabled = name === 'scenario_2'

  if (isDisabled) {
    return (
      <li className={wrapper}>
        <Tooltip text={'이미 적용된 시나리오입니다.'} direction={'top'}>
          <CheckBox isChecked={true} text={scenario.title} disabled={true} onChange={() => {}} />
        </Tooltip>
        <p className={descriptionStyle}>{scenario.description}</p>
      </li>
    )
  }

  return (
    <li className={wrapper}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <CheckBox
            isChecked={value}
            onChange={(option) => {
              onChange(option)
            }}
            text={scenario.title}
          />
        )}
      />
      <p className={descriptionStyle}>{scenario.description}</p>
    </li>
  )
}
