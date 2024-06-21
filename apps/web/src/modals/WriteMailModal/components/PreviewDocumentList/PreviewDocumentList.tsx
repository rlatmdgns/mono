import * as Styles from './styles'
import PreviewDocumentItem from '@/modals/WriteMailModal/components/PreviewDocumentItem'
import { RequestDocument } from '@/modals/RequestDocumentModal/recoil/atom'

interface PreviewDocumentListProps {
  documents: RequestDocument[]
}

const PreviewDocumentList = ({ documents }: PreviewDocumentListProps) => {
  return (
    <Styles.Wrapper>
      {documents?.map((document, index) => (
        <PreviewDocumentItem key={index} title={document.name} notice={document.value} />
      ))}
    </Styles.Wrapper>
  )
}

export default PreviewDocumentList
