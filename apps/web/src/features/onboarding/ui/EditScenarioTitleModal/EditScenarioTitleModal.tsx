import { ModalLayout } from '@/shared/ui'
import { Button, ModalFooter } from '@repo/ui'
import { descStyle, header, titleStyle, wrapper } from './styles.css'
import { useModifyScenarioTitle } from '@/features/onboarding/hooks/useModifyScenarioTitle'
import { useForm } from 'react-hook-form'

interface EditScenarioTitleModalProps {
  id: number
  title: string
  description: string
  onClose: () => void
}

const EditScenarioTitleModal = ({
  id,
  title,
  description,
  onClose,
}: EditScenarioTitleModalProps) => {
  const { register, getValues } = useForm({
    defaultValues: {
      title,
      description,
    },
  })
  const { updateScenarioTitleMutate } = useModifyScenarioTitle(id, onClose)

  const handleOnchange = (type: string, value: string) => {}

  const handleSave = () => {
    const { title, description } = getValues()
    updateScenarioTitleMutate({
      title,
      description,
    })
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <ModalLayout isDimmed>
      <div className={wrapper}>
        <div className={header}>
          <input className={titleStyle} {...register('title')} data-testid={'title'} />
          <input className={descStyle} {...register('description')} data-testid={'description'} />
        </div>
        <ModalFooter>
          <Button text="취소" state="secondary" style="mono" width="58" onClick={handleClose} />
          <Button text="저장" width="58" onClick={handleSave} />
        </ModalFooter>
      </div>
    </ModalLayout>
  )
}

export default EditScenarioTitleModal
