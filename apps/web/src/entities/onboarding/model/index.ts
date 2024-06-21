import { SceneMemberItem } from '../types/scenario'

export const filterSceneMembers = (members: SceneMemberItem[], value: string) => {
  return members
    .filter((member) => member.name.includes(value) || member.email.includes(value))
    .sort((a, b) => a.name.localeCompare(b.name))
}
