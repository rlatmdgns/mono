import { useFormContext } from 'react-hook-form'
import { usePasswordValidation } from '@/shared/hooks'
import { NAME_MAX_LENGTH } from '@/shared/constants'
import { Button, FloatingInput } from '@/shared/ui'
import ValidationBadge from '@/app/[locale]/(auth)/_components/ValidationBadge'
import ValidationBadges from '@/app/[locale]/(auth)/_components/ValidationBadges'
import TermsAndConditions from '@/app/[locale]/(auth)/_components/TermsAndConditions'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface InvitedSignUpFormContentProps {
  email: string
}

const InvitedSignUpFormContent = ({ email }: InvitedSignUpFormContentProps) => {
  const {
    register,
    formState: { isValid, errors },
    watch,
  } = useFormContext()

  const $t = useTranslations()

  const { conditions } = usePasswordValidation(watch('user_password'))

  return (
    <Styles.Form>
      <Styles.Column>
        <FloatingInput
          type="email"
          placeholder={$t('form.email')}
          icon="icon/mail-line"
          isError={!!errors?.user_email}
          validationMessage={errors?.user_email?.message}
          register={register('user_email')}
          value={email}
          isReadOnly
        />
      </Styles.Column>
      <Styles.Column>
        <FloatingInput
          placeholder={$t('form.name')}
          type="text"
          icon="icon/person_line"
          isError={!!errors?.user_name}
          validationMessage={errors?.user_name?.message}
          register={register('user_name')}
          maxLength={NAME_MAX_LENGTH}
        />
      </Styles.Column>
      <Styles.Column>
        <FloatingInput
          placeholder={$t('form.phone')}
          icon="icon/phone-line"
          isError={!!errors?.user_phone}
          validationMessage={errors?.user_phone?.message}
          register={register('user_phone')}
        />
      </Styles.Column>
      <Styles.Column>
        <FloatingInput
          placeholder={$t('form.password')}
          icon="icon/lock-line"
          isError={!!errors?.user_password}
          register={register('user_password')}
          type="password"
          autoComplete="new-password"
          isEye
        />
        <ValidationBadges conditions={conditions} />
      </Styles.Column>
      <Styles.Column>
        <FloatingInput
          placeholder={$t('form.password_check')}
          icon="icon/lock-line"
          isError={!!errors?.user_re_password}
          register={register('user_re_password')}
          type="password"
          isEye
        />
        <ValidationBadge
          text={$t('form.password_check')}
          isChecked={!!watch('user_re_password') && !errors.user_re_password?.message}
        />
      </Styles.Column>
      <TermsAndConditions />
      <Button type="submit" text={$t('common.sign_up')} size="md" disabled={!isValid} />
    </Styles.Form>
  )
}

export default InvitedSignUpFormContent
