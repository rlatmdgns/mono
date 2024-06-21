import TermsAndConditions from '@/app/[locale]/(auth)/_components/TermsAndConditions'
import ValidationBadge from '@/app/[locale]/(auth)/_components/ValidationBadge'
import ValidationBadges from '@/app/[locale]/(auth)/_components/ValidationBadges'
import { usePasswordValidation } from '@/shared/hooks'
import { Button, FloatingInput } from '@/shared/ui'
import { NAME_MAX_LENGTH } from '@/shared/constants'
import { useFormContext } from 'react-hook-form'
import SignUpFormPathSelect from '../SignUpFormPathSelect'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface SignUpFormContentProps {
  readonly email: string
}

const SignUpFormContent = ({ email }: SignUpFormContentProps) => {
  const $t = useTranslations()
  const {
    register,
    formState: { isValid, errors },
    watch,
  } = useFormContext()

  const { conditions } = usePasswordValidation(watch('user_password'))

  return (
    <Styles.Form>
      <Styles.Column>
        <FloatingInput
          defaultValue={email}
          placeholder={$t('form.email')}
          icon="icon/mail-line"
          isCorrect={true}
          register={register('user_email')}
          isReadOnly
        />
      </Styles.Column>
      <Styles.Column>
        <FloatingInput
          placeholder={$t('form.company')}
          icon="icon/company-line"
          isError={!!errors?.enterprise_name}
          validationMessage={errors?.enterprise_name?.message}
          register={register('enterprise_name')}
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
      <Styles.Column>
        <SignUpFormPathSelect
          validationMessage={
            errors?.user_access_path?.message || errors?.user_access_path_direct_input?.message
          }
        />
      </Styles.Column>
      <TermsAndConditions />
      <Button type="submit" text={$t('sign_up.starting_free')} size="md" disabled={!isValid} />
    </Styles.Form>
  )
}

export default SignUpFormContent
