import { SurveyItem } from '@/features/onboarding/ui/SurveyList/SurveyItem'
import { Button } from '@repo/ui'
import { addEvaluationWrapper, bodyWrapper, list } from './style.css'

interface SurveyBodyProps {
  survives: any[]
  onSurveyAdd: () => void
  onMove: (from: number, to: number) => void
  onRemove: (index: number) => void
  onCopy: (index: number) => void
}

export const SurveyList = ({
  survives,
  onSurveyAdd,
  onMove,
  onRemove,
  onCopy,
}: SurveyBodyProps) => {
  return (
    <div className={bodyWrapper}>
      {survives.map((field, index) => {
        return (
          <>
            <ul className={list} key={`survey_list_${index}`}>
              <SurveyItem
                index={index}
                field={field}
                onMove={onMove}
                onRemove={onRemove}
                onCopy={onCopy}
              />
            </ul>
          </>
        )
      })}
      <div className={addEvaluationWrapper}>
        <Button
          text="평가 항목 추가"
          style="mono"
          size="xl"
          width="100%"
          leadingIcon="icon/plus-line"
          onClick={onSurveyAdd}
        />
      </div>
    </div>
  )
}
