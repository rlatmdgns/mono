import { Toast } from '@/shared/ui'
import { isEmailValid, shortenEmail } from '../../utils'
import { wrapper } from './style.css'
import { Button } from '@repo/ui'
import { HandleAppendReceive } from '@/entities/onboarding/types/receive'
import { getOmsMember } from '@/features/onboarding/api/getOmsManagerCheckEmail'

interface AddSceneMemberButtonProps {
  value: string
  onClick: HandleAppendReceive
}

export const SceneMemberAddButton = ({ value, onClick }: AddSceneMemberButtonProps) => {
  const email = shortenEmail(value)
  const hasValue = value !== ''

  const handleClick = async () => {
    const hasEmail = isEmailValid(value)

    if (!hasEmail) {
      return Toast.error('유효하지 않은 이메일입니다.')
    }

    const result = await getOmsMember([value])
    if (result.invalidEmails) {
      return Toast.error('유효하지 않은 이메일입니다.')
    }

    onClick('OMS', value)
  }

  if (!hasValue) return null

  return (
    <div className={wrapper}>
      <Button
        text={`이메일 "${email}" 초대`}
        style="mono"
        size="sm"
        width="100%"
        leadingIcon="icon/plus-line"
        onClick={handleClick}
      />
    </div>
  )
}
