import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import useApplicantVote from '@/modals/ApplicantModal/hooks/useApplicantVote'
import { VoteLog } from '@/services/applicant/getApplicantModal/getApplicantModal.interface'
import VoteButton from '@/modals/ApplicantModal/components/ApplicantModalSidebar/VoteButtonBox/VoteButton'
import { useRecoilValue } from 'recoil'
import { applicantIdAtom, applicantModalSidebarIsFoldAtom } from '@/modals/ApplicantModal/recoil'
import { useModal } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface VoteButtonBoxProps {
  applicantState: number
  isEvaluator: boolean
  myVote?: 'pass' | 'fail'
  votePassLog: VoteLog[]
  voteFailLog: VoteLog[]
}

const VoteButtonBox = ({
  applicantState,
  isEvaluator,
  myVote,
  votePassLog,
  voteFailLog,
}: VoteButtonBoxProps) => {
  const { openModal, closeModal } = useModal()
  const applicantId = useRecoilValue(applicantIdAtom)
  const isFold = useRecoilValue(applicantModalSidebarIsFoldAtom)
  const { applicantVoteMutate } = useApplicantVote(applicantId)
  const isPassOrFail = !!applicantState
  const isMyVotePass = myVote === 'pass'
  const isMyVoteFail = myVote === 'fail'

  const $t = useTranslations()

  const getVoteNumber = (voteLog: any[]) => {
    if (isEvaluator) return ''
    if (voteLog.length < 1) return ''
    return ` (${voteLog.length})`
  }

  const handleVote = (vote: string) => {
    const PASS = 0
    const FAIL = 1

    const voteType = vote === 'pass' ? PASS : FAIL
    const isChangeVote = myVote && vote !== myVote

    if (isChangeVote) {
      return openModal(MODAL.CONFIRM, {
        state: 'positive',
        title: $t('messages.vote_change_confirm'),
        onClick: () => {
          applicantVoteMutate(voteType)
          closeModal(MODAL.CONFIRM)
        },
        textConfirm: $t('common.confirm'),
      })
    }
    applicantVoteMutate(voteType)
  }

  return (
    <Styles.Wrapper $isFold={isFold}>
      <VoteButton
        onClick={() => handleVote('pass')}
        text={`${$t('common.agree')} ${getVoteNumber(votePassLog)}`}
        voteLog={votePassLog}
        isEvaluator={isEvaluator}
        disabled={isPassOrFail}
        isVote={isMyVotePass}
        iconSource="icon/thumb-up-solid"
      />
      <VoteButton
        onClick={() => handleVote('fail')}
        text={`${$t('common.disagree')} ${getVoteNumber(voteFailLog)}`}
        voteLog={voteFailLog}
        isEvaluator={isEvaluator}
        disabled={isPassOrFail}
        isVote={isMyVoteFail}
        iconSource="icon/thumb-down-solid"
      />
    </Styles.Wrapper>
  )
}

export default VoteButtonBox
