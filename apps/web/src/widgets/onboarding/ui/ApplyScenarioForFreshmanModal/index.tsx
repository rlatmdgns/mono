import { Button, ModalFooter, ModalHeader } from '@repo/ui'
import { ModalLayout } from '@/shared/ui'
import {
  ApplyScenarioForFreshmenRequest,
  ScenarioWithFreshmenForm,
  ScenarioWithFreshmenResponse,
} from '@/entities/onboarding/types'
import { useEffect, useState } from 'react'
import { ApplyFreshManTableHeader } from '@/widgets/onboarding/ui/ApplyScenarioForFreshmanModal/ApplyFreshManTableHeader'
import { FormProvider, useFieldArray, useForm } from 'react-hook-form'
import { ApplyFreshManTableBody } from '@/widgets/onboarding/ui/ApplyScenarioForFreshmanModal/ApplyFreshManTableBody'
import { tableWrapper } from '@/widgets/onboarding/ui/ApplyScenarioForFreshmanModal/styles.css'
import { useGetScenarioWithFreshmen } from '@/entities/onboarding/hooks/useGetScenarioWithFreshmen'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { useApplyScenario } from '@/features/onboarding/hooks/useApplyScenario'

type ApplyScenarioForFreshmanModalProps = {
  id: number
  onClose: () => void
}
const ApplyScenarioForFreshmanModal = ({ id, onClose }: ApplyScenarioForFreshmanModalProps) => {
  const { data: scenarioWithFreshmen } = useGetScenarioWithFreshmen(id)
  const [initialScenarioWithFreshmen, setInitialScenarioWithFreshmen] = useState<
    ScenarioWithFreshmenForm[]
  >([])
  const { openModal, closeModal } = useModal()

  const methods = useForm<{
    allCheck: boolean
    freshmen: ScenarioWithFreshmenForm[]
  }>({
    defaultValues: {
      allCheck: false,
      freshmen: [],
    },
    mode: 'onChange',
  })

  const { control, watch, getValues, setValue } = methods
  const { fields, update, replace } = useFieldArray({
    control,
    name: 'freshmen',
  })

  const { applyScenarioMutate } = useApplyScenario(id)

  const handleAllCheck = () => {
    const allCheck = getValues('allCheck')
    const freshmen = getValues('freshmen')
    const newFreshmen = freshmen.map((freshman: ScenarioWithFreshmenForm) => {
      if (freshman.is_disabled) {
        return { ...freshman }
      }
      return {
        ...freshman,
        is_checked: allCheck,
      }
    })
    replace(newFreshmen)
  }

  const handleCheck = (index: number) => {
    const currentCheck = fields[index]
    update(index, {
      ...currentCheck,
      is_checked: !fields[index].is_checked,
    })
  }

  const handleAdjustScenario = () => {
    const notDisabledFreshmen = getValues('freshmen').filter(
      (freshman: ScenarioWithFreshmenForm) => !freshman.is_disabled,
    )

    const freshmanValid = notDisabledFreshmen.filter((freshman: ScenarioWithFreshmenForm) => {
      const isChange = initialScenarioWithFreshmen.some(
        (initialFreshman: ScenarioWithFreshmenForm) => {
          return (
            initialFreshman.freshmanId === freshman.freshmanId &&
            initialFreshman.is_checked !== freshman.is_checked
          )
        },
      )

      if (isChange) {
        return {
          id: freshman.freshmanId,
          is_checked: freshman.is_checked,
          is_disabled: freshman.is_disabled,
        }
      }
    })

    const isSequencePassedDate = freshmanValid.some((freshman: ScenarioWithFreshmenForm) => {
      freshman.is_checked && freshman.is_disabled
    })

    const freshmanPayload = freshmanValid.map((freshman: ScenarioWithFreshmenForm) => {
      return {
        id: freshman.freshmanId,
        is_checked: freshman.is_checked,
      }
    })

    if (isSequencePassedDate) {
      return sendOnboardingLink({ freshmans: freshmanPayload })
    }

    applyScenarioMutate({ freshmans: freshmanPayload })
  }

  const sendOnboardingLink = (payload: ApplyScenarioForFreshmenRequest) => {
    openModal(MODAL.NEW_CONFIRM, {
      title: '실행일이 지난 시퀀스가 있습니다.',
      subTitle: '실행일이 지난 시퀀스는 적용 후 일괄 실행됩니다 그래도 적용하시겠습니까?',
      textConfirm: '적용하기',
      onClick: () => {
        applyScenarioMutate(payload)
        closeModal(MODAL.NEW_CONFIRM)
      },
      onClose: () => closeModal(MODAL.NEW_CONFIRM),
    })
  }

  useEffect(() => {
    if (!scenarioWithFreshmen) return
    const freshmanData = scenarioWithFreshmen.map((freshman: ScenarioWithFreshmenResponse) => {
      return {
        freshmanId: freshman.id,
        ...freshman,
      }
    })

    setValue('freshmen', freshmanData)
    setInitialScenarioWithFreshmen(freshmanData)
  }, [scenarioWithFreshmen])

  const isValid = watch('freshmen').some(
    (freshman: ScenarioWithFreshmenResponse) => !freshman.is_disabled && freshman.is_checked,
  )

  return (
    <ModalLayout isDimmed>
      <div>
        <ModalHeader title={'온보딩 시나리오 적용하기'} />
        <FormProvider {...methods}>
          <div className={tableWrapper}>
            <ApplyFreshManTableHeader onAllCheck={handleAllCheck} />
            <ApplyFreshManTableBody onCheck={handleCheck} />
          </div>
          <ModalFooter>
            <Button
              text="취소"
              state="secondary"
              style="mono"
              size="md"
              width="58px"
              onClick={onClose}
            />
            <Button
              text="적용하기"
              size="md"
              width="58px"
              onClick={handleAdjustScenario}
              disabled={!isValid}
            />
          </ModalFooter>
        </FormProvider>
      </div>
    </ModalLayout>
  )
}

export default ApplyScenarioForFreshmanModal
