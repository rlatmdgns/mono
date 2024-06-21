import { Button } from '@/shared/ui'
import * as Styles from './styles'
import { ContactInterviewPlace } from '@/interface/interview'
import { useTranslations } from 'next-intl'

interface AddressFooterProps {
  addressType: 'form' | 'mutate'
  address: string
  detailAddress: string
  modifyAddress?: ContactInterviewPlace
  handleAddressAdd: (detailAddress: string) => void
  handleAddressModify: (detailAddress: string) => void
  onClose: () => void
}

const AddressMutateFooter = ({
  addressType,
  address,
  detailAddress,
  modifyAddress,
  handleAddressAdd,
  handleAddressModify,
  onClose,
}: AddressFooterProps) => {
  const $t = useTranslations('common')
  if (addressType !== 'mutate') return
  return (
    <Styles.Footer>
      <Button
        text={$t('cancel')}
        state="standard"
        style="mono"
        onClick={() => {
          onClose()
        }}
      />
      {!modifyAddress && (
        <Button
          text={$t('add_action')}
          onClick={() => handleAddressAdd(detailAddress)}
          disabled={!address}
        />
      )}
      {modifyAddress && (
        <Button
          text={$t('modify_action')}
          onClick={() => handleAddressModify(detailAddress)}
          disabled={!address}
        />
      )}
    </Styles.Footer>
  )
}
export default AddressMutateFooter
