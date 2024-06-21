import { Authority } from './AuthorityBadge.interface'
import { getAuthorityLabel } from './AuthorityBadge.factory'
import { wrapper } from './styles.css'

interface AuthorityBadgeProps {
  authority: Authority
}

export const AuthorityBadge = ({ authority }: AuthorityBadgeProps) => {
  const authorityLabel = getAuthorityLabel(authority)

  return (
    <em
      className={wrapper({
        authority,
      })}
    >
      {authorityLabel}
    </em>
  )
}
