import * as Styles from './styles'
import React from 'react'
import { Icon } from '@repo/ui'

interface MemberCountBadgeProps {
  children?: React.ReactNode
}

const MemberCountBadge = ({ children }: MemberCountBadgeProps) => {
  return (
    <Styles.Wrapper>
      <Icon icon="icon/person-solid" color="neutralGray600" />
      <Styles.Text>{children}</Styles.Text>
    </Styles.Wrapper>
  )
}

export default MemberCountBadge
