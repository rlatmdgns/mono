import getServerEnterpriseMember from '@/entities/enterprise/api/getServerEnterpriseMember'
import MemberRow from '@/app/[locale]/settings/member/_components/MemberRow'

const MemberPage = async () => {
  const initialData = await getServerEnterpriseMember()
  return <MemberRow initialData={initialData} />
}
export default MemberPage
