import { faker } from '@faker-js/faker'
import { AUTHORITY } from '@/shared/constants'

export const userMockData = {
  can_alert_applicant_responses: true,
  can_alert_interview_fixed: true,
  can_alert_interview_reminders: true,
  can_alert_new_applicants: true,
  CONNECT_GOOGLE: { connect: false },
  success: true,
  user_authority: AUTHORITY.ADMIN,
  user_department: null,
  user_email: faker.internet.email(),
  user_job: null,
  user_login_type: 'default',
  user_name: faker.person.fullName(),
  user_phone: '01093793076',
  user_profile: faker.image.avatar(),
}
