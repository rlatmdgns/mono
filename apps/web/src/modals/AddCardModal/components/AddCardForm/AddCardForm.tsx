import AddCardFooter from '@/modals/AddCardModal/components/AddCardFooter'
import { Controller, useForm } from 'react-hook-form'
import * as Styles from './styles'
import useAddCard from '@/modals/AddCardModal/hooks/useAddCard'
import useUpdateCard from '@/modals/AddCardModal/hooks/useUpdateCard'
import { TextInput } from '@/shared/ui'
import { useTranslations } from 'next-intl'

interface AddCardFormProps {
  submitType: string
  onClose: () => void
}

const AddCardForm = ({ submitType, onClose }: AddCardFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm()
  const $t = useTranslations()
  const { addCardMutate } = useAddCard(onClose)
  const { updateCardMutate } = useUpdateCard(onClose)

  const handleSubmitData = () => {
    const { card_expireDate, card_identity_number, card_number, card_password } = getValues()

    const postData = {
      card_number,
      card_password,
      card_expire_year: card_expireDate.slice(2),
      card_expire_month: card_expireDate.slice(0, 2),
      card_identity_number,
    }
    submitType === 'add' ? addCardMutate(postData) : updateCardMutate(postData)
  }

  return (
    <Styles.AddCardForm>
      <Styles.Filed>
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Styles.Label>
              <Styles.Text>{$t('setting.card.number')}</Styles.Text>
              <TextInput placeholder={$t('messages.input_without_dash')} onChange={onChange} />
            </Styles.Label>
          )}
          rules={{ required: true }}
          name="card_number"
        />
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Styles.Label>
              <Styles.Text>{$t('setting.card.validity_period')}</Styles.Text>
              <TextInput placeholder="MM/YY" maxLength={4} onChange={onChange} />
            </Styles.Label>
          )}
          rules={{ required: true }}
          name="card_expireDate"
        />
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Styles.Label>
              <Styles.Text>{$t('setting.card.password_first_two_digits')}</Styles.Text>
              <Styles.PasswordWrapper>
                <TextInput type={'password'} placeholder="00" maxLength={2} onChange={onChange} />
                <Styles.AfterPassword>**</Styles.AfterPassword>
              </Styles.PasswordWrapper>
            </Styles.Label>
          )}
          rules={{ required: true }}
          name="card_password"
        />
        <Controller
          control={control}
          render={({ field: { onChange } }) => (
            <Styles.Label>
              <Styles.Text>{$t('setting.card.birth_or_business_id')}</Styles.Text>
              <TextInput
                placeholder={$t('setting.card.birth_or_business_id_placeholder')}
                onChange={onChange}
                maxLength={6}
              />
            </Styles.Label>
          )}
          rules={{ required: true }}
          name="card_identity_number"
        />
      </Styles.Filed>
      <AddCardFooter
        submitType={submitType}
        handleSubmit={handleSubmitData}
        disabled={!isValid}
        onClose={onClose}
      />
    </Styles.AddCardForm>
  )
}
export default AddCardForm
