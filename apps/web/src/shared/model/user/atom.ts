import { atom } from 'recoil'
import { Auth } from '@/interface/auth'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userAtom = atom<Auth>({
  key: 'userAtom',
  default: {
    login_type: '',
    token: '',
    user_type: 0,
    user_email: '',
    enterprise: {
      enterprise_name: '',
      enterprise_id: 0,
      user_authority: '',
      enterprise_email: false,
      plan: false,
    },
  },
  effects_UNSTABLE: [persistAtom],
})
