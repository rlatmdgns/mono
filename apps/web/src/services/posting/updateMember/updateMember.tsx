import { http } from '@/shared/lib/http'
import { API_URL } from '@/shared/constants'
import { PostingMemberResponse } from '@/interface/member'
import { updateMembersRequest } from '@/services/posting/updateMember/updateMember.interface'

const updatePostingMember = (id: string, selectedMemberIdentifies: updateMembersRequest) => {
  return http.put<unknown, PostingMemberResponse>(
    API_URL.POSTING_MEMBER(id),
    selectedMemberIdentifies,
  )
}

export default updatePostingMember
