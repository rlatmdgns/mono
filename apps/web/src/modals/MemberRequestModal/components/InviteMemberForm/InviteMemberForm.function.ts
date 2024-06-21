export const getErrorMember = (error: string) => {
  switch (error) {
    case 'invalid_member':
      return '기업 도메인이 일치하지 않습니다.'
    case 'registered_member':
      return '이미 가입된 계정입니다.'
    case 'invited_member':
      return '이미 초대된 계정입니다.'
    default:
      return ''
  }
}
