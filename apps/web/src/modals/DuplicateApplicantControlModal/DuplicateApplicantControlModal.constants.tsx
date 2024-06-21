import { BlockingTypes, DuplicateApplicantsControlItem } from './interface'

export const DUPLICATE_APPLICANTS_CONTROL_ITEMS: DuplicateApplicantsControlItem[] = [
  {
    title: '재 지원 제한',
    description: '마감된 공고에 지원 이력이 있는 지원자의 지원을 제한합니다.',
    type: 'can_re_apply',
  },
  {
    title: '복수 지원 제한',
    description: '서로 다른 2개 이상의 공고에 지원을 제한합니다.',
    type: 'can_multiple_apply',
  },
  {
    title: '중복 지원 제한',
    description: (
      <>
        동일 공고에 2회 이상 지원을 제한합니다.
        <br />
        (비활성화, 마감 공고 제외)
      </>
    ),
    type: 'can_duplicate_apply',
  },
]

export const BLOCKING_TYPES: BlockingTypes = {
  can_re_apply: 'isReApplyBlocked',
  can_multiple_apply: 'isMultipleApplyBlocked',
  can_duplicate_apply: 'isDuplicateApplyBlocked',
}
