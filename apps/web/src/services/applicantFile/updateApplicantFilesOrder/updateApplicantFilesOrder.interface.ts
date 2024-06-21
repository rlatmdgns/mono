export interface UpdateApplicantFilesOrderRequest {
  file_id: string
  body: {
    direction: 'front' | 'back'
  }
}
