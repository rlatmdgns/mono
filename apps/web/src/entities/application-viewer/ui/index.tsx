import * as Styles from './styles'
import { ApplicationViewerItemHeader } from './ApplicationViewerItemHeader'
import { ApplicationViewerItemContent } from './ApplicationViewerItemContent'
import { APPLICATION_VIEWER_NAMES } from '../constants'
import { ApplicationViewerItemDataType, ApplicationViewerItemForm } from '../types'

interface ApplicationViewerItemProps {
  name: string
  type?: string
  isEvaluator: boolean
  data: ApplicationViewerItemDataType
  form: ApplicationViewerItemForm
}

export const ApplicationViewerItem = ({
  name,
  type,
  data,
  form,
  isEvaluator,
}: ApplicationViewerItemProps) => {
  const title = APPLICATION_VIEWER_NAMES[name] || name

  if (isEvaluator && (!data || !form.is_canview)) return null
  return (
    <Styles.Wrapper>
      <ApplicationViewerItemHeader
        text={title}
        data={data}
        isRequired={form.is_required}
        isCanView={form.is_canview}
      />
      <ApplicationViewerItemContent name={name} type={type} data={data} />
    </Styles.Wrapper>
  )
}
