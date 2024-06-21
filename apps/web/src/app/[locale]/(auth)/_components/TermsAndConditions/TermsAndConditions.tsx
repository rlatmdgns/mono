import { Controller, useFormContext } from 'react-hook-form'
import { PAGE } from '@/shared/constants'
import { CheckBox } from '@/shared/ui'
import * as Styles from './styles'
import { useLocale, useTranslations } from 'next-intl'

const TermsAndConditions = () => {
  const { control, setValue, watch } = useFormContext()
  const currentLocale = useLocale()
  const $t = useTranslations()

  const handleAllAgreementChange = (option: boolean) => {
    setValue('service_agreement', option, { shouldValidate: true })
    setValue('consent_to_marketing', option, { shouldValidate: true })
  }

  const updateAllAgreement = () => {
    const areAllAgreed = watch('service_agreement') && watch('consent_to_marketing')
    setValue('all_agreement', areAllAgreed, { shouldValidate: true })
  }

  const getTranslateAgreementText = (locale: string) => {
    if (locale !== 'ko') {
      return (
        <>
          <Styles.AgreementText>
            "I agree to the
            <Styles.AgreementLink
              href={PAGE.TERMS_OF_SERVICE}
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </Styles.AgreementLink>
            and
            <Styles.AgreementLink
              href={PAGE.PRIVACY_POLICY}
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy
            </Styles.AgreementLink>
            regarding the handling of personal information." <br />({$t('common.required')})
          </Styles.AgreementText>
        </>
      )
    }

    return (
      <>
        <Styles.AgreementText>
          <Styles.AgreementLink
            href={PAGE.TERMS_OF_SERVICE}
            target="_blank"
            rel="noopener noreferrer"
          >
            서비스 약관
          </Styles.AgreementLink>
          및
          <Styles.AgreementLink
            href={PAGE.PRIVACY_POLICY}
            target="_blank"
            rel="noopener noreferrer"
          >
            개인정보 처리 방침
          </Styles.AgreementLink>
          에 동의합니다.
          <br />
          (필수)
        </Styles.AgreementText>
      </>
    )
  }

  return (
    <Styles.Column>
      <Styles.AgreementBox>
        <Styles.Label>
          <Styles.CheckboxWrapper>
            <Controller
              name="all_agreement"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  isChecked={value}
                  onChange={(option) => {
                    onChange(option)
                    handleAllAgreementChange(option)
                  }}
                />
              )}
            />
          </Styles.CheckboxWrapper>
          <Styles.AgreementText>{$t('term_condition.all_agree')}</Styles.AgreementText>
        </Styles.Label>
        <Styles.Label>
          <Styles.CheckboxWrapper>
            <Controller
              name="service_agreement"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  isChecked={value}
                  onChange={(option) => {
                    onChange(option)
                    updateAllAgreement()
                  }}
                />
              )}
            />
          </Styles.CheckboxWrapper>
          {getTranslateAgreementText(currentLocale)}
        </Styles.Label>
        <Styles.Label>
          <Styles.CheckboxWrapper>
            <Controller
              name="consent_to_marketing"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  isChecked={value}
                  onChange={(option) => {
                    onChange(option)
                    updateAllAgreement()
                  }}
                />
              )}
            />
          </Styles.CheckboxWrapper>
          <Styles.AgreementText>
            {$t('term_condition.marketing_agree')} ({$t('common.optional')})
          </Styles.AgreementText>
        </Styles.Label>
      </Styles.AgreementBox>
    </Styles.Column>
  )
}

export default TermsAndConditions
