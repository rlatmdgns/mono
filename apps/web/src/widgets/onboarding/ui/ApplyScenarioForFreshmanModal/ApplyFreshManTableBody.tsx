import { ApplyFreshManTableItem } from './ApplyFreshManTableItem'
import { ScenarioWithFreshmenResponse } from '@/entities/onboarding/types'
import { useFormContext } from 'react-hook-form'

type ApplyFreshManTableBodyProps = {
  onCheck: (index: number) => void
}

export const ApplyFreshManTableBody = ({ onCheck }: ApplyFreshManTableBodyProps) => {
  const { watch } = useFormContext()
  const freshmen = watch('freshmen')

  return (
    <div>
      {freshmen?.map((freshman: ScenarioWithFreshmenResponse, index: number) => (
        <ApplyFreshManTableItem
          key={`freshman_item_${freshman.id}`}
          index={index}
          name={freshman.name}
          type={freshman.type}
          is_checked={freshman.is_checked}
          is_disabled={freshman.is_disabled}
          id={freshman.id}
          email={freshman.email}
          phone={freshman.phone}
          posting_title={freshman.posting_title}
          onCheck={onCheck}
        />
      ))}
    </div>
  )
}
