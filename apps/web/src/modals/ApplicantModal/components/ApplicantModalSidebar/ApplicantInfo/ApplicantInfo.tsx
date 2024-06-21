import * as Styles from './styles'
import ApplicantInfoHeader from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantInfoHeader'
import { useRecoilValue } from 'recoil'
import { applicantIdAtom, applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import ApplicantInfoList from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantInfoList'
import { useGetApplicantInfoList } from '@/modals/ApplicantModal/hooks/useGetApplicantInfoList'

interface ApplicantInfoProps {
  isEvaluator: boolean
  applicant?: ApplicantResponse
}

const ApplicantInfo = ({ applicant, isEvaluator }: ApplicantInfoProps) => {
  const applicantId = useRecoilValue(applicantIdAtom)
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const { getApplicantInfoList } = useGetApplicantInfoList()

  const isNoDataOrFold = !applicantId || !applicant || isFold

  if (isEvaluator || isNoDataOrFold) return null

  const applicantInfos = getApplicantInfoList(applicant)

  return (
    <Styles.Wrapper>
      <ApplicantInfoHeader />
      <ApplicantInfoList applicant={applicant} applicantInfos={applicantInfos} />
    </Styles.Wrapper>
  )
}

export default ApplicantInfo
