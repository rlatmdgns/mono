import * as Styles from './styles'

interface AuthorityBadgeProps {
  authority: string
}

export const AuthorityBadge = ({ authority }: AuthorityBadgeProps) => {
  const text =
    authority === 'evaluationMember'
      ? '평가 담당자'
      : authority === 'recruitmentMember'
        ? '채용 담당자'
        : '관리자'

  const style =
    authority === 'evaluationMember' ? 'blue' : authority === 'recruitmentMember' ? 'green' : 'red'

  return <Styles.Wrapper $style={style}>{text}</Styles.Wrapper>
}
