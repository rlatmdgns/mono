import { Button } from '@repo/ui'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { list, optionInput, optionInputWrapper, optionList } from './styles.css'

interface SurveyRadioOptionListProps {
  index: number
}

export const SurveyRadioOption = ({ index }: SurveyRadioOptionListProps) => {
  const { register, watch, getValues, control } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions[${index}].items`,
  })

  const onAppendList = () => {
    append({
      title: '',
    })
  }

  const onOptionDelete = (index: number) => {
    remove(index)
  }

  if (watch(`questions[${index}].type`) !== 'choice') return null

  return (
    <>
      <ul className={list}>
        {fields.map((field: any, optionIndex: number) => {
          const optionTitle = `questions[${index}].items[${optionIndex}].title`
          return (
            <li key={`checkbox_${optionIndex}`} className={optionList}>
              <div
                className={optionInputWrapper({
                  type: 'choice',
                })}
              >
                <input
                  type={'text'}
                  placeholder={'옵션 내용을 입력해주세요.'}
                  value={watch(optionTitle)}
                  {...register(optionTitle)}
                  className={optionInput}
                  spellCheck={false}
                />
              </div>
              <Button
                state={'secondary'}
                style={'mono'}
                leadingIcon={'icon/cancle-line2'}
                leadingIconColor="neutralGray400"
                onClick={() => onOptionDelete(optionIndex)}
              />
            </li>
          )
        })}
      </ul>
      <Button text="옵션추가" style="mono" size="sm" onClick={onAppendList} />
    </>
  )
}
