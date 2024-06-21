import * as Styles from './styles'
import { Avatar } from '@/shared/ui'
import { components, OptionProps } from 'react-select'
import * as Style from '@/shared/ui/Member/styles'

interface FormatOptionProps {
  value: string | boolean | number
  label: string
  image: string
  google_connect?: boolean
}

export const SelectMemberOptionLabel = (props: OptionProps<FormatOptionProps>) => {
  const {
    label,
    data: { image, google_connect },
  } = props

  return (
    <components.Option {...props}>
      <Styles.MemberOptionLabel>
        <Styles.MemberTextWrapper>
          <Avatar alt={label} src={image} size="sm" />
          <Styles.MemberOptionLabelText>{label}</Styles.MemberOptionLabelText>
        </Styles.MemberTextWrapper>
        {google_connect && <Styles.GoogleIcon />}
      </Styles.MemberOptionLabel>
    </components.Option>
  )
}
