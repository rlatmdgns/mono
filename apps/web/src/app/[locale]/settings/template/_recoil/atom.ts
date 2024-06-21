import { atom } from 'recoil'

export const settingTemplateIdAtom = atom<string>({
  key: 'settingTemplateIdAtom',
  default: '',
})
