import { atom } from 'recoil'
import { Memo } from '@/services/applicant/getApplicantMemo/getApplicantMemo.interface'
import { useState } from 'react'

export const MemosAtom = atom<Memo[]>({
  key: 'memos',
  default: [],
})

export const IsMyMemoAtom = atom({
  key: 'isMyMemo',
  default: false,
})

export const IsMemoEditorActiveAtom = atom({
  key: 'isMemoEditorActive',
  default: false,
})

export const MemoAtom = atom<Memo>({
  key: 'memo',
  default: {
    applicant_memo_id: 0,
    applicant_memo_title: '',
    applicant_memo_description: '',
    user_name: '',
    user_profile: '',
    is_access: false,
  },
})
