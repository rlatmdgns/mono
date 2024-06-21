import { useInfiniteQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@/shared/constants'
import { ApplicantPoolRequest, ApplicantPoolResponse } from '@/interface/applicantPool'
import getApplicantPool from '@/services/applicantPool/getApplicantPool'

const useApplicantPool = (initialData: ApplicantPoolResponse, data: ApplicantPoolRequest) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.APPLICANT_POOL],
    queryFn: ({ pageParam }) => getApplicantPool(pageParam, data),
    initialData: {
      pages: [initialData],
      pageParams: [],
    },
    initialPageParam: 1,
    getNextPageParam: ({ applicants }: ApplicantPoolResponse) => {
      if (applicants.current_page === applicants.last_page) {
        return
      }
      return applicants.current_page + 1
    },
  })
}

export default useApplicantPool
