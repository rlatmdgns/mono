import { OnBoardingReportsPage } from '@/pageModules/onboarding-reports'

export default function OnboardingReports() {
  const initialData = {
    freshmen: [
      {
        id: 0,
        name: '홍길동',
        scenarios: [
          {
            id: 0,
            title: '시나리오 1',
            is_edited: true,
          },
          {
            id: 1,
            title: '시나리오 2',
            is_edited: false,
          },
        ],
        start_date: '2024-05-23',
        total: 10,
        complete: 3,
        scenes: [
          {
            id: 0,
            title: '씬 1',
            is_edited: true,
            date: '2024-05-23',
            status: '-',
            managers: ['김매니저', '이매니저', '박매니저'],
          },
          {
            id: 1,
            title: '씬 2',
            is_edited: false,
            date: '2024-05-24',
            status: '진행중',
            managers: ['김매니저'],
          },
        ],
      },
      {
        id: 11234,
        name: '고길동',
        scenarios: [
          {
            id: 0,
            title: '시나리오 1',
            is_edited: true,
          },
          {
            id: 1,
            title: '시나리오 2',
            is_edited: false,
          },
        ],
        start_date: '2024-05-23',
        total: 10,
        complete: 3,
        scenes: [
          {
            id: 0,
            title: '씬 1',
            is_edited: true,
            date: '2024-05-23',
            status: '완료',
            managers: ['김매니저', '이매니저', '박매니저'],
          },
          {
            id: 1,
            title: '씬 2',
            is_edited: false,
            date: '2024-05-24',
            status: '진행중',
            managers: ['김매니저'],
          },
        ],
      },
    ],
  }
  return <OnBoardingReportsPage initialData={initialData} />
}
