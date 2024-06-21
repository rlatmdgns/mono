import { AUTHORITY, MODAL } from '@/shared/constants'
import { Dropdown, IconBoxButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { useAuthority, useModal } from '@/shared/hooks'
import useDeleteApplicant from '@/modals/ApplicantModal/hooks/useDeleteApplicant'

import { applicantIdAtom } from '@/modals/ApplicantModal/recoil'

import { useRecoilValue } from 'recoil'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

interface MenuDropdownProps {
  onClose: () => void
}

const MenuDropdown = ({ onClose }: MenuDropdownProps) => {
  const { openModal, closeModal } = useModal()
  const { authority } = useAuthority()
  const $t = useTranslations()

  const applicantId = useRecoilValue(applicantIdAtom)
  const { deleteApplicantMutate } = useDeleteApplicant()
  const isAdminMember = authority === AUTHORITY.ADMIN

  const [isClosed, setIsClosed] = useState(true)

  const handleClosedToggle = (status: boolean) => {
    setIsClosed(status)
  }
  const handleApplicantDelete = () => {
    openModal(MODAL.CONFIRM, {
      iconSource: 'icon/delete-solid',
      title: $t('messages.delete_applicant_title'),
      subtitle: $t('messages.delete_applicant_description'),
      onClick: () => {
        deleteApplicantMutate(applicantId)
        closeModal(MODAL.CONFIRM)
        onClose()
        handleClosedToggle(false)
      },
      onClose: () => {
        closeModal(MODAL.CONFIRM)
        handleClosedToggle(false)
      },
    })
  }

  if (!isAdminMember) return null
  return (
    <Dropdown
      button={
        <IconBoxButton
          icon="icon/more-solid"
          state="standard"
          size="xs"
          onClick={() => handleClosedToggle(true)}
        />
      }
      direction={'left'}
      isNotPortal
      isParentStatusClosed={isClosed}
    >
      {/*<Dropdown.Item>*/}
      {/*  <Icon icon="icon/copy-solid" color="neutralGray600" />*/}
      {/*  지원자 복사*/}
      {/*</Dropdown.Item>*/}
      {/*<Dropdown.Item>*/}
      {/*  <Icon icon="icon/share-solid" color="neutralGray500" />*/}
      {/*  지원자 이동*/}
      {/*</Dropdown.Item>*/}
      {/*<Dropdown.Divider />*/}
      <Dropdown.Item isWarning onClick={handleApplicantDelete}>
        <Icon icon="icon/delete-solid" color="red500" />
        {$t('common.delete_applicant')}
      </Dropdown.Item>
    </Dropdown>
  )
}

export default MenuDropdown
