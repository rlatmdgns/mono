import { APPLICATION_VIEWER_NAMES } from '@/entities/application-viewer/constants'

export const APPLICATION_ITEM_NAMES: { [key: string]: string } = {
  name: '이름',
  phone: '전화번호',
  email: '이메일',
  resume: '이력서',
  road_address: '거주지',
  profile_image: '지원자 사진',
  ...APPLICATION_VIEWER_NAMES,
}
