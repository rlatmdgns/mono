import { Select } from '@/shared/ui'
import { SURVEY_TYPES } from '../../constants'
import { selectWrapper } from './styles.css'
import { Controller, useFormContext } from 'react-hook-form'

interface SurveyTypeSelectProps {
  index: number
  type: string
}

export const SurveyTypeSelect = ({ index, type }: SurveyTypeSelectProps) => {
  const { control } = useFormContext()

  return (
    <div className={selectWrapper}>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              options={SURVEY_TYPES}
              placeholder="질문 유형 선택"
              defaultValue={type}
              value={SURVEY_TYPES.find((surveyType) => surveyType.value === value)}
              onChange={(event) => {
                return onChange(event)
              }}
            />
          )
        }}
        name={`questions[${index}].type`}
      />
    </div>
  )
}
