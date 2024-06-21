import { Textarea } from '@/shared/ui'
import { count, countWrapper, textareaWrapper } from './styles.css'
import { useFormContext } from 'react-hook-form'

interface SurveyEssayOptionProps {
  index: number
}

export const SurveyEssayOption = ({ index }: SurveyEssayOptionProps) => {
  const { watch, control } = useFormContext()

  if (watch(`questions[${index}].type`) !== 'essay') return null

  return (
    <div className={textareaWrapper}>
      <Textarea placeholder="답변을 입력해주세요." maxLength={1000} disabled />
      <div className={countWrapper}>
        <span className={count}>0</span> / 1000자
      </div>
    </div>
  )
}
