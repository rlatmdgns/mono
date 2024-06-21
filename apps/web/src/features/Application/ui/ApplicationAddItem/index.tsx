import { ADD_APPLICANT_COMPONENTS } from '@/widgets/Application/constants'
import { useRecoilValue } from 'recoil'
import { SelectedApplicantItemAtom } from '@/pageModules/build-application/recoil'

interface ApplicationAddItemProps {
  isRequired?: boolean
  isCanView?: boolean
  isNote?: boolean
  note?: string
  name: string
  index: number
  onMoveUp?: (index: number, type?: 'documents' | 'questions') => void
  onMoveDown?: (index: number, type?: 'documents' | 'questions') => void
  onDelete?: (index: number, type?: 'documents' | 'questions') => void
  onContentChange?: (key: string, value: string) => void
}

export const ApplicationAddItem = ({
  isRequired,
  isCanView,
  isNote,
  note,
  name,
  index,
  onMoveUp,
  onMoveDown,
  onDelete,
  onContentChange,
}: ApplicationAddItemProps) => {
  const Component = ADD_APPLICANT_COMPONENTS[name]
  const selectedItem = useRecoilValue(SelectedApplicantItemAtom)
  const isSelected = selectedItem.key === name
  const controllerName = `applicant_list.${index}`

  if (!Component) return null
  return (
    <Component
      isSelected={isSelected}
      isRequired={isRequired}
      isCanView={isCanView}
      isNote={isNote}
      note={note}
      onContentChange={onContentChange}
      onMoveUp={onMoveUp}
      onMoveDown={onMoveDown}
      onDelete={onDelete}
      index={index}
      name={name}
      controllerName={controllerName}
    />
  )
}
