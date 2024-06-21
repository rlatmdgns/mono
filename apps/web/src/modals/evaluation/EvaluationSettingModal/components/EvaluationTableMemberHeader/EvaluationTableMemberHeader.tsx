import * as Styles from './styles'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Button, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { PostingMember } from '@/interface/posting'
import { useFormContext } from 'react-hook-form'
import { EvaluationMember } from '@/interface/evaluation'
import React from 'react'
import { useTranslations } from 'next-intl'

interface EvaluationTableMemberHeaderProps {
  postingMembers: PostingMember[]
  evaluationMembers: EvaluationMember[]
}

const EvaluationTableMemberHeader = ({
  postingMembers,
  evaluationMembers,
}: EvaluationTableMemberHeaderProps) => {
  const { openModal } = useModal()
  const { watch } = useFormContext()
  const $t = useTranslations()
  const selectedMembers =
    watch('evaluationMembers')?.length < 1 ? evaluationMembers : watch('evaluationMembers')
  const selectedMemberIds =
    selectedMembers?.map((member: EvaluationMember) => member.identification) || []

  const handleUpdateMember = () => {
    openModal(MODAL.UPDATE_EVALUATION_MEMBER, {
      selectedMemberIds,
      postingMembers,
    })
  }

  return (
    <Styles.Wrapper>
      <Styles.Title>
        {$t('common.evaluation_member')}
        <Tooltip
          text={$t('evaluation.evaluation_member_control_view_description')}
          direction="right"
        >
          <Icon icon="icon/info-solid" color="neutralGray300" />
        </Tooltip>
      </Styles.Title>
      <Button
        onClick={handleUpdateMember}
        iconSource="icon/edit-solid"
        text={$t('common.edit_action')}
        width="fit-content"
        style="mono"
        size="xs"
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableMemberHeader
