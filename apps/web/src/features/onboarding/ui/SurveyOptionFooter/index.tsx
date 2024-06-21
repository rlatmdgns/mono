import { switchWrapper, wrapper } from '@/features/onboarding/ui/SurveyOptionFooter/styles.css'
import { Button, FileInput, Switch } from '@repo/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { Dropdown, IconButton } from '@/shared/ui'
import React, { useState } from 'react'
import temporaryFile from '@/services/temporaryFile'

interface SurveyOptionFooterProps {
  index: number
  onMove: (from: number, to: number) => void
  onRemove: (index: number) => void
  onCopy: (index: number) => void
}

export const SurveyOptionFooter = ({
  index,
  onMove,
  onRemove,
  onCopy,
}: SurveyOptionFooterProps) => {
  const { control, watch, getValues, setValue } = useFormContext()
  const [file, setFile] = useState(null)

  const handleUpper = (from: number) => {
    if (from === 0) return

    const toIndex = from - 1
    onMove(from, toIndex)
  }

  const handleLower = (from: number) => {
    if (from === getValues().questions.length - 1) return

    const toIndex = from + 1
    onMove(from, toIndex)
  }

  const handleRemove = (index: number) => {
    onRemove(index)
  }

  const handleCopy = (index: number) => {
    onCopy(index)
  }

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const formData = new FormData()
    formData.append('file', event.target.files[0])

    const result = await temporaryFile(formData)
    setValue(`questions[${index}].file`, event.target.files, { shouldDirty: true })
  }

  const handleRemoveFile = () => {
    setValue(`questions[${index}].file`, null, { shouldValidate: true })
  }

  return (
    <div className={wrapper}>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <div className={switchWrapper}>
            필수
            <Switch size={'xs'} isChecked={value} onChange={onChange} />
          </div>
        )}
        name={`questions[${index}].isRequired`}
      />
      <FileInput
        files={watch(`questions[${index}].file`)}
        placeholder={'최대 15MB'}
        onChange={handleFileUpload}
        onRemove={handleRemoveFile}
        accept="*"
      />
      <Dropdown button={<IconButton icon="icon/more-solid" size="xs" />} isNotPortal>
        <Dropdown.Item>
          <Button text={'위로 이동'} onClick={() => handleUpper(index)} />
        </Dropdown.Item>
        <Dropdown.Item>
          <Button text={'아래로 이동'} onClick={() => handleLower(index)} />
        </Dropdown.Item>
        <Dropdown.Item>
          <Button text={'복사'} onClick={() => handleCopy(index)} />
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <Button text={'삭제'} onClick={() => handleRemove(index)} />
        </Dropdown.Item>
      </Dropdown>
    </div>
  )
}
