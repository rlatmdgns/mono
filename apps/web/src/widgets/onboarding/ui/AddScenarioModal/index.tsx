import { FormProvider, useForm } from 'react-hook-form'
import { Button, ModalFooter, ModalHeader, Toast } from '@repo/ui'
import { ModalLayout } from '@/shared/ui'
import { AddScenarioList } from '@/entities/onboarding'
import { DUMMY_ADJUST_SCENARIOS } from '@/widgets/onboarding/entities'

interface AddScenarioModalProps {
  onClose: () => void
}

const AddScenarioModal = ({ onClose }: AddScenarioModalProps) => {
  const methods = useForm()
  const handleAdjustScenario = () => {
    //  TODO : 시나리오 추가 API 호출 후, 입사자 리스트 재조회 API 조회
    Toast.success('적용되었습니다.')
  }

  return (
    <ModalLayout isDimmed>
      <FormProvider {...methods}>
        <div>
          <ModalHeader title="온보딩 적용" onClick={onClose} />
          <AddScenarioList scenarios={DUMMY_ADJUST_SCENARIOS} />
          <ModalFooter>
            <Button
              text="취소"
              state="secondary"
              style="mono"
              size="md"
              width="58px"
              onClick={onClose}
            />
            <Button text="적용하기" size="md" width="58px" onClick={handleAdjustScenario} />
          </ModalFooter>
        </div>
      </FormProvider>
    </ModalLayout>
  )
}

export default AddScenarioModal
