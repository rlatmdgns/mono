import { useCreateFolder, useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { MODAL } from '@/shared/constants'
import { Toast } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

const CreateFolderButton = () => {
  const $t = useTranslations()
  const { createFolderMutate } = useCreateFolder()
  const { openModal, closeModal } = useModal()

  const createFolder = (value?: string) => {
    if (!value) {
      return Toast.error($t('create_folder_button.placeholder'))
    }
    try {
      createFolderMutate(value)
      closeModal(MODAL.INPUT)
    } catch (error) {
      console.error(error)
    }
  }
  const handleCreateFolder = () => {
    openModal(MODAL.INPUT, {
      title: $t('create_folder_button.title'),
      subtitle: $t('folder.name'),
      placeholder: $t('create_folder_button.placeholder'),
      textSubmit: $t('common.save'),
      onSubmit: createFolder,
    })
  }

  return (
    <Styles.Wrapper onClick={handleCreateFolder}>
      <Icon icon="icon/folder-solid" color="neutralGray300" />
    </Styles.Wrapper>
  )
}

export default withAuth(CreateFolderButton)
