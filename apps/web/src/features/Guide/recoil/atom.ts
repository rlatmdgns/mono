import { atom, RecoilState } from 'recoil'
import { Guides } from '@/features/Guide/Guide.interface'

export const IsGuideOpenAtom = atom({
  key: 'IsGuideOpen',
  default: false,
})
export const GuideStepAtom = atom({
  key: 'GuideStep',
  default: 0,
})

export const GuideDetailInfoAtom: RecoilState<Guides> = atom({
  key: 'GuideDetailInfo',
  default: {
    title: '',
    id: '',
  },
})
