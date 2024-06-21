import { LanguageSelect } from '@/entities/Application/types/languages'

export const LANGUAGE_SELECT_KO: LanguageSelect = [
  {
    name: '국어능력인증시험',
    score: 200,
    level: ['1', '2', '3', '4', '5'],
  },
  {
    name: '한국어 교원자격증',
  },
  {
    name: 'KBS 한국어능력시험',
    level: ['1', '2+', '2-', '3+', '3-', '4+', '4-'],
  },
  {
    name: 'TOPIK',
    level: ['1', '2', '3', '4', '5', '6'],
  },
  {
    name: 'OPI',
    level: [
      'Superior',
      'Advanced High',
      'Advanced Mid',
      'Advanced Low',
      'intermediate High',
      'intermediate Mid',
      'intermediate Low',
      'Novice High',
      'Novice Mid',
      'Novice Low',
    ],
  },
]
