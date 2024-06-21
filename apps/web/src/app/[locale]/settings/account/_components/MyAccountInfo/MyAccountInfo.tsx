'use client'
import * as AccountStyles from '@/app/[locale]/settings/account/_container/styles'
import { Avatar, Button, ErrorMessage, LinkButton, TextInput } from '@/shared/ui'
import { PAGE } from '@/shared/constants'
import { UserInfo } from '@/interface/user'
import temporaryFile from '@/services/temporaryFile'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as Styles from './styles'
import { useAccount } from '@/shared/hooks'
import { useTranslations } from 'next-intl'
import { useValidation } from '@/app/[locale]/settings/account/_components/MyAccountInfo/hooks/useValidation'

interface MyAccountInfoProps {
  initialUserInfo: UserInfo
}

const MyAccountInfo = ({ initialUserInfo }: MyAccountInfoProps) => {
  const [profile, setProfile] = useState(initialUserInfo.user_profile)
  const $t = useTranslations('setting.my_account')
  const { accountInfoSchema } = useValidation()

  const {
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { isValid, errors, dirtyFields, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(accountInfoSchema),
    mode: 'all',
    defaultValues: initialUserInfo,
  })
  const hasDirtyFields = Object.keys(dirtyFields).length > 0

  const { updateAccountMutate } = useAccount()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return

    const formData = new FormData()
    formData.append('file', event.target.files[0])

    const result = await temporaryFile(formData)
    setValue('user_profile', result.temporary.url, { shouldDirty: true })
    setProfile(result.temporary.url)
  }

  const handleSubmitInfo = (form: UserInfo) => {
    const postData = { ...form }
    updateAccountMutate(postData)
  }

  useEffect(() => {
    if (!isSubmitSuccessful) return
    reset()
  }, [isSubmitSuccessful])

  useEffect(() => {
    if (!initialUserInfo) return
    reset(initialUserInfo)
  }, [initialUserInfo])

  if (!initialUserInfo) return null

  return (
    <Styles.Form onSubmit={handleSubmit(handleSubmitInfo)}>
      <Styles.TopArea>
        <AccountStyles.Title>{$t('profile')}</AccountStyles.Title>
        <Styles.AvatarWrap>
          <Avatar
            alt={initialUserInfo.user_name}
            src={profile || initialUserInfo.user_profile}
            size={'lg'}
          />
          <Styles.ProfileWrapper>
            <Styles.ProfileLabel>
              <Styles.ProfileUpload onChange={handleFileUpload} />
              {$t('profile_upload')}
            </Styles.ProfileLabel>
            <Styles.ProfileDesc>{$t('profile_upload_desc')}</Styles.ProfileDesc>
          </Styles.ProfileWrapper>
          <Styles.ChangePassword>
            <LinkButton
              isNewTab
              href={PAGE.CHANGE_PASSWORD}
              size="sm"
              state="standard"
              style="mono"
              text={$t('change_password')}
            />
          </Styles.ChangePassword>
        </Styles.AvatarWrap>
      </Styles.TopArea>
      <Styles.InfoWrap>
        <Styles.Info>
          <AccountStyles.Title $isRequired>{$t('name')}</AccountStyles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={initialUserInfo.user_name}
                maxLength={6}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
            rules={{ required: true }}
            name="user_name"
          />
          <ErrorMessage error={errors?.user_name} />
        </Styles.Info>
      </Styles.InfoWrap>
      <Styles.InfoWrap>
        <Styles.Info>
          <AccountStyles.Title $isRequired>{$t('phone')}</AccountStyles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={initialUserInfo.user_phone}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
            rules={{ required: true }}
            name="user_phone"
          />
          <ErrorMessage error={errors?.user_phone} />
        </Styles.Info>
        <Styles.Info>
          <AccountStyles.Title $isRequired>{$t('email')}</AccountStyles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={initialUserInfo.user_email}
                onChange={(event) => onChange(event.target.value)}
                disabled
              />
            )}
            name="user_email"
          />
          <ErrorMessage error={errors?.user_email} />
        </Styles.Info>
      </Styles.InfoWrap>
      <Styles.InfoWrap>
        <Styles.Info>
          <AccountStyles.Title>{$t('department')}</AccountStyles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={initialUserInfo.user_department || ''}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
            name="user_department"
          />
        </Styles.Info>
        <Styles.Info>
          <AccountStyles.Title>{$t('position')}</AccountStyles.Title>
          <Controller
            control={control}
            render={({ field: { onChange } }) => (
              <TextInput
                defaultValue={initialUserInfo.user_job || ''}
                onChange={(event) => onChange(event.target.value)}
              />
            )}
            name="user_job"
          />
        </Styles.Info>
      </Styles.InfoWrap>
      <Styles.SaveButton>
        <Button
          type="submit"
          text={$t('save')}
          style="fill-weak"
          disabled={!isValid || !hasDirtyFields}
        />
      </Styles.SaveButton>
    </Styles.Form>
  )
}
export default MyAccountInfo
