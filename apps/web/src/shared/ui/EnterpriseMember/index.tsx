import { Avatar, Badge } from '@/shared/ui'
import { Tooltip } from '@/shared/ui'
import * as Styles from './styles'
import { useGetAuthority } from '@/shared/lib/hooks/useGetAuthority'

interface EnterpriseMemberProps {
  name: string
  profile?: string
  email?: string
  authority?: string | number
  job?: string
  department?: string
}

export const EnterpriseMember = ({
  name,
  email,
  profile,
  authority,
  job,
  department,
}: EnterpriseMemberProps) => {
  const { getAuthority } = useGetAuthority()
  const text = getAuthority(authority)
  const badgeType: Record<string, any> = {
    관리자: 'warning',
    '채용 담당': 'success',
    '평가 담당': 'standard',
  }

  return (
    <Styles.Wrapper>
      {profile && <Avatar size="md" alt={name} src={profile} />}
      <Styles.Info>
        <Styles.Type>
          <Styles.Name>{name}</Styles.Name>
          {text && <Badge text={text} type={badgeType[text]} />}
        </Styles.Type>
        <Styles.Description>
          <Styles.Text>
            <Tooltip text={email ? email : ''} isOverflow>
              {email}
            </Tooltip>
          </Styles.Text>
          {department && (
            <>
              <Styles.Icon />
              <Styles.Text>
                <Tooltip text={department ? department : ''} isOverflow>
                  {department}
                </Tooltip>
              </Styles.Text>
            </>
          )}
          {job && (
            <>
              <Styles.Icon />
              <Styles.Text>
                <Tooltip text={job ? job : ''} isOverflow>
                  {job}
                </Tooltip>
              </Styles.Text>
            </>
          )}
        </Styles.Description>
      </Styles.Info>
    </Styles.Wrapper>
  )
}
