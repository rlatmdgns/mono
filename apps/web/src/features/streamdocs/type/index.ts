export interface UploadStreamDocsRequest {
  id: number
  type: UploadType
}

export type UploadType = 'original' | 'masking'
