import { Button } from '@/shared/ui'
import * as Styles from './styles'
import { useTranslations } from 'next-intl'

interface AddressFooterProps {
  addressType: 'form' | 'mutate'
  address: string
  detailAddress: string
  handleSetAddress: (address: string, detailAddress: string) => void
  onClose: () => void
}

const AddressFormFooter = ({
  addressType,
  address,
  detailAddress,
  handleSetAddress,
  onClose,
}: AddressFooterProps) => {
  const $t = useTranslations('common')
  if (addressType !== 'form') return
  return (
    <Styles.Footer>
      <Button text={$t('cancel')} state="standard" style="mono" onClick={onClose} />
      <Button
        text={$t('save')}
        onClick={() => handleSetAddress(address, detailAddress)}
        disabled={!address}
      />
    </Styles.Footer>
  )
}
export default AddressFormFooter
