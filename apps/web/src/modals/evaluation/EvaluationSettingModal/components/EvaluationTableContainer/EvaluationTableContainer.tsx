import * as Styles from './styles'
import EvaluationTableTabs from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableTabs/EvaluationTableTabs'
import { useEffect } from 'react'
import EvaluationTableContent from '@/modals/evaluation/EvaluationSettingModal/components/EvaluationTableContent'
import { PostingMember } from '@/interface/posting'
import { EvaluationMember, EvaluationTable } from '@/interface/evaluation'
import { useRecoilState } from 'recoil'
import { selectedTableIdAtom } from '@/modals/evaluation/EvaluationSettingModal/recoil/atom'

interface EvaluationTableContainerProps {
  evaluationTables: EvaluationTable[]
  evaluationId: number
  postingMembers: PostingMember[]
  evaluationMembers: EvaluationMember[]
}

const EvaluationTableContainer = ({
  evaluationTables,
  evaluationId,
  postingMembers,
  evaluationMembers,
}: EvaluationTableContainerProps) => {
  const [selectedTableId, setActiveTableId] = useRecoilState(selectedTableIdAtom)
  const selectedTable = evaluationTables.find((table) => table.table_id === selectedTableId)

  const handleSelectTable = (id: number) => setActiveTableId(id)

  const resetActiveTableId = () => {
    const isValidTableId = evaluationTables.some((table) => table.table_id === selectedTableId)
    if (isValidTableId) return
    const lastTableId = evaluationTables[evaluationTables?.length - 1]?.table_id
    return setActiveTableId(lastTableId)
  }

  useEffect(() => {
    resetActiveTableId()
  }, [evaluationTables])

  if (evaluationTables.length < 1) return null
  return (
    <Styles.Wrapper>
      <EvaluationTableTabs
        tables={evaluationTables}
        selectedTableId={selectedTableId}
        onSelectTable={handleSelectTable}
        evaluationId={evaluationId}
      />
      <EvaluationTableContent
        table={selectedTable}
        evaluationId={evaluationId}
        postingMembers={postingMembers}
        evaluationMembers={evaluationMembers}
      />
    </Styles.Wrapper>
  )
}

export default EvaluationTableContainer
