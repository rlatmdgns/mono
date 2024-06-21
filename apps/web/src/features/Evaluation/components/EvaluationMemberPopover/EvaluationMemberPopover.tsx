import * as Styles from './styles'
import React from 'react'
import EvaluationMemberPopoverItem from '../EvaluationMemberPopoverItem'
import { ApplicantEvaluationTableMember } from '@/services/evaluation/getApplicantEvaluationTables/getApplicantEvaluationTables.interface'
import { createPortal } from 'react-dom'
import { getPopoverPosition } from '@/features/Evaluation/components/EvaluationMemberPopover/EvaluationMemberPopover.factory'

interface EvaluationMemberPopoverProps {
  isOpen: boolean
  onClose: () => void
  members: ApplicantEvaluationTableMember[]
  containerRef: React.RefObject<HTMLDivElement>
}

const EvaluationMemberPopover = ({
  isOpen,
  onClose,
  members,
  containerRef,
}: EvaluationMemberPopoverProps) => {
  const element = document.getElementById('tooltip') as HTMLElement
  const popoverRef = React.useRef<HTMLUListElement>(null)
  const { top, left } = getPopoverPosition(containerRef.current)

  const handleClickBackground = (event: React.MouseEvent<HTMLElement>) => {
    if (popoverRef.current?.contains(event.target as Node)) return
    onClose()
  }

  if (!isOpen) return null
  const popoverElement = (
    <Styles.Background onClick={handleClickBackground}>
      <Styles.Wrapper ref={popoverRef} $top={top} $left={left}>
        <Styles.List>
          {members?.map((member) => {
            return (
              <EvaluationMemberPopoverItem
                key={member.identification}
                userProfile={member.user_profile}
                userName={member.user_name}
                userAuthority={member.user_authority}
                access={member.access}
              />
            )
          })}
        </Styles.List>
      </Styles.Wrapper>
    </Styles.Background>
  )
  return createPortal(popoverElement, element)
}

export default EvaluationMemberPopover
