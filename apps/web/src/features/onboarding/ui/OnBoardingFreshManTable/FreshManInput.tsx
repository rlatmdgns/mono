import { contentBox, text } from './styles.css'
import { Button } from '@repo/ui'
import { useEffect, useState } from 'react'
import { Toast } from '@/shared/ui'
import { FreshManDatePicker } from './FreshManDatePicker'
import { FreshManTextInput } from './FreshManTextInput'

interface FreshManInputProps {
  defaultValue: string
  id: number
  name: string
  onChange: (name: string, value: string) => void
  hasScenarios?: boolean
  currentInput: {
    freshmanId: number
    targetName: string
  }
  onCurrentTarget: (freshmanId: number, targetName: string) => void
  onCurrentTargetReset: () => void
}

export const FreshManInput = ({
  hasScenarios,
  defaultValue,
  id,
  name,
  onChange,
  currentInput,
  onCurrentTarget,
  onCurrentTargetReset,
}: FreshManInputProps) => {
  const [value, setValue] = useState<string>(defaultValue)
  const [isEdit, setIsEdit] = useState(false)

  const isDate = name === 'pass_date' || name === 'employment_date'
  const isChanged = value !== defaultValue

  const handleEdit = () => {
    onCurrentTarget(id, name)

    if (name === 'employment_date' && hasScenarios) {
      return Toast.error('온보딩 진행중에 입사일을 변경할 수 없습니다.')
    }
    setIsEdit(true)
  }
  const handleChange = () => {
    onChange(name, value)
    setIsEdit(false)
  }
  const handleDateEditClose = () => setIsEdit(false)
  const handleDateChange = (date?: Date | null) => {
    setValue(date?.toString() || '')
    handleChange()
  }
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    if (currentInput.freshmanId !== id || currentInput.targetName !== name) {
      setIsEdit(false)
    }
  }, [id, currentInput])

  if (isEdit) {
    return (
      <>
        <FreshManDatePicker
          isDate={isDate}
          defaultValue={defaultValue}
          onDateChange={handleDateChange}
          onDateEditClose={handleDateEditClose}
        />
        <FreshManTextInput
          defaultValue={defaultValue}
          isChanged={isChanged}
          isDate={isDate}
          onChange={handleTextChange}
          handleChange={handleChange}
        />
      </>
    )
  }
  return (
    <div className={contentBox}>
      <span className={text} onClick={onCurrentTargetReset}>
        {defaultValue}
      </span>
      <Button
        onClick={handleEdit}
        leadingIcon="icon/edit-line"
        state="secondary"
        style="mono"
        size="sm"
      />
    </div>
  )
}
