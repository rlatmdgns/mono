import { Folder } from '@/interface/sidebar'

export interface FolderSortRequest {
  folder_id: string
  to: string
}

export interface FolderSortResponse {
  folder_list: Folder[]
  to: string
}
