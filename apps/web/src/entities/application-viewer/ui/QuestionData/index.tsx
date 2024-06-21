import * as Styles from './styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isQuestion } from '../../lib'
import { EmptyData } from '@/entities/application-viewer/ui/EmptyData'

interface QuestionDataProps {
  type?: string
  data: ApplicationViewerItemDataType
}

export const QuestionData = ({ data, type }: QuestionDataProps) => {
  if (type !== 'question') return null
  if (!isQuestion(data)) return null

  if (!data.description) {
    return <EmptyData text="미제출" />
  }
  return (
    <Styles.Wrapper>
      <Styles.Text>{data.description}</Styles.Text>
    </Styles.Wrapper>
  )
}
