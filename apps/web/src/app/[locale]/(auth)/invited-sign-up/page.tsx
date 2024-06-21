import InvitedSignUpForm from '@/app/[locale]/(auth)/invited-sign-up/_components/InvitedSignUpForm'
import getEmailAuthentication from '@/services/auth/signUp/getEmailAuthentication'

interface InvitedSignUpPageProps {
  searchParams: {
    auth_code: string
  }
}

export default async function InvitedSignUpPage({ searchParams }: InvitedSignUpPageProps) {
  const { auth_code } = searchParams
  const result = await getEmailAuthentication(auth_code)
  return <InvitedSignUpForm email={result.user_email} authCode={auth_code} />
}
