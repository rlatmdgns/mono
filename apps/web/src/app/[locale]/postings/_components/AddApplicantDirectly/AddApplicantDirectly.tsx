import React from 'react'
import * as Styles from './styles'
import { Button } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { useTranslations } from 'next-intl'

interface AddApplicantDirectlyProps {
  isDocumentSubmission: boolean
}

const AddApplicantDirectly = ({ isDocumentSubmission }: AddApplicantDirectlyProps) => {
  const { openModal } = useModal()
  const $t = useTranslations('announcement_detail.features')

  const handleClick = () => {
    openModal(MODAL.ADD_APPLICANT)
  }

  if (!isDocumentSubmission) {
    return null
  }
  return (
    <Styles.Box>
      <Button
        iconSource="icon/add-member-solid"
        size="sm"
        text={$t('add_direct_applicant')}
        state="primary"
        style="line"
        onClick={handleClick}
      />
    </Styles.Box>
  )
}

export default withAuth(AddApplicantDirectly)
