import SignUpContainer from '@/app/[locale]/(auth)/sign-up/_components/SignUpContainer'
import SignUpForm from '@/app/[locale]/(auth)/sign-up/_components/SignUpForm'
import getEmailAuthentication from '@/services/auth/signUp/getEmailAuthentication'

interface SignUpPageProps {
  searchParams: {
    auth_code: string
  }
}

export default async function SignUpPage({ searchParams }: SignUpPageProps) {
  const { auth_code } = searchParams

  if (auth_code) {
    const result = await getEmailAuthentication(auth_code)
    const email = result?.user_email
    return <SignUpForm email={email} />
  }

  return <SignUpContainer />
}
