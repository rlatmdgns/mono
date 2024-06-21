'use client'

import { Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import React from 'react'
import { useTranslations } from 'next-intl'

interface EnterpriseAddressProps {
  enterprise_address: string
  enterprise_detail_address: string
  handleAddressAdd: () => void
}

export const EnterpriseAddress = ({
  enterprise_address,
  enterprise_detail_address,
  handleAddressAdd,
}: EnterpriseAddressProps) => {
  const $t = useTranslations('setting.enterprise')

  return (
    <Styles.Input type="button" onClick={handleAddressAdd}>
      {!enterprise_address && (
        <Styles.NoText>
          {$t('enterprise_work_space_placeholder')}{' '}
          <Icon icon="icon/map-solid" color="neutralGray400" />
        </Styles.NoText>
      )}
      <Tooltip
        text={`${enterprise_address} ${enterprise_detail_address}`}
        direction={'right'}
        isOverflow
      >
        {enterprise_address && enterprise_address}
        {enterprise_detail_address && ` ${enterprise_detail_address}`}
      </Tooltip>
    </Styles.Input>
  )
}

export default EnterpriseAddress
