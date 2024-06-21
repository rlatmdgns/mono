'use client'

import { userAtom } from '@/shared/model/user/atom'
import { Button, FloatingInput, LinkButton } from '@/shared/ui'
import { IMAGES, PAGE } from '@/shared/constants'
import signIn from '@/services/auth/signIn/signIn'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Sentry from '@sentry/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FieldValues, useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { useValidation } from '@/app/[locale]/(auth)/sign-in/_components/SignInContent/hooks/useValidation'

const SignInContent = () => {
  const setUser = useSetRecoilState(userAtom)
  const router = useRouter()
  const $t = useTranslations()
  const { signInSchema } = useValidation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: 'onBlur',
  })

  const handleSubmitForm = async (form: FieldValues) => {
    const { user_email, user_password } = form
    const response = await signIn({ user_email, user_password })

    if (!response?.success) {
      return setError('user_password', {
        type: 'manual',
        message: response?.message,
      })
    }

    if (!response?.enterprise?.enterprise_email) {
      return router.push(PAGE.CREATE_EMAIL)
    }
    const scope = Sentry.getCurrentScope()
    scope.setUser({ email: response.user_email })
    setUser(response)
    router.replace(PAGE.HOME)
  }
  return (
    <Styles.Wrapper>
      <Styles.HomeLinkBox>
        <LinkButton
          href="https://www.steadhr.com"
          iconSource="icon/left-line"
          text={$t('common.go_home')}
          state="standard"
          style="mono"
        />
      </Styles.HomeLinkBox>
      <Styles.Container>
        <Styles.Logo src={IMAGES.LOGO_BLACK} alt="logo" width={123} height={40} />
        <Styles.Title>{$t('login.title')}</Styles.Title>
        <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
          <Styles.Field>
            <FloatingInput
              type="email"
              icon="icon/mail-line"
              placeholder={$t('form.email')}
              validationMessage={errors.user_email?.message}
              isCorrect={isValid && !errors?.user_email}
              isError={!!errors.user_email}
              register={register('user_email')}
            />
            <FloatingInput
              type="password"
              icon="icon/lock-line"
              placeholder={$t('form.password')}
              validationMessage={errors.user_password?.message}
              isError={!!errors.user_password}
              isCorrect={isValid && !errors?.user_password}
              register={register('user_password')}
              isEye
            />
          </Styles.Field>
          <Styles.LinkPage href={PAGE.INQUIRY_PASSWORD} prefetch={false}>
            {$t('login.forgot_password')}
          </Styles.LinkPage>
          <Button
            isLoading={isSubmitting}
            disabled={!isValid}
            type="submit"
            size="md"
            width="100%"
            text={$t('login.login')}
          />
          <Styles.Nav>
            {$t('login.no_account')}
            <Styles.SignUp>
              <Link href={PAGE.SIGN_UP} prefetch={false}>
                {$t('login.sign_up')}
              </Link>
            </Styles.SignUp>
          </Styles.Nav>
        </Styles.Form>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default SignInContent
