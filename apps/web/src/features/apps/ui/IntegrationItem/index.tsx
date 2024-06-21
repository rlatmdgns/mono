import * as Styles from './styles'
import { IntegrationContent } from '@/entities/apps'
import { IntegrationButton } from 'features/apps/ui/IntegrationButton'

interface IntegrationItemProps {
  name: string
  description: string
  image: string
  isConnected: boolean
  children?: React.ReactNode
  onOpen: () => void
  isOpen: boolean
  onClick: () => void
}

export const IntegrationItem = ({
  name,
  description,
  image,
  isConnected,
  children,
  onOpen,
  isOpen,
  onClick,
}: IntegrationItemProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Inner>
        <IntegrationContent
          name={name}
          description={description}
          image={image}
          isConnected={isConnected}
        />
        <IntegrationButton
          isConnected={isConnected}
          isOpen={isOpen}
          onOpen={onOpen}
          onClick={onClick}
        />
      </Styles.Inner>
      {children}
    </Styles.Wrapper>
  )
}
