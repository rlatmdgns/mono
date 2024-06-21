import * as Styles from './styles'
import { Icon } from '@repo/ui'
import { useLocale, useTranslations } from 'next-intl'

interface DuplicateApplicantControlHeader {
  title: string
}

const DuplicateApplicantControlHeader = ({ title }: DuplicateApplicantControlHeader) => {
  const $t = useTranslations('limit_apply_setting')
  const currentLocale = useLocale()
  const getSubTitle = () => {
    if (currentLocale !== 'ko') {
      return (
        <>
          Restricting applicants for "<Styles.PostingTitle>{title}</Styles.PostingTitle>".
        </>
      )
    }
    return (
      <>
        "<Styles.PostingTitle>{title}</Styles.PostingTitle>"에 대한 지원자를 제한합니다.
      </>
    )
  }
  return (
    <Styles.Wrapper>
      <Styles.IconContainer>
        <Icon icon="icon/member-line" color="blue500" size={36} />
      </Styles.IconContainer>
      <Styles.TextContainer>
        <Styles.Title>{$t('title')}</Styles.Title>
        <Styles.Subtitle>{getSubTitle()}</Styles.Subtitle>
      </Styles.TextContainer>
    </Styles.Wrapper>
  )
}

export default DuplicateApplicantControlHeader
