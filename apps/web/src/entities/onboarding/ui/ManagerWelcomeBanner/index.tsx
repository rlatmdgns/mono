import { bannerWrapper, textStyle, wrapper } from './styles.css'

export const ManagerWelcomeBanner = () => {
  return (
    <div className={wrapper}>
      <div className={bannerWrapper}>
        <div className={textStyle}>
          🚀
          <br />
          신규 입사자가
          <br />
          회사에 잘 적응하도록 도와주세요!
        </div>
      </div>
    </div>
  )
}
