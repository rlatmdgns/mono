import * as Styles from './styles'
import React, { useRef, useState } from 'react'
import AddTagFormBox from '@/modals/ApplicantModal/components/AddTag/AddTagFormBox'
import { FieldValues } from 'react-hook-form'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'
import { useRecoilValue } from 'recoil'
import useUpdateApplicantTag from '@/modals/ApplicantModal/hooks/useUpdateApplicantTag'
import { Button } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface AddTagBoxProps {
  applicantTags?: string[]
  tags?: string[]
  isEvaluator?: boolean
}

const AddTag = ({ applicantTags, tags, isEvaluator }: AddTagBoxProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const { updateApplicantTagMutate } = useUpdateApplicantTag(applicantId)

  const element = document.getElementById('tooltip') as HTMLElement
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const $t = useTranslations()
  const handleToggle = () => setIsOpen(!isOpen)

  const handleClose = () => setIsOpen(false)

  const handleSubmitForm = (form: FieldValues) => {
    const { tag } = form
    const currentTags = applicantTags || []
    updateApplicantTagMutate({
      applicant_tag: [...currentTags, tag],
    })
    handleClose()
  }

  if (isEvaluator) return null
  return (
    <Styles.Wrapper ref={containerRef}>
      <Button
        iconSource="icon/add-solid"
        text={$t('common.add')}
        onClick={handleToggle}
        state="standard"
        size="xs"
      />
      <AddTagFormBox
        element={element}
        containerRef={containerRef}
        isOpen={isOpen}
        tags={tags}
        applicantTags={applicantTags}
        onClose={handleClose}
        onSubmit={handleSubmitForm}
      />
    </Styles.Wrapper>
  )
}

export default AddTag
