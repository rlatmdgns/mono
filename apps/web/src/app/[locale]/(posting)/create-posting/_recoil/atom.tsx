import { atom } from 'recoil'

export const creatPostingStepAtom = atom<number>({
  key: 'creatPostingStepAtom',
  default: 1,
})

export const templateIdAtom = atom<string>({
  key: 'templateIdAtom',
  default: '',
})

export const createPostingResultAtom = atom({
  key: 'createPostingResultAtom',
  default: {
    posting_id: 0,
    recruit_url: '',
    success: false,
  },
})
