import { JobPosting } from '@/interface/jobPosting'
import { Folder } from '@/interface/sidebar'

export interface Postings {
  folder_list: Folder[]
  none_folder: JobPosting[]
  success: boolean
}
