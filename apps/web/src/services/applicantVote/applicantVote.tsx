import { API_URL } from '@/shared/constants'
import { http } from '@/shared/lib/http'
import { ApplicantVoteResponse } from '@/services/applicantVote/applicantVote.interface'

const applicantVote = async (applicantId: string, data: number): Promise<ApplicantVoteResponse> => {
  return await http.post(API_URL.APPLICANT_VOTE(applicantId), {
    vote_type: data,
  })
}

export default applicantVote
