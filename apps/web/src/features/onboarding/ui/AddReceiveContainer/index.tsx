import { Button } from '@repo/ui'
import { HandleAppendReceive, HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { Dropdown } from '@/shared/ui'
import { SceneMemberSelector } from '@/widgets/onboarding'
import { useFormContext } from 'react-hook-form'
import { useEffect, useState } from 'react'

interface AddAlarmFooterRightContainerProps {
  isFreshman?: boolean
  onAppendReceiver: HandleAppendReceive
  onRemoveReceiver: HandleRemoveReceive
}

export const AddReceiveContainer = ({
  isFreshman,
  onAppendReceiver,
  onRemoveReceiver,
}: AddAlarmFooterRightContainerProps) => {
  const [isClosed, setIsClosed] = useState(false)
  const { watch, setValue } = useFormContext()
  const receivers = watch('receivers')
  const receiverText = receivers?.length === 0 ? '수신자' : `수신자(${receivers?.length} 명)`

  const handleToggleClosed = () => {
    setIsClosed(true)
  }

  useEffect(() => {
    setIsClosed(false)
  }, [isClosed])

  if (isFreshman) return null

  return (
    <>
      <Dropdown
        button={
          <Button
            text={receiverText}
            state="secondary"
            style="mono"
            leadingIcon="icon/assign-line"
          />
        }
        isNotPortal={false}
        zIndex={50}
        direction={'left'}
        isParentStatusClosed={isClosed}
      >
        <SceneMemberSelector
          receivers={receivers}
          onClose={handleToggleClosed}
          onAppendReceiver={onAppendReceiver}
          onRemoveReceiver={onRemoveReceiver}
        />
      </Dropdown>
    </>
  )
}
