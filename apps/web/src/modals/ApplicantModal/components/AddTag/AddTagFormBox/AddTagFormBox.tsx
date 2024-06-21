'use client'

import * as Styles from './styles'
import React, { useRef } from 'react'
import { createPortal } from 'react-dom'
import { FieldValues } from 'react-hook-form'
import { getApplicantInputDirection } from '@/modals/ApplicantModal/ApplicantModal.factory'
import AddTagForm from '@/modals/ApplicantModal/components/AddTag/AddTagForm'

interface AddTagFormBoxProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (form: FieldValues) => void
  element: HTMLElement
  containerRef: React.RefObject<HTMLDivElement>
  tags?: string[]
  applicantTags?: string[]
}

const AddTagFormBox = ({
  isOpen,
  onClose,
  onSubmit,
  element,
  containerRef,
  tags,
  applicantTags,
}: AddTagFormBoxProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const position = getApplicantInputDirection(containerRef.current, 'right')

  const handleOutSideClick = (event: React.MouseEvent<HTMLElement>) => {
    if (contentRef.current?.contains(event.target as Node)) return
    onClose()
  }

  if (!isOpen) return null

  const addTagForm = (
    <Styles.Background onClick={handleOutSideClick}>
      <Styles.Content ref={contentRef} $top={position.top} $left={position.left}>
        <AddTagForm onSubmit={onSubmit} tags={tags} applicantTags={applicantTags} />
      </Styles.Content>
    </Styles.Background>
  )
  return createPortal(addTagForm, element)
}

export default AddTagFormBox
