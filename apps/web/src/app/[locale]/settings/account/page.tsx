import getServerUser from '@/entities/user/api/getServerUser'
import React from 'react'
import AccountContainer from '@/app/[locale]/settings/account/_container'

const AccountPage = async () => {
  const result = await getServerUser()
  return <AccountContainer result={result} />
}

export default AccountPage
