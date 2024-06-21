'use client'

import * as Styles from './styles'
import { IMAGES } from '@/shared/constants'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { changePasswordSchema } from '@/app/[locale]/(auth)/change-password/_components/PasswordForm/validation'
import updatePassword from '@/services/auth/user/updatePassword'
import { useState } from 'react'
import ChangePasswordSuccess from '@/app/[locale]/(auth)/_components/ChangePasswordSuccess'
import ChangePasswordTitle from '@/app/[locale]/(auth)/_components/ChangePasswordTitle/ChangePasswordTitle'
import { Button, FloatingInput, Toast } from '@/shared/ui'
import { useTranslations } from 'next-intl'

const PasswordForm = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
    mode: 'onBlur',
  })

  const $t = useTranslations()

  const handleSubmitForm = async (form: FieldValues) => {
    const { password, new_password, new_password_check } = form

    try {
      const response = await updatePassword({
        password,
        new_password,
        new_password_check,
      })
      if (response.success) {
        setIsSuccess(true)
      }
    } catch (error: any) {
      Toast.error(error.message)
    }
  }
  return (
    <Styles.Wrapper>
      {isSuccess && <ChangePasswordSuccess />}
      {!isSuccess && (
        <Styles.PasswordForm onSubmit={handleSubmit(handleSubmitForm)}>
          <ChangePasswordTitle
            title={$t('form.password_reset')}
            desc={$t('validation.new_password_input_message')}
            icon={IMAGES.LOCK_64_BLUE}
          />
          <Styles.Field>
            <FloatingInput
              type="password"
              icon="icon/lock-solid"
              placeholder={$t('form.password')}
              validationMessage={errors.password?.message}
              isError={!!errors.password}
              isCorrect={isValid && !errors?.password}
              register={register('password')}
              isEye
            />
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
          </Styles.Field>
          <Button
            isLoading={isSubmitting}
            disabled={!isValid}
            type="submit"
            size="md"
            width="100%"
            text={$t('form.password_reset')}
          />
        </Styles.PasswordForm>
      )}
    </Styles.Wrapper>
  )
}
export default PasswordForm
