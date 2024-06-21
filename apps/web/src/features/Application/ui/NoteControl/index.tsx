import { getUpdateKey } from '@/features/Application/lib'
import { Switch, TextInput } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { NOTE_MAX_LENGTH } from '../../constants'
import * as Styles from './styles'
import React from 'react'

interface NoteControlProps {
  selectedItem: string
  onSwitchChange: (key: string, value: boolean) => void
  onInputChange: (key: string, value: string) => void
}

export const NoteControl = ({ selectedItem, onSwitchChange, onInputChange }: NoteControlProps) => {
  const { watch, setValue } = useFormContext()

  const hasNote = watch(selectedItem)?.hasOwnProperty('is_note')
  const isNote = watch(`${selectedItem}`)?.is_note

  const handleSwitchChange = (value: boolean) => {
    onSwitchChange(getUpdateKey(selectedItem, 'is_note'), value)

    if (!value) {
      setValue(`${selectedItem}.note`, '')
    }
  }

  const handleInputChange = (value: string) => {
    if (selectedItem.includes('documents') || selectedItem.includes('questions')) {
      const itemType = selectedItem.includes('documents') ? 'document' : 'question'
      return onInputChange(`${itemType}_note`, value)
    }
    onInputChange(`note`, value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  if (!hasNote) return null

  return (
    <Styles.NoteOption>
      <Styles.NoteContents>
        <Styles.Name>유의사항</Styles.Name>
        <Switch
          size="xs"
          isChecked={watch(`${selectedItem}.is_note`)}
          onChange={handleSwitchChange}
        />
      </Styles.NoteContents>
      {isNote && (
        <Styles.Input>
          <TextInput
            placeholder="유의사항을 입력해주세요."
            value={watch(`${selectedItem}.note`) || ''}
            onChange={(event) => handleInputChange(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
            maxLength={NOTE_MAX_LENGTH}
          />
        </Styles.Input>
      )}
    </Styles.NoteOption>
  )
}
