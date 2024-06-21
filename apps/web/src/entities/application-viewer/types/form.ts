export interface ApplicationViewerItemForm {
  key: string
  id: number
  is_required: boolean
  is_canview: boolean
  is_delete: boolean
  created_at: string | null
  updated_at: string | null
  title?: string
}
