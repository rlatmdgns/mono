import * as Styles from './styles'
import { InvitedMember } from '@/interface/member'
import useDeleteWaitingRequest from '@/modals/WaitingRequestMemberModal/hooks/useDeleteWaitingRequest'
import { useTranslations } from 'next-intl'
import { IconButton } from '@/shared/ui'
import React from 'react'
import { useGetAuthority } from '@/shared/lib/hooks/useGetAuthority'

interface WaitingRequestMemberBodyProps {
  waitingMember: InvitedMember[]
}

const WaitingRequestMemberBody = ({ waitingMember }: WaitingRequestMemberBodyProps) => {
  const $t = useTranslations('messages')
  const { getAuthority } = useGetAuthority()
  const { deleteWaitingRequestMutate } = useDeleteWaitingRequest()

  const handleMailExpired = (memberId: string) => {
    deleteWaitingRequestMutate(memberId)
  }

  if (waitingMember.length === 0) {
    return (
      <Styles.WaitingRequestMemberBody>
        <Styles.NoList>{$t('empty_waiting_members')}</Styles.NoList>
      </Styles.WaitingRequestMemberBody>
    )
  }

  return (
    <Styles.WaitingRequestMemberBody>
      {waitingMember.map((member) => (
        <Styles.Member key={member.invite_email}>
          <Styles.Text>{member.invite_email}</Styles.Text>
          <Styles.RightBox>
            <Styles.Text>{getAuthority(member.user_authority)}</Styles.Text>
            <IconButton
              icon="icon/cancle-line1"
              onClick={() => handleMailExpired(member.member_id)}
              size="sm"
              color="neutralGray500"
            />
          </Styles.RightBox>
        </Styles.Member>
      ))}
    </Styles.WaitingRequestMemberBody>
  )
}
export default WaitingRequestMemberBody
