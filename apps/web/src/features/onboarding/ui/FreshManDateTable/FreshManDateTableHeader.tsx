import { tableHeader, tableHeaderCell } from './styles.css'
import { Icon } from '@repo/ui'

interface FreshManDateTableHeaderProps {
  isBatchUpdate: boolean
}

export const FreshManDateTableHeader = ({ isBatchUpdate }: FreshManDateTableHeaderProps) => {
  const cells = ['이름', '공고명', '이메일', '연락처', '합격일', '입사일']
  return (
    <div className={tableHeader}>
      {cells.map((cell: string) => {
        const isStartDate = cell === '입사일'
        const isBatchUpdateStart = isStartDate && isBatchUpdate

        return (
          <span key={cell} className={tableHeaderCell}>
            {cell}
            {isBatchUpdateStart && <Icon icon="icon/sync-line" color="blue500" />}
          </span>
        )
      })}
    </div>
  )
}
