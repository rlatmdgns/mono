import { QUERY_KEY } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { Folder } from '@/interface/sidebar'
import getPostings from '@/services/posting/getPostings'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

export const usePostings = (initialData?: Postings) => {
  const $t = useTranslations('folder')
  const { data, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.POSTINGS],
    queryFn: getPostings,
    initialData,
  })

  if (!data) {
    return {
      data: undefined,
      isSuccess,
      postingOptions: [],
    }
  }

  const folders = [
    ...data.folder_list,
    {
      folder_id: 'null',
      folder_name: $t('folder_none'),
      postings: data?.none_folder,
    },
  ]
  const createPostingOptions = (folders?: Folder[]) => {
    if (!folders) return []

    return folders?.map((folder) => ({
      value: folder.folder_id,
      label: folder.folder_name,
      options: folder.postings?.map((posting) => ({
        value: posting.posting_id,
        label: posting.posting_title,
      })),
    }))
  }

  const postingOptions = createPostingOptions(folders)

  return { data, isSuccess, folders, postingOptions }
}
