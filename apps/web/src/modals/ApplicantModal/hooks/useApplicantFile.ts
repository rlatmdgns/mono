import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import getApplicantFile from '@/services/applicantFile/getApplicantFile'

const useApplicantFile = (fileId: number) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.APPLICANT_FILE, fileId],
    queryFn: () => getApplicantFile(fileId),
    enabled: !!fileId,
  })
  return { data }
}

export default useApplicantFile
