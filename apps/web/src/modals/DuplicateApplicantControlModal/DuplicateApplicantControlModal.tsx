'use client'

import { useEffect } from 'react'
import { MODAL } from '@/shared/constants'
import DuplicateApplicantControlHeader from './components/DuplicateApplicantControlHeader'
import DuplicateApplicantControlList from './components/DuplicateApplicantControlList'
import { IconButton, ModalLayout } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import * as Styles from './styles'

interface DuplicateApplicantControlModal {
  id: number
  title: string
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
  handleClosedToggle: (status: boolean) => void
}

const DuplicateApplicantControlModal = ({
  id,
  title,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
  handleClosedToggle,
}: DuplicateApplicantControlModal) => {
  const { closeModal } = useModal()

  const handleModalClose = () => closeModal(MODAL.DUPLICATE_APPLICANT_CONTROL)

  useEffect(() => {
    handleClosedToggle(false)
  }, [])

  return (
    <ModalLayout onClick={handleModalClose} isDimmed>
      <Styles.Wrapper>
        <IconButton icon="icon/cancle-line1" onClick={handleModalClose} size="lg" />
        <DuplicateApplicantControlHeader title={title} />
        <DuplicateApplicantControlList
          id={id}
          isReApplyBlocked={!isReApplyBlocked}
          isMultipleApplyBlocked={!isMultipleApplyBlocked}
          isDuplicateApplyBlocked={!isDuplicateApplyBlocked}
        />
      </Styles.Wrapper>
    </ModalLayout>
  )
}

export default DuplicateApplicantControlModal
