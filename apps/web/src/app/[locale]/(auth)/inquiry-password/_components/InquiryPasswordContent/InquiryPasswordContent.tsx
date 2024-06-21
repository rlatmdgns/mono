'use client'

import * as Styles from './styles'
import { Button, FloatingInput } from '@/shared/ui'
import { useFormContext } from 'react-hook-form'
import { IMAGES } from '@/shared/constants'
import { useTranslations } from 'next-intl'
import DOMPurify from 'dompurify'

const InquiryPasswordContent = () => {
  const $t = useTranslations('inquiry_password')

  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useFormContext()

  return (
    <Styles.Container>
      <Styles.Logo src={IMAGES.LOCK_64_BLUE} alt="" width={64} height={64} />
      <Styles.Title>{$t('forget_password')}</Styles.Title>
      <Styles.Description
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize($t('forget_password_description')),
        }}
      />
      <Styles.Field>
        <FloatingInput
          type="email"
          icon="icon/mail-solid"
          placeholder={$t('sign_in_email')}
          validationMessage={errors.user_email?.message}
          isError={!!errors.user_email}
          register={register('user_email')}
        />
        <Button
          isLoading={isSubmitting}
          disabled={!isValid}
          type="submit"
          size="md"
          width="100%"
          text={$t('transfer_email')}
        />
      </Styles.Field>
    </Styles.Container>
  )
}

export default InquiryPasswordContent
