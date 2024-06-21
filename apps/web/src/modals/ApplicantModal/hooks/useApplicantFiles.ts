import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getApplicantFiles from '@/services/applicantFile/getApplicantFiles'
import { ApplicantFilesResponse } from '@/interface/applicantFile'

const useApplicantFiles = (applicantId: string) => {
  const { data } = useQuery<ApplicantFilesResponse>({
    queryKey: [QUERY_KEY.APPLICANT_FILES, applicantId],
    queryFn: () => getApplicantFiles(applicantId),
    enabled: !!applicantId,
  })
  return { data }
}

export default useApplicantFiles
