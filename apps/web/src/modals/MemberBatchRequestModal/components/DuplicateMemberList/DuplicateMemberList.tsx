import { InviteMember, Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import * as Styles from '@/modals/MemberBatchRequestModal/container/MemberBatchList/styles'
import { DuplicateMembersAtom } from '@/modals/MemberBatchRequestModal/recoil/atom'
import { useRecoilState } from 'recoil'
import { useTranslations } from 'next-intl'

const DuplicateMemberList = () => {
  const [duplicateMember, setDuplicateMember] = useRecoilState(DuplicateMembersAtom)
  const $t = useTranslations()
  const handleDeleteMember = (index: number) => {
    const containMembers = duplicateMember.slice(index, 1)

    setDuplicateMember([...containMembers])
  }
  if (duplicateMember.length === 0) return
  return (
    <Styles.MemberList>
      <Styles.Title>
        {$t('common.duplicate')} ({duplicateMember.length})
        <Tooltip text={$t('messages.duplicate_member_message')} direction="right">
          <Icon icon="icon/warning-solid" color="red500" />
        </Tooltip>
      </Styles.Title>
      {duplicateMember.map((data: any, index: number) => {
        return (
          <InviteMember
            key={`duplicate_member_${index}`}
            formKey={`duplicate_member_${index}`}
            data={data}
            isChange={true}
            isDelete={true}
            onDelete={() => handleDeleteMember(index)}
          />
        )
      })}
    </Styles.MemberList>
  )
}
export default DuplicateMemberList
