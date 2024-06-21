import { ADD_APPLICANT_COMPONENTS } from '@/widgets/Application/constants'

interface ApplicantAddFormProps {
  isRequired?: boolean
  isCanView?: boolean
  note?: string
  name: string
  index: number
  value?: any
  onChange?: (value: any) => void
}

export const ApplicantAddForm = ({
  isRequired,
  isCanView,
  name,
  index,
  value,
  onChange,
  note,
}: ApplicantAddFormProps) => {
  const Component = ADD_APPLICANT_COMPONENTS[name]

  if (!Component) return null
  return (
    <Component
      isRequired={isRequired}
      isCanView={isCanView}
      onChange={onChange}
      index={index}
      name={name}
      value={value}
      note={note}
    />
  )
}
