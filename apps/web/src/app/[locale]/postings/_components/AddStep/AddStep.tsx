import React from 'react'
import * as Styles from './styles'
import useAddStep from '@/app/[locale]/postings/_hooks/useAddStep'
import { withAuth } from '@/shared/lib'
import { Icon } from '@repo/ui'

interface AddStepProps {
  postingId: string
  isAdditionalArea: boolean
}

const AddStep = ({ postingId, isAdditionalArea }: AddStepProps) => {
  const { addStepMutate } = useAddStep(postingId)

  const handleClick = () => {
    addStepMutate()
  }

  if (!isAdditionalArea) {
    return null
  }
  return (
    <Styles.Button onClick={handleClick}>
      <Icon icon="icon/add-solid" color="blue500" />
    </Styles.Button>
  )
}

export default withAuth(AddStep)
