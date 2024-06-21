'use client'

import * as Styles from './styles'
import React, { useRef, useState } from 'react'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import UpdateFormContainer from '@/modals/ApplicantModal/components/ApplicantInfoUpdate/UpdateFormContainer'
import { getUpdateApplicantForm } from '@/modals/ApplicantModal/ApplicantModal.factory'
import useUpdateApplicant from '@/modals/ApplicantModal/hooks/useUpdateApplicant'
import { useRecoilValue } from 'recoil'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import { ApplicantInfoUpdateFormProps } from '@/modals/ApplicantModal/ApplicantModal.interface'
import { RegisterOptions } from 'react-hook-form'

interface ApplicantInfoUpdateProps {
  button: React.ReactNode
  disabled?: boolean
  label: string
  name: string
  value: string
  options?: RegisterOptions
  applicant?: ApplicantResponse
  maxLength?: number
}

const ApplicantInfoUpdate = ({
  button,
  disabled = false,
  label,
  value,
  name,
  applicant,
  options,
  maxLength,
}: ApplicantInfoUpdateProps) => {
  const element = document.getElementById('tooltip') as HTMLElement
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  const applicantId = useRecoilValue(applicantIdAtom)
  const { applicantMutate } = useUpdateApplicant(applicantId)

  const handleToggle = () => setIsOpen(!isOpen)

  const handleClose = () => setIsOpen(false)

  const handleSubmitForm = (form: ApplicantInfoUpdateFormProps) => {
    if (!applicant) return
    const newForm = getUpdateApplicantForm(applicant, form)
    applicantMutate(newForm)
    handleClose()
  }

  return (
    <Styles.Wrapper ref={containerRef}>
      <Styles.ButtonBox disabled={disabled} type="button" onClick={handleToggle}>
        {button}
      </Styles.ButtonBox>
      <UpdateFormContainer
        isOpen={isOpen}
        onClose={handleClose}
        onSubmit={handleSubmitForm}
        disabled={disabled}
        element={element}
        containerRef={containerRef}
        label={label}
        value={value}
        name={name}
        options={options}
        maxLength={maxLength}
      />
    </Styles.Wrapper>
  )
}

export default ApplicantInfoUpdate
