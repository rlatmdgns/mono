import { checkboxWrapper, tableBodyItem, tableBodyItemCell } from './styles.css'
import { CheckBox } from '@repo/ui'
import { Controller } from 'react-hook-form'
import { FreshMenControl, FreshMenScenario } from '@/entities/onboarding/types/freshman'
import { FreshManScenarios } from './FreshManScenarios'
import { FreshManInput } from './FreshManInput'
import { Toast } from '@/shared/ui'
import { useModal } from '@/shared/hooks'
import { MODAL } from '@/shared/constants'
import { useUpdateFreshMan } from '@/features/onboarding/hooks/useUpdateFreshMan'

interface FreshManTableItemProps {
  name: string
  scenarios: FreshMenScenario[]
  postingTitle: string
  passDate: string
  employmentDate: string
  id: number
  email: string
  phone: string
  control: FreshMenControl
  currentInput: {
    freshmanId: number
    targetName: string
  }
  onCurrentTarget: (freshmanId: number, targetName: string) => void
  onCurrentTargetReset: () => void
}

export const FreshManTableItem = ({
  name,
  scenarios,
  postingTitle,
  passDate,
  employmentDate,
  id,
  email,
  phone,
  control,
  currentInput,
  onCurrentTarget,
  onCurrentTargetReset,
}: FreshManTableItemProps) => {
  const { openModal, closeModal } = useModal()
  const hasScenarios = !!scenarios && scenarios.length > 0

  const { updateFreshManMutate } = useUpdateFreshMan(id)

  const sendOnboardingLink = () => {
    openModal(MODAL.NEW_CONFIRM, {
      title: '변경된 이메일로 온보딩 링크를 보내시겠습니까?',
      textConfirm: '링크 보내기',
      trailingIcon: 'icon/send-solid',
      onClick: () => {
        // TODO 온보딩 링크 전송 로직 추가
        Toast.success('링크가 전송되었습니다.')
        closeModal(MODAL.NEW_CONFIRM)
      },
      onClose: () => closeModal(MODAL.NEW_CONFIRM),
    })
  }

  const handleChange = (name: string, value: string) => {
    const formValues = {
      name,
      email,
      phone,
      pass_date: passDate,
      employment_date: employmentDate,
      [name]: value,
    }
    updateFreshManMutate(formValues)

    if (name === 'email') {
      sendOnboardingLink()
    }
  }

  return (
    <div className={tableBodyItem}>
      <Controller
        name="freshmen"
        control={control}
        render={({ field }) => {
          const isChecked = field.value?.some((freshman) => freshman.id === id)
          const filter = field.value?.filter((freshman) => freshman.id !== id)
          const onChange = () =>
            field.onChange(isChecked ? filter : [...field.value, { id, scenarios }])

          return (
            <div className={checkboxWrapper} onClick={onCurrentTargetReset}>
              <CheckBox isChecked={isChecked} onChange={onChange} />
            </div>
          )
        }}
      />
      <span className={tableBodyItemCell} onClick={onCurrentTargetReset}>
        {name}{' '}
      </span>
      <span className={tableBodyItemCell} onClick={onCurrentTargetReset}>
        {postingTitle}
      </span>
      <FreshManInput
        id={id}
        defaultValue={email}
        name="email"
        onChange={handleChange}
        currentInput={currentInput}
        onCurrentTarget={onCurrentTarget}
        onCurrentTargetReset={onCurrentTargetReset}
      />
      <FreshManInput
        id={id}
        defaultValue={phone}
        name="phone"
        onChange={handleChange}
        currentInput={currentInput}
        onCurrentTarget={onCurrentTarget}
        onCurrentTargetReset={onCurrentTargetReset}
      />
      <FreshManInput
        id={id}
        defaultValue={passDate}
        name="pass_date"
        onChange={handleChange}
        currentInput={currentInput}
        onCurrentTarget={onCurrentTarget}
        onCurrentTargetReset={onCurrentTargetReset}
      />
      <FreshManInput
        id={id}
        defaultValue={employmentDate}
        name="employment_date"
        hasScenarios={hasScenarios}
        onChange={handleChange}
        currentInput={currentInput}
        onCurrentTarget={onCurrentTarget}
        onCurrentTargetReset={onCurrentTargetReset}
      />
      <span className={tableBodyItemCell} onClick={onCurrentTargetReset}>
        <FreshManScenarios scenarios={scenarios} name={name} />
      </span>
    </div>
  )
}
