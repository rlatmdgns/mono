import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { Dropdown, IconButton } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { withAuth } from '@/shared/lib'

import useDeleteFolder from '@/features/Sidebar/hooks/useDeleteFolder'
import { useLocale, useTranslations } from 'next-intl'

interface FolderManagementDropdownProps {
  folderId: string
  folderName: string | undefined
  isOvered: boolean
}

const FolderManagementDropdown = ({
  folderId,
  folderName,
  isOvered,
}: FolderManagementDropdownProps) => {
  const { openModal, closeModal } = useModal()
  const { deleteFolderMutate } = useDeleteFolder()
  const $t = useTranslations()
  const currentLocale = useLocale()

  const getSubTitleText = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          Recruitment postings within the folder will not be deleted.
          <br />
          Please check in the 'No Folder' area.
        </>
      )
    }
    return (
      <>
        폴더 안에 있는 채용 공고들은 삭제되지 않습니다.
        <br />
        폴더 없음 영역에서 확인해 주세요.
      </>
    )
  }

  const handleFolderNameEditor = () => {
    openModal(MODAL.FOLDER_NAME_EDITOR, {
      folderId: folderId,
      folderName: folderName,
    })
  }

  const deleteFolder = async () => {
    deleteFolderMutate(folderId)
    await closeModal(MODAL.CONFIRM)
  }

  const handleFolderDeleter = () => {
    openModal(MODAL.CONFIRM, {
      title: $t('messages.delete_folder_confirm'),
      subtitle: getSubTitleText(),
      textConfirm: $t('common.delete'),
      iconSource: 'icon/delete-solid',
      onClick: () => deleteFolder(),
      onClose: () => closeModal(MODAL.CONFIRM),
    })
  }

  if (!isOvered) return null

  return (
    <Dropdown button={<IconButton size="xs" icon="icon/more-solid" />}>
      <Dropdown.Item onClick={handleFolderNameEditor}>
        <Icon icon="icon/edit-solid" color="neutralGray500" />
        {$t('folder.change')}
      </Dropdown.Item>
      <Dropdown.Item onClick={handleFolderDeleter} isWarning={true}>
        <Icon icon="icon/delete-solid" color="red500" />
        {$t('folder.delete')}
      </Dropdown.Item>
    </Dropdown>
  )
}

export default withAuth(FolderManagementDropdown)
