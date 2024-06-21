import { AwardKeys } from '@/entities/Application/types/ApplicationItemKeys'

export const AWARD_DEFAULT_VALUE = {
  is_award: true,
  description: '',
  organization: '',
  award_date: null,
  detail_description: '',
}

export const AWARD_ITEM_KEYS: AwardKeys[] = [
  'description',
  'organization',
  'award_date',
  'detail_description',
]
