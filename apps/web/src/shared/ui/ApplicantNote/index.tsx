import { Icon } from '@repo/ui'
import { KeyboardEvent } from 'react'
import * as Styles from './styles'

interface ApplicantNoteProps {
  isNote: boolean
  note: string
  onInputChange: (value: string) => void
}

export const ApplicantNote = ({ isNote, note, onInputChange }: ApplicantNoteProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const isApplicantView = !isNote && note

  return (
    <>
      {isNote && (
        <Styles.Placeholder $note={note}>
          <Styles.Input
            $note={note}
            value={note}
            onChange={(event) => onInputChange(event.target.value)}
            onKeyDown={(event) => handleKeyDown(event)}
            placeholder="유의사항을 입력해주세요."
            maxLength={50}
          />
          {!note && <Icon icon="icon/edit-line" color="neutralGray400" />}
        </Styles.Placeholder>
      )}
      {isApplicantView && <Styles.Note>{note}</Styles.Note>}
    </>
  )
}
