'use client'

import * as Styles from './styles'
import { Button, IconBoxButton, HoverDropdown } from '@/shared/ui'
import { VoteLog } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import VoteMemberList from '@/modals/ApplicantModal/components/ApplicantModalSidebar/VoteButtonBox/VoteMemberList'
import { useRecoilValue } from 'recoil'
import { applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'

interface VoteButtonProps {
  onClick: () => void
  text: string
  voteLog: VoteLog[]
  isEvaluator: boolean
  disabled: boolean
  isVote: boolean
  iconSource: 'icon/thumb-up-solid' | 'icon/thumb-down-solid'
}

const VoteButton = ({
  onClick,
  text,
  voteLog,
  isEvaluator,
  disabled,
  isVote,
  iconSource,
}: VoteButtonProps) => {
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const isDisabled = isEvaluator || voteLog.length < 1

  if (isFold) {
    return (
      <Styles.Wrapper $isFold>
        <HoverDropdown
          button={
            <IconBoxButton
              onClick={onClick}
              disabled={disabled}
              state="standard"
              style={isVote ? 'fill-strong' : 'fill-weak'}
              icon={iconSource}
              size="xs"
            />
          }
          direction="left"
          disabled={isDisabled}
          isNotPortal
        >
          <VoteMemberList members={voteLog} />
        </HoverDropdown>
      </Styles.Wrapper>
    )
  }

  return (
    <Styles.Wrapper>
      <HoverDropdown
        button={
          <Button
            onClick={onClick}
            disabled={disabled}
            state="standard"
            style={isVote ? 'fill-strong' : 'fill-weak'}
            iconSource={iconSource}
            size="sm"
            text={text}
          />
        }
        direction="left"
        disabled={isDisabled}
        isNotPortal
      >
        <VoteMemberList members={voteLog} />
      </HoverDropdown>
    </Styles.Wrapper>
  )
}

export default VoteButton
