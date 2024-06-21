import { Button } from '@repo/ui'
import { wrapper } from '@/features/onboarding/ui/OnboardingReadButton/styles.css'

interface OnboardingReadButtonProps {
  isFreshman: boolean
}

export const OnboardingReadButton = ({ isFreshman }: OnboardingReadButtonProps) => {
  if (!isFreshman) return null

  return (
    <div className={wrapper}>
      <Button text={'제출하기'} leadingIcon={'icon/send-solid'} />
    </div>
  )
}
