import * as Styles from './styles'
import Image from 'next/image'
import { Icon } from '@repo/ui'

interface PreviewEnterpriseInfoProps {
  enterpriseLogo?: string
  enterpriseName?: string
  postingPosition?: string
  postingTitle?: string
}

const PreviewEnterpriseInfo = ({
  enterpriseLogo,
  enterpriseName,
  postingPosition,
  postingTitle,
}: PreviewEnterpriseInfoProps) => {
  const isNoData = !enterpriseLogo || !enterpriseName || !postingPosition || !postingTitle

  if (isNoData) return null
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Styles.ImageBox>
          <Image width={64} height={64} src={enterpriseLogo} alt="" />
        </Styles.ImageBox>
        <Styles.Content>
          <Styles.ContentText>
            <Styles.EnterpriseName>{enterpriseName}</Styles.EnterpriseName>
            <Styles.TextWrapper>
              <Styles.Text>{postingTitle}</Styles.Text>
              <Styles.Text>{postingPosition}</Styles.Text>
            </Styles.TextWrapper>
          </Styles.ContentText>
          <Icon icon="icon/right-line" color="neutralGray500" />
        </Styles.Content>
      </Styles.Container>
    </Styles.Wrapper>
  )
}

export default PreviewEnterpriseInfo
