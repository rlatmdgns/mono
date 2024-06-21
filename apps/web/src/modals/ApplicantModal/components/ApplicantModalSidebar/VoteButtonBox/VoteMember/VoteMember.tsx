import * as Style from './styles'
import { Avatar, Badge } from '@/shared/ui'
import { VoteLog } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import { useTranslations } from 'next-intl'

const VoteMember = (props: VoteLog) => {
  const $t = useTranslations('common')
  const { user_name, user_profile, vote_type } = props
  const voteType = vote_type === 'pass' ? $t('agree') : $t('disagree')
  const voteTypeType = vote_type === 'pass' ? 'standard' : 'warning'

  return (
    <Style.Wrapper>
      <Avatar size="sm" alt={user_name} src={user_profile} />
      <Style.Name>{user_name}</Style.Name>
      <Badge text={voteType} type={voteTypeType} />
    </Style.Wrapper>
  )
}

export default VoteMember
