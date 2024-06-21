import { AUTHORITY } from '@/shared/constants'

export const getDeleteDisabled = (
  email: string,
  user_email?: string,
  user_authority?: string | number,
) => {
  if (user_authority === AUTHORITY.ADMIN || user_authority === 2) return true
  return user_email === email
}
