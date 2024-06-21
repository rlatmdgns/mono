import { Folder } from '@/interface/sidebar'
import { useTranslations } from 'next-intl'
import { IconNames } from "@repo/ui/src/components/Icon";

interface newFolderProps extends Folder {
  iconSource?: IconNames
}

export const useCreatePostingFieldFactory = () => {
  const $t = useTranslations()
  const createFolderOptions = (folders?: Folder[]) => {
    if (!folders) return []
    const newFolder = [
      {folder_id: 'null', folder_name: $t('folder.none_folder_select')},
      ...folders,
      {
        folder_id: 'createFolder',
        folder_name: $t('create_folder_button.title'),
        iconSource: 'icon/add-solid',
      },
    ] as newFolderProps[]
    return newFolder.map((folder) => {
      return {
        label: folder.folder_name,
        value: folder.folder_id,
        iconSource: folder.iconSource,
        isOverflowTooltip: true,
        maxLength: 16,
      }
    })
  }

  return {createFolderOptions}
}
