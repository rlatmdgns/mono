import { API_URL } from '@/shared/constants'
import { serverNestHttp } from '@/shared/lib/serverHttp'
import { PostingApplicationFormResponse } from '@/entities/recruit/types/PostingApplicationForm'

export const getServerPostingApplicantForm = async (id: number | string) => {
  const response = await serverNestHttp.get<PostingApplicationFormResponse>(
    API_URL.POSTING_APPLICANT_FORM(id),
  )
  if (response.datas.length === 0) {
    response.datas = [
      {
        ko: '이력서',
        en: 'Documents',
        icon: 'icon/document-line',
        key: 'resume',
        is_required: true,
        is_canview: true,
        is_note: false,
      },
    ]
  }
  return response
}
