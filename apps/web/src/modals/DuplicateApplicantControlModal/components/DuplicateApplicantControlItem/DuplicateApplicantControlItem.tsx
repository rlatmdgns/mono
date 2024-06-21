import { PostingBlocking } from '../../interface'
import { BLOCKING_TYPES } from '../../DuplicateApplicantControlModal.constants'
import { Switch } from '@/shared/ui'
import useUpdatePostingBlocking from '../../hooks/useUpdatePostingBlocking'
import * as Styles from './styles'
import React, { useState } from 'react'

interface DuplicateApplicantControlItemProps {
  id: number
  title: string
  desc: string | React.ReactNode
  type: string
  isReApplyBlocked: boolean
  isMultipleApplyBlocked: boolean
  isDuplicateApplyBlocked: boolean
}

const DuplicateApplicantControlItem = ({
  id,
  title,
  desc,
  type,
  isReApplyBlocked,
  isMultipleApplyBlocked,
  isDuplicateApplyBlocked,
}: DuplicateApplicantControlItemProps) => {
  const postingBlocking: PostingBlocking = {
    isReApplyBlocked: isReApplyBlocked,
    isMultipleApplyBlocked: isMultipleApplyBlocked,
    isDuplicateApplyBlocked: isDuplicateApplyBlocked,
  }
  const blockingType = BLOCKING_TYPES[type]

  const [checked, setChecked] = useState(postingBlocking[blockingType])

  const { updatePostingBlockingMutate } = useUpdatePostingBlocking(id, () => setChecked(!checked))

  const handlePostingBlockingUpdate = async () => {
    await updatePostingBlockingMutate(type)
  }

  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.TextContainer>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Description>{desc}</Styles.Description>
        </Styles.TextContainer>
        <Styles.SwitchContainer>
          <Switch size="xs" onChange={() => handlePostingBlockingUpdate()} isChecked={checked} />
        </Styles.SwitchContainer>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default DuplicateApplicantControlItem
