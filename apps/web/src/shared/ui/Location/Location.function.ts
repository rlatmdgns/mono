export const getInterviewTypeIcon = (type: string) => {
  switch (type) {
    case '전화 면접':
      return 'icon/phone-solid'
    case '화상 면접':
      return 'icon/video-solid'
    default:
      return 'icon/map-solid'
  }
}
