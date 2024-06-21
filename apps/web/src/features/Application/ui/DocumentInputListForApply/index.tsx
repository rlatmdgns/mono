import * as Styles from './styles'
import { DocumentInputItem } from './DocumentInputItem'
import { RecruitMultipleItem } from '@/entities/build-application/types/applicationItem'

interface DocumentInputListForApplyProps {
  documents?: RecruitMultipleItem[]
}

export const DocumentInputListForApply = ({ documents }: DocumentInputListForApplyProps) => {
  if (!documents || documents?.length < 1) return null
  return (
    <Styles.Wrapper>
      {documents.map((document: RecruitMultipleItem) => (
        <DocumentInputItem
          key={document.id}
          id={document.id}
          isRequired={document.is_required}
          note={document.note}
          title={document.title}
        />
      ))}
    </Styles.Wrapper>
  )
}
