import { HandleRemoveReceive } from '@/entities/onboarding/types/receive'
import { list } from './styles.css'
import { Receiver } from '@/features/onboarding/ui/Receivers/Receiver'

interface SurveyReceiverProps {
  receivers: any
  onRemoveReceiver: HandleRemoveReceive
}

export const Receivers = ({ receivers, onRemoveReceiver }: SurveyReceiverProps) => {
  return (
    <ul className={list}>
      {receivers.map((receiver: any, index: number) => {
        return (
          <Receiver
            key={`receiver_${index}`}
            {...receiver}
            index={index}
            onRemoveReceiver={onRemoveReceiver}
          />
        )
      })}
    </ul>
  )
}
