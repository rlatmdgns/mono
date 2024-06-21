import { AvatarMultiple } from '@/shared/ui'
import EvaluationMemberPopover from '@/features/Evaluation/components/EvaluationMemberPopover'
import { convertToAvatarMultiple } from '@/features/Evaluation/components/EvaluationTableAvatar/EvaluationTableAvatar.factory'
import { ApplicantEvaluationTableMember } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'
import React, { useRef, useState } from 'react'
import * as Styles from './styles'

interface EvaluationTableAvatarProps {
  evaluationTableStatus: string
  members: ApplicantEvaluationTableMember[]
  isAccess: boolean
}

const EvaluationTableAvatar = ({
  evaluationTableStatus,
  members,
  isAccess,
}: EvaluationTableAvatarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => setIsOpen(!isOpen)
  const handleClose = () => setIsOpen(false)

  if (!isAccess || evaluationTableStatus === 'closed') return null
  return (
    <Styles.Wrapper ref={containerRef}>
      <Styles.Button onClick={handleToggle}>
        <AvatarMultiple members={convertToAvatarMultiple(members)} size="sm" />
      </Styles.Button>
      <EvaluationMemberPopover
        isOpen={isOpen}
        onClose={handleClose}
        members={members}
        containerRef={containerRef}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableAvatar
