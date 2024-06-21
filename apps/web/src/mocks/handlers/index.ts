import { signInHandler } from '@/mocks/handlers/signIn'
import { homeHandler } from '@/mocks/handlers/home'
import { tokenHandler } from '@/mocks/handlers/token'
import { sidebarHandler } from '@/mocks/handlers/sidebar'
import { userHandler } from '@/mocks/handlers/user'
import { enterPriseInformationHandler } from '@/mocks/handlers/enterpriseInformation'
import { folderHandler } from '@/mocks/handlers/folder'
import { postingHandler } from '@/mocks/handlers/posting'
import { applicantsHandler } from '@/mocks/handlers/applicants'

export const handlers = [
  ...signInHandler,
  ...tokenHandler,
  ...homeHandler,
  ...sidebarHandler,
  ...userHandler,
  ...enterPriseInformationHandler,
  ...folderHandler,
  ...postingHandler,
  ...applicantsHandler,
]
