import { Dropdown } from '@/shared/ui'
import useUpdateApplicantFilesOrder from '@/modals/ApplicantModal/hooks/useUpdateApplicantFilesOrder'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'
import { activeTabIndexAtom } from '@/modals/ApplicantModal/recoil'
import { useSetRecoilState } from 'recoil'

interface UpdateFileOrderButtonProps {
  id: number
  index: number
  order: 'left' | 'right'
  disabled: boolean
  onToggleClosed: (status: boolean) => void
}

const UpdateFileOrderButton = ({
  id,
  index,
  order,
  disabled,
  onToggleClosed,
}: UpdateFileOrderButtonProps) => {
  const $t = useTranslations('common')
  const { updateApplicantFilesOrderMutate } = useUpdateApplicantFilesOrder(onToggleClosed)
  const setActiveTabIndex = useSetRecoilState(activeTabIndexAtom)

  const iconSource = order === 'left' ? 'icon/move-left-solid' : 'icon/move-right-solid'
  const text = order === 'left' ? $t('move_left') : $t('move_right')

  const handleUpdateOrder = () => {
    if (!id) return
    const nextIndex = order === 'left' ? index - 1 : index + 1
    updateApplicantFilesOrderMutate({
      file_id: `${id}`,
      body: { direction: order === 'left' ? 'front' : 'back' },
    })
    setActiveTabIndex(nextIndex)
  }

  return (
    <Dropdown.Item size="lg" onClick={handleUpdateOrder} disabled={disabled}>
      <Icon icon={iconSource} color="neutralGray500" />
      {text}
    </Dropdown.Item>
  )
}

export default UpdateFileOrderButton
