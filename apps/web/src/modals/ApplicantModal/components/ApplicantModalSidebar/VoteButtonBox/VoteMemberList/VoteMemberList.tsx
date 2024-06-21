import { VoteLog } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import VoteMember from '@/modals/ApplicantModal/components/ApplicantModalSidebar/VoteButtonBox/VoteMember'
import { HoverDropdown } from '@/shared/ui'

interface VoteMemberListProps {
  members: VoteLog[]
}

const VoteMemberList = ({ members }: VoteMemberListProps) => {
  return (
    <>
      {members.map((member, index) => (
        <HoverDropdown.Item key={index}>
          <VoteMember {...member} />
        </HoverDropdown.Item>
      ))}
    </>
  )
}

export default VoteMemberList
