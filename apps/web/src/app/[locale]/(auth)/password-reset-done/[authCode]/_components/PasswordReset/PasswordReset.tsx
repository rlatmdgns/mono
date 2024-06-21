'use client'

import * as Styles from './styles'
import { Button, FloatingInput, LinkButton, Toast } from '@/shared/ui'
import { FieldValues, useForm } from 'react-hook-form'
import { IMAGES, PAGE } from '@/shared/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import ChangePasswordTitle from '@/app/[locale]/(auth)/_components/ChangePasswordTitle/ChangePasswordTitle'
import resetPassword from '@/services/auth/user/resetPassword'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import ChangePasswordSuccess from '@/app/[locale]/(auth)/_components/ChangePasswordSuccess'
import { useTranslations } from 'next-intl'
import { useValidation } from '@/app/[locale]/(auth)/password-reset-done/[authCode]/_components/PasswordReset/hooks/useValidation'

const PasswordReset = () => {
  const $t = useTranslations()
  const { resetPasswordSchema } = useValidation()
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(resetPasswordSchema),
    mode: 'all',
  })

  const params = useParams()
  const authCode = params?.authCode as string
  if (!authCode) return
  const handleSubmitForm = async (form: FieldValues) => {
    const user_password = form.new_password

    try {
      const response = await resetPassword(authCode, {
        user_password,
      })
      if (response.success) {
        setIsSuccess(true)
      }
    } catch (error: any) {
      Toast.error(error.message)
    }
  }

  return (
    <>
      <Styles.HomeLinkBox>
        <LinkButton
          href={PAGE.HOME}
          iconSource="icon/left-line"
          text={$t('common.go_home')}
          state="standard"
          style="mono"
        />
      </Styles.HomeLinkBox>
      <Styles.Wrapper>
        {isSuccess && <ChangePasswordSuccess />}
        {!isSuccess && (
          <Styles.Container>
            <ChangePasswordTitle
              title={$t('form.password_reset')}
              desc={$t('validation.new_password_input_message')}
              icon={IMAGES.LOCK_64_BLUE}
            />
            <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
              <Styles.Field>
                <FloatingInput
                  type="password"
                  icon="icon/lock-solid"
                  placeholder={$t('form.new_password')}
                  validationMessage={errors.new_password?.message}
                  isError={!!errors.new_password}
                  isCorrect={isValid && !errors?.new_password}
                  register={register('new_password')}
                  isEye
                />
                <FloatingInput
                  type="password"
                  icon="icon/lock-solid"
                  placeholder={$t('form.new_password_check')}
                  validationMessage={errors.new_password_check?.message}
                  isError={!!errors.new_password_check}
                  isCorrect={isValid && !errors?.new_password_check}
                  register={register('new_password_check')}
                  isEye
                />
                <Button
                  isLoading={isSubmitting}
                  disabled={!isValid}
                  type="submit"
                  size="md"
                  width="100%"
                  text={$t('form.password_reset')}
                />
              </Styles.Field>
            </Styles.Form>
          </Styles.Container>
        )}
      </Styles.Wrapper>
    </>
  )
}

export default PasswordReset
