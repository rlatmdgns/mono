import { filterSceneMembers } from '../../model'
import { SceneMemberItem } from '../../types/scenario'
import { Empty } from './Empty'
import { SceneMember } from './SceneMember'
import { list } from './style.css'
import { HandleAppendReceive } from '@/entities/onboarding/types/receive'

interface SceneMembersProps {
  value: string
  members: SceneMemberItem[]
  receivers: any
  onClick: HandleAppendReceive
}

export const SceneMemberList = ({ value, receivers, members, onClick }: SceneMembersProps) => {
  const filteredMembers = filterSceneMembers(members, value)
  const hasMembers = filteredMembers.length > 0

  if (!hasMembers) {
    return <Empty />
  }

  return (
    <ul className={list}>
      {filteredMembers.map((member, index) => {
        return (
          <SceneMember
            key={`scene_member_${index}`}
            id={member.id}
            type={member.type}
            name={member.name}
            email={member.email}
            profile={member.profile}
            receivers={receivers}
            onClick={onClick}
          />
        )
      })}
    </ul>
  )
}
