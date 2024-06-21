import { CheckBox } from '@repo/ui'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import { list, optionInputWrapper, optionList } from './styles.css'

interface SurveyCheckboxOptionProps {
  index: number
  file?: string
}

export const SurveyCheckboxOption = ({ index, file }: SurveyCheckboxOptionProps) => {
  const { register, watch, control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions[${index}].items`,
  })

  if (watch(`questions[${index}].type`).value !== 'multi_choice') return null

  return (
    <>
      <ul className={list}>
        {fields.map((field: any, optionIndex: number) => {
          return (
            <li key={`checkbox_${optionIndex}`} className={optionList}>
              <label
                className={optionInputWrapper({
                  type: 'multi_choice',
                })}
              >
                <Controller
                  render={({ field: { value, onChange } }) => (
                    <CheckBox isChecked={value} onChange={() => onChange} />
                  )}
                  name={`questions[${index}].items[${optionIndex}].isChecked`}
                />
              </label>
            </li>
          )
        })}
      </ul>
      {file && '파일명 다운받기'}
    </>
  )
}
