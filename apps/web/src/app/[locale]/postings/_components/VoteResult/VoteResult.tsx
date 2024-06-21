import React from 'react'
import * as Styles from './styles'
import { Icon } from '@repo/ui'

interface VoteResultProps {
  passCount?: number
  failCount?: number
}

const VoteResult = ({ passCount, failCount }: VoteResultProps) => {
  return (
    <Styles.Wrapper>
      <Icon icon="icon/thumb-up-solid" color="neutralGray400" />
      {passCount}
      <Icon icon="icon/thumb-down-solid" color="neutralGray400" />
      {failCount}
    </Styles.Wrapper>
  )
}

export default VoteResult
