import * as Styles from './styles'
import Image from 'next/image'
import { Badge } from '@/shared/ui'

interface IntegrationContentProps {
  image: string
  name: string
  description: string
  isConnected: boolean
}

export const IntegrationContent = ({
  image,
  name,
  description,
  isConnected,
}: IntegrationContentProps) => {
  return (
    <Styles.Wrapper>
      <Image src={image} alt={name} width={32} height={32} />
      <Styles.Content>
        <Styles.TitleBox>
          <Styles.Title>{name}</Styles.Title>
          {isConnected && <Badge text="연동됨" />}
        </Styles.TitleBox>
        <Styles.Description>{description}</Styles.Description>
      </Styles.Content>
    </Styles.Wrapper>
  )
}
