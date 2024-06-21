import { useCopyClipBoard } from '@/shared/hooks'
import { IconButton } from '@/shared/ui'

interface ApplicantInfoItemCopyButtonProps {
  value: string
}

const ApplicantInfoItemCopyButton = ({ value }: ApplicantInfoItemCopyButtonProps) => {
  const { handleCopyClipBoard } = useCopyClipBoard()

  return <IconButton size="xs" icon="icon/copy-line" onClick={() => handleCopyClipBoard(value)} />
}

export default ApplicantInfoItemCopyButton
