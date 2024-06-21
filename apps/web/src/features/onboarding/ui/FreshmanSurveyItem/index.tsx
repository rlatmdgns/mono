import { useFormContext } from 'react-hook-form'
import { FreshmanSurveyOptions } from '@/features/onboarding/ui'
import { item, questionInput } from '@/features/onboarding/ui/SurveyList/style.css'

interface SurveyItemProps {
  index: number
  field: any
}

export const FreshmanSurveyItem = ({ index, field }: SurveyItemProps) => {
  const { register } = useFormContext()
  const type = field.type

  return (
    <li className={item}>
      <input
        className={questionInput}
        placeholder="질문을 입력해주세요 (최대 100자)"
        maxLength={100}
        {...register(`questions[${index}].title`)}
      />
      <FreshmanSurveyOptions index={index} type={type} />
    </li>
  )
}
