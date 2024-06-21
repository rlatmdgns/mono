import * as Styles from './styles'
import { GroupBase } from 'react-select'

export const FormatGroupLabel = (data: GroupBase<any>) => {
  return <Styles.FormatGroupLabel>{data.label}</Styles.FormatGroupLabel>
}
