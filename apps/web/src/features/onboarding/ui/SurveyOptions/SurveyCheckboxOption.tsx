import { Button } from '@repo/ui'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { list, optionInput, optionInputWrapper, optionList } from './styles.css'

interface SurveyCheckboxOptionProps {
  index: number
}

export const SurveyCheckboxOption = ({ index }: SurveyCheckboxOptionProps) => {
  const { register, watch, control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions[${index}].items`,
  })

  const onAppendList = () => {
    append({
      title: '',
    })
  }

  const onOptionDelete = () => {
    remove(index)
  }

  if (watch(`questions[${index}].type`) !== 'multi_choice') return null

  return (
    <>
      <ul className={list}>
        {fields.map((field: any, optionIndex: number) => {
          return (
            <li key={`checkbox_${optionIndex}`} className={optionList}>
              <div
                className={optionInputWrapper({
                  type: 'multi_choice',
                })}
              >
                <input
                  type={'text'}
                  placeholder={'옵션 내용을 입력해주세요.'}
                  {...register(`questions[${index}].items[${optionIndex}].title`)}
                  className={optionInput}
                  spellCheck={false}
                />
              </div>
              <Button
                state={'secondary'}
                style={'mono'}
                leadingIcon={'icon/cancle-line2'}
                leadingIconColor="neutralGray400"
                onClick={() => onOptionDelete()}
              />
            </li>
          )
        })}
      </ul>
      <Button text="옵션추가" style="mono" size="sm" onClick={onAppendList} />
    </>
  )
}
