import { Switch, Textarea, Toast } from '@/shared/ui'
import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { QUESTION_NAME_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'

interface PreQuestionControlProps {
  selectedItem: string
  onInputChange: (key: string, value: string) => void
}

export const PreQuestionControl = ({ selectedItem, onInputChange }: PreQuestionControlProps) => {
  const { watch } = useFormContext()

  const hasPreQuestion =
    watch(selectedItem)?.hasOwnProperty('title') && selectedItem.includes('questions')

  const handleNameChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const valueLines = event.target.value.split('\n').length
    if (valueLines > 3) return
    onInputChange(`question_title`, event.target.value)
  }

  const handleSwitchChange = () => {
    return Toast.warning('변경 불가능한 항목입니다.')
  }

  if (!hasPreQuestion) return null

  return (
    <Styles.Option>
      <Styles.Content>
        <Styles.Name>
          질문 내용 <Styles.Mark>*</Styles.Mark>
        </Styles.Name>
        <Styles.SwitchWrapper $disabled>
          <Switch size="xs" isChecked={true} onChange={handleSwitchChange} />
        </Styles.SwitchWrapper>
      </Styles.Content>
      <Textarea
        placeholder="질문 내용을 입력해주세요."
        value={watch(`${selectedItem}.title`)}
        onChange={(event) => handleNameChange(event)}
        maxLength={QUESTION_NAME_MAX_LENGTH}
      />
    </Styles.Option>
  )
}
