import { PostingMember } from '@/interface/posting'

export const getConvertPostingMemberOptions = (members: PostingMember[]) => {
  return members?.map((member) => {
    return {
      image: member.user_profile,
      label: member.user_name,
      value: member.identification,
      google_connect: member.is_google_connect,
    }
  })
}
