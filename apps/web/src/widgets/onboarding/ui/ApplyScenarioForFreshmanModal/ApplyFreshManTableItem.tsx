import { tableBodyItem, tableBodyItemCell } from './styles.css'
import { Controller, useFormContext } from 'react-hook-form'
import { ScenarioWithFreshmenResponse } from '@/entities/onboarding/types/freshman'
import { ApplyFreshmanCheckBox } from '@/widgets/onboarding/ui/ApplyScenarioForFreshmanModal/ApplyFreshmanCheckBox'

interface FreshManTableItemProps
  extends Omit<
    ScenarioWithFreshmenResponse,
    'created_at' | 'updated_at' | 'enterprise_id' | 'posting_id' | 'pass_date' | 'employment_date'
  > {
  index: number
  onCheck: (index: number) => void
}

export const ApplyFreshManTableItem = ({
  index,
  name,
  posting_title,
  email,
  phone,
  onCheck,
}: FreshManTableItemProps) => {
  const { control, getValues } = useFormContext()

  return (
    <div className={tableBodyItem}>
      <Controller
        name={`freshmen[${index}]`}
        control={control}
        render={() => {
          const value = getValues(`freshmen[${index}]`)
          return (
            <ApplyFreshmanCheckBox
              index={index}
              is_checked={value.is_checked}
              is_disabled={value.is_disabled}
              onCheck={onCheck}
            />
          )
        }}
      />
      <span className={tableBodyItemCell}>{name} </span>
      <span className={tableBodyItemCell}>{!posting_title ? '-' : posting_title}</span>
      <span className={tableBodyItemCell}>{phone}</span>
      <span className={tableBodyItemCell}>{email}</span>
    </div>
  )
}
