import { Icon, Tooltip } from '@repo/ui'
import { emptySequenceDescription } from '@/features/onboarding/ui/SaveScenarioModal/styles.css'

type EmptySequenceProps = {
  emptySequences?: string[]
}
export const EmptySequence = ({ emptySequences }: EmptySequenceProps) => {
  if (!emptySequences) return null

  return (
    <div className={emptySequenceDescription}>
      <Icon icon="icon/warning-solid" color="red500" />
      <Tooltip text={emptySequences.join(',')} direction={'right'}>
        <span>비어있는 시퀀스는 삭제됩니다.</span>
      </Tooltip>
    </div>
  )
}
