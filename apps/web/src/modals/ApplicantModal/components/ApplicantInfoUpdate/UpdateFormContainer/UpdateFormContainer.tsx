'use client'

import * as Styles from './styles'
import { getApplicantInputDirection } from '@/modals/ApplicantModal/ApplicantModal.factory'
import { RegisterOptions, useForm } from 'react-hook-form'
import UpdateFormInput from '@/modals/ApplicantModal/components/ApplicantInfoUpdate/UpdateFormInput'
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ApplicantInfoUpdateFormProps } from '@/modals/ApplicantModal/ApplicantModal.interface'
import { Toast } from '@/shared/ui'

interface UpdateFormContainerProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (form: ApplicantInfoUpdateFormProps) => void
  disabled?: boolean
  element: HTMLElement
  containerRef: React.RefObject<HTMLDivElement>
  label: string
  value: string
  name: string
  options?: RegisterOptions
  maxLength?: number
}

const UpdateFormContainer = ({
  isOpen,
  onClose,
  onSubmit,
  disabled,
  element,
  containerRef,
  label,
  value,
  name,
  options,
  maxLength,
}: UpdateFormContainerProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const modalRef = useRef<HTMLDivElement>(null)
  const position = getApplicantInputDirection(containerRef.current)

  const handleClickBackground = (event: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current?.contains(event.target as Node)) return
    onClose()
    reset()
  }

  const handleError = () => {
    if (!errors[name]) return
    const errorMessage = errors[name]?.message as string
    Toast.error(errorMessage)
  }

  useEffect(() => {
    handleError()
  }, [errors[name]])

  if (!isOpen || disabled) return null

  const updateFormContainer = (
    <Styles.Background onClick={handleClickBackground}>
      <Styles.Container ref={modalRef} $top={position.top} $left={position.left}>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <UpdateFormInput
            defaultValue={value}
            register={register(name, {
              required: true,
              ...options,
            })}
            label={label}
            maxLength={maxLength}
          />
        </Styles.Form>
      </Styles.Container>
    </Styles.Background>
  )

  return createPortal(updateFormContainer, element)
}

export default UpdateFormContainer
