import { Dropdown } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import useDeleteApplicantFile from '@/modals/ApplicantModal/hooks/useDeleteApplicantFile'
import { useLocale, useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface DeleteFileButtonProps {
  id: number
  isResume: boolean
  onToggleClosed: (status: boolean) => void
}

const DeleteFileButton = ({ id, isResume, onToggleClosed }: DeleteFileButtonProps) => {
  const $t = useTranslations()
  const currentLocale = useLocale()
  const { openModal, closeModal } = useModal()

  const { deleteApplicantFileMutate } = useDeleteApplicantFile()

  const deleteFile = () => {
    deleteApplicantFileMutate(`${id}`)
    closeModal(MODAL.CONFIRM)
  }

  const getDeleteText = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          If deleted, the document will be removed from the list and <br />
          cannot be recovered.
        </>
      )
    }
    return (
      <>
        삭제할 시 해당 서류는 목록에서 제거되며 <br />
        복구가 불가능합니다.
      </>
    )
  }

  const handleDeleteFile = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('messages.delete_document_confirm'),
      subtitle: getDeleteText(),
      iconSource: 'icon/delete-solid',
      textConfirm: $t('common.delete'),
      onClick: () => {
        deleteFile()
        onToggleClosed(false)
      },
    })
  }

  if (isResume) return null

  return (
    <>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleDeleteFile} size="lg" isWarning>
        <Icon icon="icon/delete-line" color="red500" />
        {$t('common.delete_document')}
      </Dropdown.Item>
    </>
  )
}

export default DeleteFileButton
