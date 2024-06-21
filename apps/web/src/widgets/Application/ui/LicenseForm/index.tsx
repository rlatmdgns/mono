'use client'

import { LICENSE_DEFAULT_VALUE } from '@/features/Application/constants'
import { LicenseInputList, LicenseRadio } from '@/features/Application/ui'
import { ApplicantFormLabel, ApplicantNote } from '@/shared/ui'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import { ApplicantRequest } from '@/entities/Application/types/ApplicantRequest'

interface LicenseFormProps {
  controllerName: string
  isCanView: boolean
  isRequired: boolean
  isNote: boolean
  note: string
  isSelected: boolean
  onContentChange: (key: string, value: string) => void
}

const LicenseForm = ({
  isCanView,
  isRequired,
  isNote,
  note,
  isSelected,
  onContentChange,
}: LicenseFormProps) => {
  const { control } = useFormContext<ApplicantRequest>()

  const {
    append,
    fields: licenses,
    update,
    remove,
    replace,
  } = useFieldArray<ApplicantRequest, 'licenses', 'id'>({
    control,
    name: `licenses`,
  })

  const hasLicense = !!licenses[0]?.is_licence
  const emptyData = { is_licence: false }

  const onAppend = () => {
    append(LICENSE_DEFAULT_VALUE)
  }

  const onRadioChange = (state: boolean) => {
    if (!state) return replace([emptyData])
    replace([LICENSE_DEFAULT_VALUE])
  }

  const onNoteChange = (value: string) => {
    onContentChange('note', value)
  }

  useEffect(() => {
    replace([emptyData])
  }, [])

  return (
    <Styles.Wrapper $isSelected={isSelected}>
      <Styles.Inner>
        <ApplicantFormLabel
          title="자격증 또는 면허"
          isRequired={isRequired}
          isCanView={isCanView}
        />
        <ApplicantNote isNote={isNote} note={note} onInputChange={onNoteChange} />
        <LicenseRadio hasLicense={hasLicense} onChange={onRadioChange} />
        <LicenseInputList
          hasLicense={hasLicense}
          licenses={licenses}
          onAppend={onAppend}
          update={update}
          remove={remove}
        />
      </Styles.Inner>
    </Styles.Wrapper>
  )
}

export default LicenseForm
