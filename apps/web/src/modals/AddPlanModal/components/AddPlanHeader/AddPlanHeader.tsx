import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'

interface AddPlanHeaderProps {
  onClose: () => void
}

const AddPlanHeader = ({ onClose }: AddPlanHeaderProps) => {
  const $t = useTranslations('common')

  return (
    <Styles.Header>
      <Styles.Title>
        {$t('all_in_one_plan')}
        {$t('subscription')}
      </Styles.Title>
      <IconButton
        icon="icon/cancle-line1"
        onClick={onClose}
        ariaLabel={$t('common.close')}
        size="sm"
        color="neutralGray600"
      />
    </Styles.Header>
  )
}
export default AddPlanHeader
