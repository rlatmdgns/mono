import {
  descriptionStyle,
  headerWrapper,
  titleStyle,
} from '@/entities/onboarding/ui/OnboardingDetail/styles.css'

interface HeaderProps {
  title: string
  description: string
}

export const DetailHeader = ({ title, description }: HeaderProps) => {
  return (
    <div className={headerWrapper}>
      <h2 className={titleStyle}>{title}</h2>
      <p className={descriptionStyle}>{description}</p>
    </div>
  )
}
