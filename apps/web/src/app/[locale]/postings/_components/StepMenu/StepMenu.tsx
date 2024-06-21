import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { PostingStep } from '@/interface/applicants'
import StepMenuGroup from '@/app/[locale]/postings/_components/StepMenu/StepMenuGroup'

import React from 'react'
import { useTranslations } from 'next-intl'

interface StepMenuProps {
  postingId: string
  step: PostingStep
  isDocumentSubmission: boolean
  isFinalPass: boolean
}

const StepMenu = ({ postingId, step, isDocumentSubmission, isFinalPass }: StepMenuProps) => {
  const { openModal } = useModal()
  const $t = useTranslations('announcement_detail.features')
  const handleEvaluationSettingModalOpen = () => {
    openModal(MODAL.EVALUATION_SETTING, { step: step })
  }

  return (
    <Dropdown button={<IconButton size="md" icon="icon/more-solid" />} isAutoClose>
      <Dropdown.Item onClick={handleEvaluationSettingModalOpen}>
        <Icon icon="icon/setting-solid" color="neutralGray500" size={18} />
        {$t('evaluation_setting')}
      </Dropdown.Item>
      <StepMenuGroup
        postingId={postingId}
        step={step}
        isDocumentSubmission={isDocumentSubmission}
        isFinalPass={isFinalPass}
      />
    </Dropdown>
  )
}

export default withAuth(StepMenu)
