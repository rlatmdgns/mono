import AddressFormFooter from '@/features/Address/components/AddressFormFooter'
import AddressMutateFooter from '@/features/Address/components/AddressMutateFooter'
import { ContactInterviewPlace } from '@/interface/interview'

interface AddressFooterProps {
  addressType: 'form' | 'mutate'
  address: string
  detailAddress: string
  modifyAddress?: ContactInterviewPlace
  handleAddressAdd: (detailAddress: string) => void
  handleAddressModify: (detailAddress: string) => void
  handleSetAddress: (address: string, detailAddress: string) => void
  onClose: () => void
}

const AddressFooter = ({
  addressType,
  address,
  detailAddress,
  modifyAddress,
  handleSetAddress,
  handleAddressAdd,
  handleAddressModify,
  onClose,
}: AddressFooterProps) => {
  if (!addressType) return
  return (
    <>
      <AddressFormFooter
        addressType={addressType}
        address={address}
        detailAddress={detailAddress}
        handleSetAddress={handleSetAddress}
        onClose={onClose}
      />
      <AddressMutateFooter
        addressType={addressType}
        address={address}
        detailAddress={detailAddress}
        modifyAddress={modifyAddress}
        handleAddressAdd={handleAddressAdd}
        handleAddressModify={handleAddressModify}
        onClose={onClose}
      />
    </>
  )
}
export default AddressFooter
