import * as Styles from './styles'

interface PreviewDocumentItemProps {
  title: string
  notice?: string
}

const PreviewDocumentItem = ({ title, notice }: PreviewDocumentItemProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Notice>{notice}</Styles.Notice>
    </Styles.Wrapper>
  )
}

export default PreviewDocumentItem
