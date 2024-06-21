import ApplicantInfoItem from '@/modals/ApplicantModal/components/ApplicantModalSidebar/ApplicantInfo/ApplicantInfoItem'
import { ApplicantResponse } from '@/services/applicant/getApplicant/getApplicant.interface'
import { ApplicantInfoProps } from '@/modals/ApplicantModal/ApplicantModal.interface'

interface ApplicantInfoListProps {
  applicant: ApplicantResponse
  applicantInfos: ApplicantInfoProps[]
}

const ApplicantInfoList = ({ applicantInfos, applicant }: ApplicantInfoListProps) => {
  return (
    <>
      {applicantInfos?.map((item, index) => (
        <ApplicantInfoItem applicant={applicant} key={index} {...item} />
      ))}
    </>
  )
}

export default ApplicantInfoList
