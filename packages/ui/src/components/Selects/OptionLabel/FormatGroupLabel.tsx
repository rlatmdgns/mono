import { formatGroupLabel } from './styles.css'
import { GroupBase } from 'react-select'

export const FormatGroupLabel = (data: GroupBase<any>) => {
  return <div className={formatGroupLabel}>{data.label}</div>
}
