import { SurveyOptionFooter } from '@/features/onboarding'
import { item, questionInput } from '@/features/onboarding/ui/SurveyList/style.css'
import { useFormContext } from 'react-hook-form'
import { SurveyOptions } from '../SurveyOptions'
import { SurveyTypeSelect } from '../SurveyTypeSelect'

interface SurveyItemProps {
  index: number
  field: any
  onMove: (from: number, to: number) => void
  onRemove: (index: number) => void
  onCopy: (index: number) => void
}

export const SurveyItem = ({ index, field, onMove, onRemove, onCopy }: SurveyItemProps) => {
  const { register, getValues, setValue, watch } = useFormContext()
  const type = field.type

  return (
    <li className={item}>
      <SurveyTypeSelect index={index} type={type} />
      <input
        className={questionInput}
        placeholder="질문을 입력해주세요 (최대 100자)"
        maxLength={100}
        value={watch(`questions[${index}].title`)}
        {...register(`questions[${index}].title`)}
      />
      <SurveyOptions index={index} type={type} />
      <SurveyOptionFooter index={index} onMove={onMove} onRemove={onRemove} onCopy={onCopy} />
    </li>
  )
}
