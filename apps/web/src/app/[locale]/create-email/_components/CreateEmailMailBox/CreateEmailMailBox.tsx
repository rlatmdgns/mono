import { useFormContext } from 'react-hook-form'
import { FloatingInput } from 'shared/ui'
import * as Styles from './styles'

const CreateEmailMailBox = () => {
  const { register } = useFormContext()

  return (
    <Styles.MailBox>
      <FloatingInput
        placeholder="아이디"
        icon="icon/mail-solid"
        register={register('enterprise_email')}
      />
      <Styles.Domain>@steadhr.com</Styles.Domain>
    </Styles.MailBox>
  )
}

export default CreateEmailMailBox
