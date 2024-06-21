import { atom } from 'recoil'

export const applicantFilterAtom = atom({
  key: 'applicantFilterAtom',
  default: {
    search: '',
    posting_title: '',
    posting_step: '',
    posting_field: '',
    tag: '',
    applicant_re_url: '',
    size: 30,
  },
})
