import * as Styles from './styles'
import PreviewDocumentList from '@/modals/WriteMailModal/components/PreviewDocumentList'
import { Button } from '@/shared/ui'
import { RequestDocument } from '@/modals/RequestDocumentModal/recoil/atom'
import { useTranslations } from 'next-intl'

interface PreviewDocumentProps {
  documents: RequestDocument[]
}

const PreviewDocument = ({ documents }: PreviewDocumentProps) => {
  const $t = useTranslations('file_request')
  if (documents?.length < 1) return null
  return (
    <Styles.Wrapper>
      <Styles.Header>{$t('required_documents')}</Styles.Header>
      <PreviewDocumentList documents={documents} />
      <Button text={$t('submit')} />
    </Styles.Wrapper>
  )
}

export default PreviewDocument
