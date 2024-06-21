import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'

const deleteMember = async (identification: string) =>
  await http.delete(API_URL.DELETE_ENTERPRISE_MEMBER(identification))

export default deleteMember
