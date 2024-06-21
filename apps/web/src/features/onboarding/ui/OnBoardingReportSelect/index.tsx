import { wrapper } from './styles.css'
import { Select } from '@/shared/ui'

export const OnBoardingReportSelect = () => {
  return (
    <div className={wrapper}>
      <Select
        options={[
          {
            label: '시나리오 리포트',
            value: '1',
          },
        ]}
      />
    </div>
  )
}
