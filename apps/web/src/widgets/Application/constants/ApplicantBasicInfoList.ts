import { BasicApplicationItem } from '@/entities/build-application/types/applicationItem'

export const APPLICANT_BASIC_INFO_LIST: BasicApplicationItem[] = [
  {
    ko: '이름',
    en: 'Name',
    placeholder: '예) 홍길동',
    key: 'name',
    errorMessage: '정확한 이름을 입력해주세요.',
    is_required: true,
    is_canview: true,
    isBasic: true,
  },
  {
    ko: '전화번호',
    en: 'Phone',
    placeholder: '전화번호를 입력해주세요.',
    key: 'phone',
    errorMessage: '-을 제외한 11자리의 전화번호를 입력해주세요.',
    is_required: true,
    is_canview: false,
    isBasic: true,
  },
  {
    ko: '이메일',
    en: 'Email',
    placeholder: '이메일을 입력해주세요.',
    key: 'email',
    errorMessage: '올바른 이메일 형식을 입력해주세요.',
    is_required: true,
    is_canview: false,
    isBasic: true,
  },
]
