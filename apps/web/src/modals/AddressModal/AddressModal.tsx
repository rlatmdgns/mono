import { ModalLayout } from '@/shared/ui'
import Address from '@/features/Address'
import Header from './components/Header'
import * as Styles from './styles'
import { ContactInterviewPlace } from '@/interface/interview'

interface AddressModalProps {
  title: string
  addressType: 'form' | 'mutate'
  modifyAddress?: ContactInterviewPlace
  modifyAddressIndex?: number
  contact: string[]
  zIndex?: number
  handleGetAddress?: (address: string, detailAddress: string) => void
  onClose: () => void
}

const AddressModal = ({
  title,
  addressType,
  contact,
  modifyAddress,
  modifyAddressIndex,
  zIndex,
  handleGetAddress,
  onClose,
}: AddressModalProps) => {
  return (
    <ModalLayout isDimmed={true} zIndex={zIndex}>
      <Styles.AddAddressModal>
        <Header title={title} />
        <Address
          onClose={onClose}
          addressType={addressType}
          contact={contact}
          modifyAddress={modifyAddress}
          handleGetAddress={handleGetAddress}
          modifyAddressIndex={modifyAddressIndex}
        />
      </Styles.AddAddressModal>
    </ModalLayout>
  )
}

export default AddressModal
