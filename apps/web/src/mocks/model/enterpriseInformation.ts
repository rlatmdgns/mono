import { faker } from '@faker-js/faker'

export const enterPriseInformationMockData = {
  application_blocking: 3,
  enterprise_address: '서울 성북구 아리랑로 3',
  enterprise_background: [
    {
      file_state: 1,
      file_url: faker.image.urlPicsumPhotos(),
    },
  ],
  enterprise_detail_address: 'qweqwew',
  enterprise_email: 'poollab@steadhr.com',
  enterprise_explanation: 'tttttt',
  enterprise_logo: faker.image.urlPicsumPhotos(),
  enterprise_name: '풀랩',
  enterprise_recruit_url: 'poollab',
  enterprise_work_place: ['서울 마포구 백범로31길 21 서울창업허브 801'],
}
