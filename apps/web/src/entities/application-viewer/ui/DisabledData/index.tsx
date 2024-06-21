import * as Styles from '../styles'
import { EmptyData } from '../EmptyData'
import { ApplicationViewerItemDataType } from '../../types'
import { isDisabled } from '../../lib'

interface DisabledDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const DisabledData = ({ name, data }: DisabledDataProps) => {
  if (name !== 'disabled') return null
  if (!isDisabled(data)) return null

  if (!data.is_disabled) {
    return <EmptyData text="비대상" />
  }
  return (
    <Styles.Content>
      <Styles.Text>{data.classification}</Styles.Text>
      <Styles.Detail>{data.level}</Styles.Detail>
    </Styles.Content>
  )
}
