import * as Styles from './styles'

import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown, IconButton } from '@/shared/ui'

import useDeleteMemo from '@/features/Memo/hooks/useDeleteMemo'
import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'

import { useRecoilValue } from 'recoil'
import { useTranslations } from 'next-intl'

interface MemoDropDownProps {
  applicant_memo_id: string
}

const MemoDropdown = ({ applicant_memo_id }: MemoDropDownProps) => {
  const $t = useTranslations()
  const { openModal, closeModal } = useModal()
  const applicantId = useRecoilValue(applicantIdAtom)

  const { deleteMemoMutate } = useDeleteMemo(applicantId, applicant_memo_id)

  const handleDelete = () => {
    openModal(MODAL.CONFIRM, {
      state: 'negative',
      title: $t('memo.delete_memo_title'),
      iconSource: 'icon/warning-solid',
      onClick: () => {
        deleteMemo()
        closeModal(MODAL.CONFIRM)
      },
      onClose: () => closeModal(MODAL.CONFIRM),
      textConfirm: $t('common.delete_action'),
    })
  }

  const deleteMemo = () => {
    deleteMemoMutate()
  }

  return (
    <Dropdown
      button={<IconButton icon="icon/more-solid" state="standard" size="xs" />}
      direction={'right'}
      isNotPortal
      isAutoClose
    >
      <Styles.ItemWrap>
        <Dropdown.Item onClick={handleDelete} isWarning>
          {$t('common.delete')}
        </Dropdown.Item>
      </Styles.ItemWrap>
    </Dropdown>
  )
}

export default MemoDropdown
