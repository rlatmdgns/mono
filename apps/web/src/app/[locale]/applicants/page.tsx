import ApplicantFilter from '@/app/[locale]/applicants/_components/ApplicantFilter'
import ApplicantList from '@/app/[locale]/applicants/_components/ApplicantList'
import getServerApplicantPoolFilter from '@/services/applicantPool/getServerApplicantPoolFilter'
import getServerApplicantPool from '@/services/applicantPool/getServerApplicantPool'

export default async function ApplicantsPage() {
  const initialApplicantPoolFilter = await getServerApplicantPoolFilter()
  const initialApplicantPool = await getServerApplicantPool()
  return (
    <>
      <ApplicantFilter initialApplicantPoolFilter={initialApplicantPoolFilter} />
      <ApplicantList initialApplicantPool={initialApplicantPool} />
    </>
  )
}
