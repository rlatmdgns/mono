'use client'

import * as Styles from './styles'
import { Dropdown, Switch } from '@/shared/ui'
import useUpdateApplicantFilePublic from '@/modals/ApplicantModal/hooks/useUpdateApplicantFilePublic'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface UpdateFilePublicButtonProps {
  id: number
  isApplicantPublic?: boolean
  isFilePublic: boolean
  onToggleClosed: (status: boolean) => void
}

const UpdateFilePublicButton = ({
  id,
  isApplicantPublic,
  isFilePublic,
  onToggleClosed,
}: UpdateFilePublicButtonProps) => {
  const $t = useTranslations('common')
  const [isPublic, setIsPublic] = useState(isFilePublic)
  const { updateApplicantFilePublicMutate } = useUpdateApplicantFilePublic(`${id}`)
  const handleUpdateApplicantFilePublic = (checked: boolean) => {
    updateApplicantFilePublicMutate({
      is_public: !checked,
    })
    setIsPublic(!checked)
    onToggleClosed(false)
  }

  return (
    <Dropdown.Item size="lg">
      <Styles.Wrapper data-included-input={true}>
        <Styles.Content>
          <Icon icon="icon/lock-line" color="neutralGray500" />
          {$t('lock_document')}
        </Styles.Content>
        <Switch
          size="xs"
          isDisabled={!isApplicantPublic}
          isChecked={!isPublic}
          onChange={(checked) => handleUpdateApplicantFilePublic(checked)}
        />
      </Styles.Wrapper>
    </Dropdown.Item>
  )
}

export default UpdateFilePublicButton
