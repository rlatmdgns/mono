'use client'

import * as Styles from './styles'
import { FieldValues, FormProvider, useForm } from 'react-hook-form'
import InquiryPasswordContent from '@/app/[locale]/(auth)/inquiry-password/_components/InquiryPasswordContent'
import sendPasswordResetMail from '@/services/auth/sendPasswordResetMail'
import { yupResolver } from '@hookform/resolvers/yup'
import MailConfirmation from '@/app/[locale]/(auth)/_container/MailConfirmation'
import { PAGE } from '@/shared/constants'
import { LinkButton } from '@/shared/ui'
import { useTranslations } from 'next-intl'
import { useValidations } from '@/app/[locale]/(auth)/inquiry-password/_components/InquiryPasswordContainer/hooks/useValidations'

const InquiryPasswordContainer = () => {
  const $t = useTranslations()
  const { inquiryPasswordSchema } = useValidations()
  const methods = useForm({
    resolver: yupResolver(inquiryPasswordSchema),
    mode: 'onBlur',
  })

  const handleSubmitForm = async (form: FieldValues) => {
    const { user_email } = form

    try {
      await sendPasswordResetMail({
        user_email,
      })
    } catch (error) {
      methods.setError('user_email', {
        message: $t('inquiry_password.error_message'),
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <Styles.HomeLinkBox>
        <LinkButton
          href={PAGE.SIGN_IN}
          iconSource="icon/left-line"
          text={$t('common.go_home')}
          state="standard"
          style="mono"
        />
      </Styles.HomeLinkBox>
      <Styles.Form onSubmit={methods.handleSubmit(handleSubmitForm)}>
        {methods.formState.isSubmitSuccessful ? (
          <MailConfirmation email={methods.watch('user_email')} />
        ) : (
          <InquiryPasswordContent />
        )}
      </Styles.Form>
    </FormProvider>
  )
}

export default InquiryPasswordContainer
