'use client'

import { ActivityInputList, ActivityRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface ActivityFormProps {
  isRequired: boolean
  isCanView: boolean
  isSelected: boolean
  isNote: boolean
  note: string
  index: number
  onContentChange: (key: string, value: string) => void
}

const ActivityForm = ({
  note,
  isNote,
  onContentChange,
  isRequired,
  isCanView,
  isSelected,
  index,
}: ActivityFormProps) => {
  const { control } = useFormContext<ApplicantRequest>()
  const {
    append,
    fields: activities,
    update,
    remove,
    replace,
  } = useFieldArray<ApplicantRequest, 'activities', 'id'>({
    control,
    name: `activities`,
  })

  const hasActivity = !!activities[0]?.is_activity

  const emptyData = { is_activity: false }
  const formData = {
    is_activity: true,
    type: '',
    name: '',
    status: '활동중',
    start_date: null,
    end_date: null,
    description: '',
  }

  const onAppend = () => {
    append(formData)
  }

  const onRadioChange = (state: boolean) => {
    if (!state) return replace([emptyData])
    replace([formData])
  }

  const onInputChange = (value: string) => {
    onContentChange('note', value)
  }

  useEffect(() => {
    replace([emptyData])
  }, [])

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel title={'대외 활동'} isRequired={isRequired} isCanView={isCanView} />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onInputChange} />
        <ActivityRadio hasActivity={hasActivity} onChange={onRadioChange} />
        <ActivityInputList
          index={index}
          hasActivity={hasActivity}
          activities={activities}
          onAppend={onAppend}
          update={update}
          remove={remove}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default ActivityForm
