export interface TemporaryFileResponse {
  success: boolean
  temporary: {
    url: string
    file_name: string
  }
}
