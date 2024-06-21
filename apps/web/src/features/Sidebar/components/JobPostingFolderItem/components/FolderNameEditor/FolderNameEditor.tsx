import { useState } from 'react'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import useEditFolderName from '../../../../hooks/useEditFolderName'
import { ModalLayout } from '@/shared/ui'
import InputModal from '@/modals/InputModal'
import { useTranslations } from 'next-intl'

interface Folder {
  folderId: string
  folderName: string
}

const FolderNameEditor = ({ folderId, folderName }: Folder) => {
  const $t = useTranslations()
  const { closeModal } = useModal()
  const { editFolderNameMutate } = useEditFolderName()

  const [folderNameState, setFolderNameState] = useState(folderName)
  const [guideText, setGuideText] = useState('')

  const isDirty = folderName !== folderNameState

  const handleFolderName = (event: React.ChangeEvent<HTMLInputElement>) => {
    validateFolderName(event.target.value.trim())
    setFolderNameState(event.target.value.trim())
  }

  const validateFolderName = (folderNameState: string) => {
    if (!folderNameState) {
      return setGuideText($t('folder_name_editor.folder_name_error'))
    }

    if (folderNameState === folderName) {
      return setGuideText($t('folder_name_editor.is_same_folder_name_error'))
    }

    return setGuideText('')
  }

  const handleEditFolderName = () => {
    editFolderNameMutate({ folderId, folderName: folderNameState })
    handleClose()
  }

  const handleClose = () => {
    closeModal(MODAL.FOLDER_NAME_EDITOR)
  }

  return (
    <ModalLayout isDimmed>
      <InputModal
        value={folderNameState}
        title={$t('folder_name_editor.title')}
        subtitle={$t('folder.name')}
        textSubmit={$t('common.confirm')}
        onSubmit={() => handleEditFolderName()}
        onClose={() => handleClose()}
        onChange={(value: React.ChangeEvent<HTMLInputElement>) => handleFolderName(value)}
        state={guideText ? 'error' : 'success'}
        guideText={guideText}
        disabled={!!guideText || !isDirty}
      />
    </ModalLayout>
  )
}

export default FolderNameEditor
