import { Toast } from '@/shared/ui'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'
import { RecruitApplicationItem } from '@/entities/build-application/types/applicationItem'
import { Document } from '@/entities/Application/types/ApplicantRequest'

export const documentsValidation = (
  init: PostingApplicationFormResponse,
  documents?: Document[],
) => {
  if (!documents) return true

  const initDocuments =
    init.datas?.find((item: RecruitApplicationItem) => item.key === 'documents')?.documents || []
  return initDocuments.every((initDocument) => {
    const document = documents?.find(
      (document) => `${document?.posting_applicant_form_document_id}` === `${initDocument.id}`,
    )
    const isValid = !(!!initDocument?.is_required && !document?.file_url)
    if (!isValid) {
      Toast.warning(`${initDocument.title}을 업로드해주세요.`)
      return false
    }
    return true
  })
}
