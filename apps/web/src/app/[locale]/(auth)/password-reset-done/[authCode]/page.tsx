import React from 'react'
import PasswordReset from '@/app/[locale]/(auth)/password-reset-done/[authCode]/_components/PasswordReset'

interface PasswordRestPageProps {
  searchParams: {
    token: string
  }
}

const PasswordRestPage = ({ searchParams }: PasswordRestPageProps) => {
  const { token } = searchParams
  return <PasswordReset />
}

export default PasswordRestPage
