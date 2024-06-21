import { QUERY_KEY } from '@/shared/constants'
import { Postings } from '@/interface/postings'
import { Folder } from '@/interface/sidebar'
import getInvitedPostings from '@/services/posting/getInvitedPostings'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

export const useInvitedPostings = (initialFolder?: Postings) => {
  const $t = useTranslations('folder')
  const { data } = useQuery({
    queryKey: [QUERY_KEY.INVITED_POSTINGS],
    queryFn: getInvitedPostings,
    initialData: initialFolder,
  })

  if (!data) {
    return {
      data: undefined,
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

  return {
    folders,
    postingOptions,
  }
}
