import { Language } from '@/entities/Application/types/ApplicantRequest'
import { LanguageKeys } from '@/entities/Application/types'

export const LANGUAGE_TYPES = [
  {
    value: '한국어',
    label: '한국어',
    objectKey: 'KO',
  },
  {
    value: '중국어',
    label: '중국어',
    objectKey: 'ZH',
  },
  {
    value: '일본어',
    label: '일본어',
    objectKey: 'JA',
  },
  {
    value: '이탈리아어',
    label: '이탈리아어',
    objectKey: 'IT',
  },
  {
    value: '영어',
    label: '영어',
    objectKey: 'EN',
  },
  {
    value: '스페인어',
    label: '스페인어',
    objectKey: 'ES',
  },
  {
    value: '불어',
    label: '불어',
    objectKey: 'FR',
  },
  {
    value: '러시아어',
    label: '러시아어',
    objectKey: 'RU',
  },
  {
    value: '독일어',
    label: '독일어',
    objectKey: 'DEs',
  },
  {
    value: '기타',
    label: '기타',
    objectKey: 'ETC',
  },
]

export const LANGUAGE_DEFAULT_VALUE: Language = {
  is_language: true,
  type: '',
  category: '',
  score: '',
  level: '',
  exam_date: null,
  qualification_number: '',
}

export const LANGUAGE_ITEM_KEYS: LanguageKeys[] = [
  'category',
  'type',
  'exam_date',
  'qualification_number',
]
