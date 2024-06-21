'use client'

import { LinkButton } from '@/shared/ui'
import { IMAGES, PAGE } from '@/shared/constants'
import Image from 'next/image'
import * as Styles from './styles'
import { useLocale } from 'next-intl'

interface PlanExpiredContainerProps {
  isAdmin: boolean
  enterpriseName: string
}

const PlanExpiredContainer = ({ isAdmin, enterpriseName }: PlanExpiredContainerProps) => {
  const currentLocale = useLocale()
  const getExpiredText = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          <Styles.Paragraph>
            Hello. This is the Stead team.
            <Styles.LineBreak />
            We would like to inform you that the workspace plan for {enterpriseName} has expired.
          </Styles.Paragraph>
          <Styles.Paragraph>
            Stead team is always striving to provide better service.
            <Styles.LineBreak />
            If you have any inconveniences or suggestions for improvement during use,
            <Styles.LineBreak />
            <Styles.Link href={'https://steadhr.channel.io/home'} target={'_blank'}>
              please leave your feedback here.
            </Styles.Link>
          </Styles.Paragraph>
          <Styles.Paragraph>
            We look forward to your valuable feedback
            <Styles.LineBreak />
            to create a better recruitment experience.
            <Styles.LineBreak />
            Thank you.
          </Styles.Paragraph>
        </>
      )
    }
    return (
      <>
        <Styles.Paragraph>
          안녕하세요. 스테드 팀입니다.
          <Styles.LineBreak />
          {enterpriseName}의 워크스페이스 플랜이 만료되었음을 안내드립니다.
        </Styles.Paragraph>
        <Styles.Paragraph>
          더 나은 서비스를 제공하기 위해 스테드 팀이 항상 노력하고 있습니다
          <Styles.LineBreak />
          이용 중 불편한 사항이나 개선 사항이 있으시다면
          <Styles.LineBreak />
          <Styles.Link href={'https://steadhr.channel.io/home'} target={'_blank'}>
            문의하기
          </Styles.Link>
          를 통해 의견을 남겨 주시길 바랍니다.
        </Styles.Paragraph>
        <Styles.Paragraph>
          더 좋은 채용 경험을 만들어 가기 위해
          <Styles.LineBreak />
          고객님의 소중한 피드백을 기다리고 있겠습니다
          <Styles.LineBreak />
          감사합니다.
        </Styles.Paragraph>
      </>
    )
  }

  return (
    <Styles.PaymentExpiredContainer>
      <Styles.Wrapper>
        <Styles.Logo>
          <Image src={IMAGES.LOGO_BLACK} alt="스테드" fill />
        </Styles.Logo>
        <Styles.ExpiredBox>
          <Styles.Title>이용기간이 만료되었습니다.</Styles.Title>
          <Styles.DescBox>{getExpiredText()}</Styles.DescBox>
          <LinkButton text={'구독하기'} href={PAGE.SETTINGS_PAYMENT} isNewTab disabled={!isAdmin} />
        </Styles.ExpiredBox>
      </Styles.Wrapper>
    </Styles.PaymentExpiredContainer>
  )
}
export default PlanExpiredContainer
