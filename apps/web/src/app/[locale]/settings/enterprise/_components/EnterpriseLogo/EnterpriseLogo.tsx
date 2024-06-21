'use client'

import * as Styles from '@/app/[locale]/settings/enterprise/_container/styles'

import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'

import Skeleton from 'react-loading-skeleton'

import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

interface EnterpriseLogoProps {
  logo: string
  isLogoModifyStatus: boolean
  handleLogoModify: () => void
  handleChangeLogo: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleRemoveLogo: () => void
}

export const EnterpriseLogo = ({
  logo,
  isLogoModifyStatus,
  handleLogoModify,
  handleChangeLogo,
  handleRemoveLogo,
}: EnterpriseLogoProps) => {
  const $t = useTranslations()

  return (
    <>
      {!logo && (
        <Styles.NoImageLabel>
          <Styles.NoImageWrap>
            <Styles.NoImageText>
              <Icon icon="icon/company-solid" color="neutralGray400" size={24} />
              {$t('setting.enterprise.enterprise_logo_description_line01')}
              <Styles.LineBreak />
              {$t('setting.enterprise.enterprise_logo_description_line02')}
              <Styles.LineBreak />
              {$t('setting.enterprise.enterprise_logo_description_line03')}
              <Styles.ImageFileUpload onChange={(event) => handleChangeLogo(event)} />
            </Styles.NoImageText>
          </Styles.NoImageWrap>
        </Styles.NoImageLabel>
      )}
      {logo && (
        <Styles.ImageWrap>
          {!logo && <Skeleton width={160} height={160} />}
          <Styles.ImageBox>
            {logo && <Image src={logo} alt={''} width={160} height={160} />}
          </Styles.ImageBox>
          <Dropdown
            button={
              <IconButton
                icon="icon/more-solid"
                size="sm"
                state="primary"
                onClick={handleLogoModify}
              />
            }
            isParentStatusClosed={isLogoModifyStatus}
          >
            <Dropdown.Item>
              <Styles.ModifyImageLabel>
                <Icon icon="icon/edit-solid" color="neutralGray500" />
                {$t('common.modify')}
                <Styles.ImageFileUpload onChange={(event) => handleChangeLogo(event)} />
              </Styles.ModifyImageLabel>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleRemoveLogo} isWarning>
              <Icon icon="icon/delete-solid" color="red500" />
              {$t('common.delete')}
            </Dropdown.Item>
          </Dropdown>
        </Styles.ImageWrap>
      )}
    </>
  )
}

export default EnterpriseLogo
