export const getConvertObjectKey = (key: string) => {
  switch (key) {
    case 'enterprise_name':
      return '기업명'

    case 'posting_title':
      return '공고명'

    case 'interview_location':
      return '면접 장소'

    case 'interview_date':
      return '면접 일정 정보'

    case 'applicant_name':
      return '면접자 이름'

    case 'applicant_phone':
      return '면접자 전화번호'

    case 'applicant_email':
      return '면접자 이메일'

    case 'application_date':
      return '지원 일시'

    default:
      return ''
  }
}
