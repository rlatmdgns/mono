interface StepsData {
  id: number
  title: string
}

interface Steps {
  [index: string]: StepsData[]
}

export const STEPS: Steps = {
  ko: [
    { id: 1, title: '공고 내용 작성' },
    { id: 2, title: '채용 멤버 설정' },
    { id: 3, title: '공고 생성' },
  ],
  en: [
    { id: 1, title: 'Write Job Description' },
    { id: 2, title: 'Set Hiring Members' },
    { id: 3, title: 'Create Job Posting' },
  ],
}
