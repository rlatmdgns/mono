import { Controller, useFormContext } from 'react-hook-form'
import { SignUpPathOption } from './SignUpFormPathSelect.interface'
import { Select } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { useSignUpFormPathSelectConstants } from '@/app/[locale]/(auth)/sign-up/_components/SignUpForm/components/SignUpFormPathSelect/hooks/useSignUpFormPathSelectConstants'

const SignUpFormPathSelect = ({ validationMessage }: any) => {
  const { register, control, watch } = useFormContext()

  const $t = useTranslations('sign_up')
  const { SIGN_UP_PATHS } = useSignUpFormPathSelectConstants()

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Controller
          name="user_access_path"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, onBlur } }) => (
            <Select
              options={SIGN_UP_PATHS}
              placeholder={$t('stead_contact_path')}
              value={SIGN_UP_PATHS.find((option: SignUpPathOption) => option.value === value)}
              onChange={(option) => onChange(option.value)}
              onBlur={onBlur}
            />
          )}
        />
        {watch('user_access_path') === '직접입력' && (
          <Styles.Input {...register('user_access_path_direct_input')} />
        )}
      </Styles.Container>
      {validationMessage && <Styles.Error>{validationMessage}</Styles.Error>}
    </Styles.Wrapper>
  )
}

export default SignUpFormPathSelect
