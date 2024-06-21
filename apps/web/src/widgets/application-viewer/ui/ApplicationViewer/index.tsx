import * as Styles from './styles'
import { getApplicationItemDataList } from '../../lib'
import { useApplication } from '@/entities/Application/hooks'
import { ApplicationViewerItem } from '@/entities/application-viewer'

interface ApplicationViewerProps {
  applicantId: string
  isEvaluator: boolean
}

export const ApplicationViewer = ({ applicantId, isEvaluator }: ApplicationViewerProps) => {
  const { data } = useApplication(applicantId)

  if (!data) return null
  return (
    <Styles.Wrapper>
      {getApplicationItemDataList(data)?.map((item, index) => {
        if (!item) return null
        return (
          <ApplicationViewerItem
            key={`application_viewer_${index}`}
            name={item.name}
            type={item.type}
            form={item.form}
            data={item.data}
            isEvaluator={isEvaluator}
          />
        )
      })}
    </Styles.Wrapper>
  )
}
