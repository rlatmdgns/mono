'use client'

import * as Styles from '@/app/[locale]/settings/enterprise/_container/styles'

import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'

import { MAX_IMAGE_SIZE } from '@/app/[locale]/settings/enterprise/_container/EnterpriseContainer.constant'

import { EnterpriseBackground } from '@/interface/enterpriseInformation'

import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

interface EnterpriseSignatureImageProps {
  enterpriseSignatureImage: EnterpriseBackground[]
  isSignatureModifyStatus: boolean[]
  handleChangeEnterpriseImage: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void
  handleSignatureDim: (index: number, status: boolean) => void
  handleSignatureUpdate: (index: number) => void
  handleRemoveEnterpriseImage: (index: number) => void
}

const EnterpriseSignatureImages = ({
  enterpriseSignatureImage,
  isSignatureModifyStatus,
  handleSignatureDim,
  handleChangeEnterpriseImage,
  handleRemoveEnterpriseImage,
  handleSignatureUpdate,
}: EnterpriseSignatureImageProps) => {
  const $t = useTranslations()

  return (
    <>
      {MAX_IMAGE_SIZE.map((image, index) => (
        <Styles.EnterpriseSignatureImageWrap key={`enterprise_signature_${index}`}>
          {!enterpriseSignatureImage[index]?.file_url && (
            <Styles.NoImageLabel>
              <Styles.NoImageText>
                <Icon icon="icon/company-solid" color="neutralGray400" size={24} />
                {$t('setting.enterprise.enterprise_background_description_line01')}
                <Styles.LineBreak />
                {$t('setting.enterprise.enterprise_background_description_line02')}
              </Styles.NoImageText>
              <Styles.ImageFileUpload
                onChange={(event) => handleChangeEnterpriseImage(event, index)}
                accept="image/*"
              />
            </Styles.NoImageLabel>
          )}
          {enterpriseSignatureImage[index]?.file_url && (
            <Styles.ImageWrap>
              {enterpriseSignatureImage[index].file_state === 1 && (
                <Styles.SignatureImageTag>
                  {$t('setting.enterprise.signature_image')}
                </Styles.SignatureImageTag>
              )}
              {enterpriseSignatureImage[index].file_state === 0 && (
                <Styles.SignatureImageButton
                  as="button"
                  type="button"
                  onClick={() => handleSignatureUpdate(index)}
                >
                  {$t('setting.enterprise.signature_image')}
                </Styles.SignatureImageButton>
              )}
              <Styles.ImageBox>
                <Image src={enterpriseSignatureImage[index].file_url} alt={''} fill={true} />
              </Styles.ImageBox>
              <Dropdown
                button={
                  <IconButton
                    icon="icon/more-solid"
                    size="sm"
                    state="primary"
                    onClick={() => handleSignatureDim(index, true)}
                  />
                }
                isParentStatusClosed={isSignatureModifyStatus[index]}
              >
                <Dropdown.Item>
                  <Styles.ModifyImageLabel>
                    <Icon icon="icon/edit-solid" color="neutralGray500" />
                    {$t('common.modify')}
                    <Styles.ImageFileUpload
                      onChange={(event) => handleChangeEnterpriseImage(event, index)}
                    />
                  </Styles.ModifyImageLabel>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleRemoveEnterpriseImage(index)} isWarning>
                  <Icon icon="icon/delete-solid" color="red500" />
                  {$t('common.delete')}
                </Dropdown.Item>
              </Dropdown>
            </Styles.ImageWrap>
          )}
        </Styles.EnterpriseSignatureImageWrap>
      ))}
    </>
  )
}
export default EnterpriseSignatureImages
