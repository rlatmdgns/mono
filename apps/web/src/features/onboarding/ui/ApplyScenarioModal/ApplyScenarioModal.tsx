import { SCENARIO_BOOKS_DUMMY } from '@/entities/onboarding/dummy'
import { ApplyScenarioList } from '@/entities/onboarding/ui/ApplyScenarioList'
import { ModalLayout } from '@/shared/ui'
import { ModalHeader } from '@repo/ui'
import { ApplyScenarioFooter } from './ApplyScenarioFooter'
import { wrapper } from './styles.css'

const ApplyScenarioModal = () => {
  return (
    <ModalLayout isDimmed>
      <div className={wrapper}>
        <ModalHeader title="온보딩 적용" />
        <ApplyScenarioList scenarios={SCENARIO_BOOKS_DUMMY} />
        <ApplyScenarioFooter />
      </div>
    </ModalLayout>
  )
}

export default ApplyScenarioModal
