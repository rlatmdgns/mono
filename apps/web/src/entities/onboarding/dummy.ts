import { OnboardingGuide, SceneMemberItem } from './types'

export const SCENARIO_BOOKS_DUMMY = [
  {
    id: '2131sada',
    title: '전사 온보딩',
    description: '전사에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2132sada',
    title: '디자이너 온보딩',
    description: '디자인팀에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2133sada',
    title: '개발자 온보딩',
    description: '개발팀에게 적용하는 온보딩 시나리오입니다. 많은 관심 부탁드립니다!',
  },
  {
    id: '2131sada',
    title: '전사 온보딩',
    description: '전사에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2132sada',
    title: '디자이너 온보딩',
    description: '디자인팀에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2133sada',
    title: '개발자 온보딩',
    description: '개발팀에게 적용하는 온보딩 시나리오입니다. 많은 관심 부탁드립니다!',
  },
  {
    id: '2131sada',
    title: '전사 온보딩',
    description: '전사에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2132sada',
    title: '디자이너 온보딩',
    description: '디자인팀에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2133sada',
    title: '개발자 온보딩',
    description: '개발팀에게 적용하는 온보딩 시나리오입니다. 많은 관심 부탁드립니다!',
  },
  {
    id: '2131sada',
    title: '전사 온보딩',
    description: '전사에게 적용하는 온보딩 시나리오',
  },
  {
    id: '2132sada',
    title: '디자이너 온보딩',
    description: '디자인팀에게 적용하는 온보딩 시나리오',
  },
]

export const SCENE_MEMBERS: SceneMemberItem[] = [
  {
    id: 1,
    type: 'ATS',
    name: '이병근',
    email: 'byunkeun.lee@poolla.kr',
    profile: 'rgb(55, 120, 32)',
  },
  {
    id: 2,
    type: 'ATS',
    name: '김지후',
    email: 'ahn890@naver.com',
    profile: 'rgb(155, 10, 32)',
  },
  {
    id: 3,
    type: 'ATS',
    name: '이정석',
    email: 'jung456@gmail.com',
    profile: 'rgb(255, 210, 32)',
  },
  {
    id: 4,
    type: 'ATS',
    name: '최수빈',
    email: 'yoo@gmail.com',
    profile: 'rgb(67, 109, 232)',
  },
  {
    id: 5,
    type: 'ATS',
    name: '김효석',
    email: 'yoo@gmail.com',
    profile: 'rgb(185, 100, 32)',
  },
  {
    id: 6,
    type: 'ATS',
    name: '경미래',
    email: 'mirae.kyung@poollab.kr',
    profile: 'rgb(72, 20, 220)',
  },
  {
    id: 7,
    type: 'OMS',
    name: '홍길동',
    email: 'test@test.com',
    profile: 'rgb(72, 20, 220)',
  },
]

export const FRESHMAN_TODOS = [
  {
    title: '💻 업무장비 선택하기',
    status: '완료',
  },
  {
    title: '📝 근로 계약서 작성',
    status: '완료',
  },
  {
    title: '🎁 웰컴 키트 선택',
    status: '오늘',
  },
  {
    title: '⚒️ 업무 툴 참여하기',
    status: '5월 30일',
  },
]

export const ONBOARDING_GUIDE_INITIAL_DATA: OnboardingGuide = {
  name: '신봄',
  day_of_join: '입사 1일차',
  sequences: [
    {
      id: 0,
      scenes: [
        {
          id: 0,
          title: '💻 업무장비 선택하기',
          is_completed: true,
          due_date: '2024-04-15',
          contents: '',
        },
        {
          id: 1,
          title: '📝 근로 계약서 작성',
          is_completed: true,
          due_date: '2024-04-15',
          contents: '',
        },
        {
          id: 2,
          title: '🎁 웰컴 키트 선택',
          is_completed: false,
          due_date: '2024-05-21',
          contents: '',
        },
      ],
    },
    {
      id: 1,
      scenes: [
        {
          id: 0,
          title: '☕️ PO와 티타임',
          is_completed: false,
          due_date: '2024-05-22',
          contents: '',
        },
        {
          id: 1,
          title: '⚒️ 업무 툴 참여하기',
          is_completed: false,
          due_date: '2024-05-22',
          contents: '',
        },
        {
          id: 2,
          title: '🍱 디자인팀과 점심식사',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
    {
      id: 2,
      scenes: [
        {
          id: 0,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 1,
          title: '📘 Product principle 반드시반드시 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 2,
          title: '🍱 디자인팀과 점심식사',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
    {
      id: 3,
      scenes: [
        {
          id: 0,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 1,
          title: '📘 Product principle 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 2,
          title: '🍱 디자인팀과 점심식사',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
    {
      id: 4,
      scenes: [
        {
          id: 0,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 1,
          title: '📘 Product principle 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 2,
          title: '🍱 디자인팀과 점심식사',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
    {
      id: 5,
      scenes: [
        {
          id: 0,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 1,
          title: '📘 Product principle 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 2,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
    {
      id: 6,
      scenes: [
        {
          id: 0,
          title: '📘 Product principle 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 1,
          title: '🍱 디자인팀과 점심식사',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 2,
          title: '🧑‍💻 Hand off 방식 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
        {
          id: 3,
          title: '📘 Product principle 공유받기',
          is_completed: false,
          due_date: '2024-05-30',
          contents: '',
        },
      ],
    },
  ],
}

export const ONBOARDING_GUIDE_INITIAL_DATA_FOR_MANAGER = {
  todo_scenes: [
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 0,
      scene_title: '신규 입사자 자리 안내 신규 입사자 자리 안내 신규 입사자 자리 안내',
      due_date: '오늘',
      number_of_freshman: 2,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 1,
      scene_title: '사내 규율 리뷰',
      due_date: '오늘',
      number_of_freshman: 2,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 2,
      scene_title: '💳 명함 만들기',
      due_date: '1일 지남',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 3,
      scene_title: '💳 명함 만들기 명함 만들기 명함 만들기 명함 만들기',
      due_date: '4일 지남',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 4,
      scene_title: '☕️ 신규 입사자와 티타임',
      due_date: '3일 지남',
      number_of_freshman: 2,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 5,
      scene_title: '☕️ 신규 입사자와 티타임',
      due_date: '3일 지남',
      number_of_freshman: 2,
      contents: '',
    },
    {
      sequence_id: 0,
      sequence_title: '공통 온보딩',
      scene_id: 6,
      scene_title: '☕️ 신규 입사자와 티타임',
      due_date: '3일 지남',
      number_of_freshman: 2,
      contents: '',
    },
  ],
  upcoming_scenes: [
    {
      sequence_id: 1,
      sequence_title: '디자인팀 온보딩',
      scene_id: 0,
      scene_title: '☕️ 신규 입사자와 티타임 신규 입사자와 티타임 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 1,
      sequence_title: '디자인팀 온보딩',
      scene_id: 1,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 1,
      sequence_title: '디자인팀 온보딩',
      scene_id: 2,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 1,
      sequence_title: '디자인팀 온보딩',
      scene_id: 3,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
  ],
  completed_scenes: [
    {
      sequence_id: 2,
      sequence_title: '디자인팀 온보딩',
      scene_id: 0,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 2,
      sequence_title: '디자인팀 온보딩',
      scene_id: 1,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 5,
      contents: '',
    },
    {
      sequence_id: 3,
      sequence_title: '개발팀 온보딩',
      scene_id: 0,
      scene_title: '☕️ 신규 입사자와 티타임',
      number_of_freshman: 3,
      contents: '',
    },
  ],
}
