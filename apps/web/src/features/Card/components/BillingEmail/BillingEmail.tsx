import * as Styles from '@/features/Card/components/BillingEmail/styles'
import Link from 'next/link'
import { PAGE } from '@/shared/constants'
import { ChangeEvent } from 'react'
import { TextInput } from '@/shared/ui'
import { useLocale, useTranslations } from 'next-intl'

interface BillingEmailProps {
  email?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const BillingEmail = ({ email, onChange }: BillingEmailProps) => {
  const $t = useTranslations()
  const currentLocale = useLocale()

  const getRefundTerms = (locale: string) => {
    if (locale !== 'ko') {
      return (
        <>
          * You can find cancellation and refund policies in the{' '}
          <Link href={PAGE.TERMS_OF_SERVICE}>terms of service.</Link>
        </>
      )
    }

    return (
      <>
        * 해지, 환불 내용은
        <Link href={PAGE.TERMS_OF_SERVICE}>이용약관</Link>를 통해 확인 가능합니다.
      </>
    )
  }

  return (
    <Styles.Email>
      <Styles.EmailTitle>
        {$t('setting.payment_management.payment_info_send')}
        <Styles.Required aria-label={$t('common.required')}>*</Styles.Required>
      </Styles.EmailTitle>
      <TextInput
        defaultValue={email}
        onChange={onChange}
        placeholder={$t('validation.email_input_message')}
      />
      <Styles.ExpiredText>{getRefundTerms(currentLocale)}</Styles.ExpiredText>
    </Styles.Email>
  )
}
export default BillingEmail
