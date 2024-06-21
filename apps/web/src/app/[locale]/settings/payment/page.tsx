import React from 'react'
import PaymentContainer from '@/app/[locale]/settings/payment/container'
import settingRedirect from '@/app/[locale]/settings/util/settingRedirect'

const PaymentPage = async () => {
  await settingRedirect()

  return <PaymentContainer />
}

export default PaymentPage
