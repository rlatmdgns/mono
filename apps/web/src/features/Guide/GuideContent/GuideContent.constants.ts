import { Guides } from '@/features/Guide/Guide.interface'
import { GUIDES } from '@/shared/constants'

export const GuidesContent: Guides[] = [
  {
    title: '채용공고 만들기',
    id: 'recruit',
    next: {
      id: 'member',
      title: '멤버 관리',
    },
    images: GUIDES.RECRUIT,
  },
  {
    title: '멤버들과 협업하기',
    id: 'member',
    next: {
      id: 'communication',
      title: '지원자 소통',
    },
    images: GUIDES.RECRUIT,
  },
  {
    title: '지원자와 소통하기',
    id: 'communication',
    images: GUIDES.RECRUIT,
  },
  {
    title: '상세 기능 살펴보기',
    id: 'detail',
  },
]
