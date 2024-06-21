import { useRecoilState, useSetRecoilState } from 'recoil'
import {
  MemberBatchResetStateAtom,
  RequestMembersAtom,
} from '@/modals/MemberBatchRequestModal/recoil/atom'
import { InviteMember, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from '@/modals/MemberBatchRequestModal/container/MemberBatchList/styles'
import { useTranslations } from 'next-intl'

interface InviteMemberListProps {
  errorRows: number[]
}

const InviteMemberList = ({ errorRows }: InviteMemberListProps) => {
  const [requestMember, setRequestMember] = useRecoilState(RequestMembersAtom)
  const setIsCallClear = useSetRecoilState(MemberBatchResetStateAtom)
  const $t = useTranslations()

  const handleDeleteMember = (email: string) => {
    const newRequestMember = requestMember.filter((member: any) => member.email !== email)
    setRequestMember(newRequestMember)

    if (newRequestMember.length === 0) {
      setIsCallClear(true)
    }
  }

  const errorMessage = errorRows.slice(0, 15).map((row) => {
    return $t('number_row', { row })
  })

  const tooltipErrorMessage =
    errorMessage.length >= 15 ? `${errorMessage.join(', ')} 등` : errorMessage.join(', ')

  if (requestMember.length === 0) return

  return (
    <Styles.MemberList>
      {tooltipErrorMessage && (
        <Styles.Error>
          <Icon icon="icon/info-solid" color="red500" />
          <Styles.ErrorMessage>
            {$t('setting.member_setting.invalid_member_delete')}
          </Styles.ErrorMessage>
        </Styles.Error>
      )}
      <Styles.Title>
        초대 ({requestMember.length})
        {tooltipErrorMessage && (
          <Tooltip
            text={$t('setting.member_setting.request_member_error_tooltip')}
            direction="right"
          >
            <Icon icon="icon/warning-solid" color="red500" />
          </Tooltip>
        )}
      </Styles.Title>
      {requestMember.map((data: any, index: number) => {
        return (
          <InviteMember
            key={`invite_member_${index}`}
            formKey={`invite_member_${index}`}
            data={data}
            isChange={true}
            isDelete={true}
            onDelete={() => handleDeleteMember(data.email)}
          />
        )
      })}
    </Styles.MemberList>
  )
}
export default InviteMemberList
