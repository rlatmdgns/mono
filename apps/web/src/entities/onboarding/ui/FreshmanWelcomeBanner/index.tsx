import { bannerWrapper, dayStyle, textStyle, wrapper } from './styles.css'

interface FreshmanWelcomeBannerProps {
  freshmanName: string
  dayOfJoin: string
}

export const FreshmanWelcomeBanner = ({ freshmanName, dayOfJoin }: FreshmanWelcomeBannerProps) => {
  // TODO: day - 입사 전은 "입사 N일 전" / 입사 후에는 "입사 N일차" / 온보딩 완료 후에는 "온보딩 완료"로 표기

  return (
    <div className={wrapper}>
      <div className={bannerWrapper}>
        <div className={textStyle}>
          👋
          <br />
          만나서 반가워요 {freshmanName} 님
          <br />
          회사에 잘 적응하도록 도와드릴게요!
        </div>
        <span className={dayStyle}>{dayOfJoin}</span>
      </div>
    </div>
  )
}
