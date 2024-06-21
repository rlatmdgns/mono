import { Authority } from './AuthorityBadge.interface'

export const getAuthorityLabel = (authority: Authority) => {
  if (authority === 'evaluationMember') return '평가 담당자'
  if (authority === 'recruitmentMember') return '채용 담당자'
  return '관리자'
}
