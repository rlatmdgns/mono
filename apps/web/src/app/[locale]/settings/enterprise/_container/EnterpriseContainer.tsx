'use client'

import SettingTitle from '@/app/[locale]/settings/_components/SettingTitle'
import EnterpriseAddress from '@/app/[locale]/settings/enterprise/_components/EnterpriseAddress'
import EnterpriseLogo from '@/app/[locale]/settings/enterprise/_components/EnterpriseLogo'
import EnterpriseSignatureImages from '@/app/[locale]/settings/enterprise/_components/EnterpriseSignatureImages'
import { MAX_IMAGE_SIZE } from '@/app/[locale]/settings/enterprise/_container/EnterpriseContainer.constant'
import useEnterpriseContainer from '@/app/[locale]/settings/enterprise/_container/hooks/useEnterpriseContainer'
import useEnterprise from '@/entities/enterprise/hooks/useEnterprise'
import { Button, ErrorMessage, TextInput } from '@/shared/ui'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { useValidation } from '@/app/[locale]/settings/enterprise/_container/hooks/useValidation'

const EnterpriseContainer = () => {
  const { data } = useEnterprise()
  const enterprise = data?.enterprise
  const $t = useTranslations()
  const { enterpriseSchema } = useValidation()

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { isValid, errors, isSubmitting, dirtyFields, isSubmitSuccessful },
    watch,
  } = useForm({
    resolver: yupResolver(enterpriseSchema),
    mode: 'all',
    defaultValues: enterprise,
  })
  const {
    logo,
    isLogoModifyStatus,
    enterpriseSignatureImage,
    isSignatureModifyStatus,
    handleSignatureDim,
    handleLogoModify,
    handleChangeLogo,
    handleRemoveLogo,
    handleSubmitForm,
    handleChangeEnterpriseImage,
    handleRemoveEnterpriseImage,
    handleSignatureUpdate,
    handleAddressAdd,
  } = useEnterpriseContainer(
    setValue,
    enterprise?.enterprise_logo,
    enterprise?.enterprise_background,
  )

  useEffect(() => {
    if (!isSubmitSuccessful) return
    reset()
  }, [isSubmitSuccessful])

  useEffect(() => {
    if (!enterprise) return
    reset(enterprise)
  }, [enterprise])

  if (!enterprise) return

  const enterprise_address = watch('enterprise_address') as string
  const enterprise_detail_address = watch('enterprise_detail_address') as string
  const hasDirtyFields = Object.keys(dirtyFields).length > 0

  return (
    <Styles.Wrapper>
      <SettingTitle title={$t('setting.enterprise.title')} />
      <Styles.Row>
        <Styles.Title>{$t('setting.enterprise.enterprise_logo')}</Styles.Title>
        <Styles.EnterpriseImageWrap>
          <EnterpriseLogo
            logo={logo}
            isLogoModifyStatus={isLogoModifyStatus}
            handleLogoModify={handleLogoModify}
            handleChangeLogo={handleChangeLogo}
            handleRemoveLogo={handleRemoveLogo}
          />
        </Styles.EnterpriseImageWrap>
      </Styles.Row>
      <Styles.Row>
        <Styles.Info>
          <Styles.Title $isRequired>{$t('setting.enterprise.enterprise_name')}</Styles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={enterprise?.enterprise_name}
                onChange={(event) => onChange(event.target.value)}
                placeholder={$t('setting.enterprise.enterprise_name_placeholder')}
              />
            )}
            name="enterprise_name"
          />
          <ErrorMessage error={errors?.enterprise_name} />
        </Styles.Info>
        <Styles.Info>
          <Styles.Title $isRequired>{$t('setting.enterprise.enterprise_email')}</Styles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={enterprise?.enterprise_email}
                onChange={(event) => onChange(event.target.value)}
                placeholder={$t('setting.enterprise.enterprise_email_placeholder')}
                disabled
              />
            )}
            name="enterprise_email"
          />
          <ErrorMessage error={errors?.enterprise_email} />
        </Styles.Info>
      </Styles.Row>
      <Styles.Row>
        <Styles.Info>
          <Styles.Title>{$t('setting.enterprise.enterprise_work_space')}</Styles.Title>
          <EnterpriseAddress
            enterprise_address={enterprise_address}
            enterprise_detail_address={enterprise_detail_address}
            handleAddressAdd={handleAddressAdd}
          />
        </Styles.Info>
        <Styles.Info>
          <Styles.Title $isRequired>{$t('setting.enterprise.enterprise_recruit_url')}</Styles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={enterprise?.enterprise_recruit_url}
                onChange={(event) => onChange(event.target.value)}
                placeholder={$t('setting.enterprise.enterprise_recruit_url_placeholder')}
              />
            )}
            name="enterprise_recruit_url"
          />
          <ErrorMessage error={errors?.enterprise_recruit_url} />
        </Styles.Info>
      </Styles.Row>
      <Styles.Row>
        <Styles.Info $isFullRow={true}>
          <Styles.RowTitle>
            {$t('setting.enterprise.enterprise_background')} ({$t('common.max')}{' '}
            {MAX_IMAGE_SIZE.length}
            {$t('common.page')})
          </Styles.RowTitle>
          <Styles.EnterpriseSignatureImageList>
            <EnterpriseSignatureImages
              enterpriseSignatureImage={enterpriseSignatureImage}
              isSignatureModifyStatus={isSignatureModifyStatus}
              handleSignatureDim={handleSignatureDim}
              handleChangeEnterpriseImage={handleChangeEnterpriseImage}
              handleRemoveEnterpriseImage={handleRemoveEnterpriseImage}
              handleSignatureUpdate={handleSignatureUpdate}
            />
          </Styles.EnterpriseSignatureImageList>
        </Styles.Info>
      </Styles.Row>
      <Styles.Row>
        <Styles.Explanation>
          <Styles.RowTitle>{$t('setting.enterprise.enterprise_explanation')}</Styles.RowTitle>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <Styles.TextArea
                defaultValue={enterprise?.enterprise_explanation}
                onChange={(event) => onChange(event.target.value)}
                placeholder={$t('setting.enterprise.enterprise_explanation')}
              />
            )}
            rules={{ required: true }}
            name="enterprise_explanation"
          />
        </Styles.Explanation>
      </Styles.Row>
      <Styles.ButtonWrap>
        <Button
          isLoading={isSubmitting}
          disabled={!isValid || !hasDirtyFields}
          size="md"
          style={'fill-weak'}
          width="100%"
          text={$t('setting.enterprise.save')}
          onClick={handleSubmit(handleSubmitForm)}
        />
      </Styles.ButtonWrap>
    </Styles.Wrapper>
  )
}

export default EnterpriseContainer
