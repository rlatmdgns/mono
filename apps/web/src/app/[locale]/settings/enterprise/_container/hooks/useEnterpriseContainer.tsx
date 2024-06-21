import React, { useEffect, useState } from 'react'
import temporaryFile from '@/services/temporaryFile'
import { FieldValues } from 'react-hook-form'
import useUpdateEnterprise from '@/app/[locale]/settings/enterprise/_container/hooks/useUpdateEnterprise'
import { MODAL } from '@/shared/constants'
import { useModal } from '@/shared/hooks'
import { EnterpriseBackground } from '@/interface/enterpriseInformation'
import { fileSizeValidation } from '@/shared/lib/utils'
import { useTranslations } from 'next-intl'

const useEnterpriseContainer = (
  setValue: any,
  enterprise_logo?: string,
  enterprise_background?: EnterpriseBackground[],
) => {
  const [logo, setLogo] = useState('')
  const [isLogoModifyStatus, setIsLogoModifyStatus] = useState(false)
  const { openModal, closeModal } = useModal()

  const [enterpriseSignatureImage, setEnterpriseSignatureImage] = useState<EnterpriseBackground[]>(
    [],
  )
  const [isSignatureModifyStatus, setIsSignatureModifyStatus] = useState([false, false])

  const $t = useTranslations()
  const handleAddressAdd = () => {
    openModal(MODAL.ADDRESS, {
      title: $t('common.address_search'),
      addressType: 'form',
      zIndex: 50,
      handleGetAddress: (address: string, detailAddress: string) => {
        handleSetAddress(address, detailAddress)
      },
      onclick: () => {
        closeModal(MODAL.ADDRESS)
      },
    })
  }

  const handleSetAddress = (address: string, detailAddress: string) => {
    setValue('enterprise_address', address, { shouldDirty: true })
    setValue('enterprise_detail_address', detailAddress, { shouldDirty: true })
  }

  const handleSignatureUpdate = (index: number) => {
    const newEnterpriseSignatureImage = enterpriseSignatureImage.map((image, imageIndex) => {
      return {
        ...image,
        file_state: imageIndex === index ? 1 : 0,
      }
    })
    if (newEnterpriseSignatureImage.length === 0) return

    setValue('enterprise_background', newEnterpriseSignatureImage, {
      shouldDirty: true,
    })
    setEnterpriseSignatureImage(newEnterpriseSignatureImage)
  }

  const { updateEnterpriseMutate } = useUpdateEnterprise()

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>, maxSize: number) => {
    if (!event.target.files) return

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    if (
      !fileSizeValidation({
        file: event.target.files[0],
        maxSize: maxSize,
      })
    )
      return
    return await temporaryFile(formData)
  }

  const handleRemoveLogo = () => {
    setValue('enterprise_logo', '', { shouldDirty: true })
    setLogo('')
  }
  const handleChangeLogo = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const result = await handleFileUpload(event, 1)
    if (!result) return
    setValue('enterprise_logo', result.temporary.url, { shouldDirty: true })
    setLogo(result.temporary.url)
    setIsLogoModifyStatus(false)
  }

  const handleLogoModify = () => {
    setIsLogoModifyStatus(true)
  }
  const handleSignatureDim = (index: number, status: boolean) => {
    const newStatus = [...isSignatureModifyStatus]
    newStatus[index] = true
    setIsSignatureModifyStatus(newStatus)
  }

  const handleChangeEnterpriseImage = async (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const result = await handleFileUpload(event, 3)
    if (!result) return
    let newEnterpriseSignatureImage: EnterpriseBackground[] = [...enterpriseSignatureImage]

    newEnterpriseSignatureImage[index] = {
      file_url: result.temporary.url,
      file_state: 0,
    }

    /**
     * 이미지가 최초 등록되었을 때, 대표 이미지로 설정
     */

    if (newEnterpriseSignatureImage.filter((image) => image.file_url).length === 1) {
      newEnterpriseSignatureImage[index].file_state = 1
    }

    /**
     * 기존 이미지가 없으나, 제일 첫번째에 이미지가 추가되지 않았을 때 이미지 0번째로 이동
     */
    if (
      newEnterpriseSignatureImage.filter((image) => image.file_url).length === 1 &&
      !newEnterpriseSignatureImage[0]
    ) {
      newEnterpriseSignatureImage = [
        {
          file_url: result.temporary.url,
          file_state: 1,
        },
      ]
    }

    setValue('enterprise_background', newEnterpriseSignatureImage, {
      shouldDirty: true,
    })
    setEnterpriseSignatureImage([...newEnterpriseSignatureImage])
    setIsSignatureModifyStatus([false, false])
  }

  const handleRemoveEnterpriseImage = (index: number) => {
    const newEnterpriseSignatureImage = [...enterpriseSignatureImage]
    newEnterpriseSignatureImage[index] = {
      file_url: '',
      file_state: 0,
    }

    handleSignatureDim(index, false)
    setValue('enterprise_background', newEnterpriseSignatureImage, {
      shouldDirty: true,
    })
    setEnterpriseSignatureImage([...newEnterpriseSignatureImage])
  }

  const handleSubmitForm = async (form: FieldValues) => {
    const postData: any = { ...form }
    updateEnterpriseMutate(postData)
  }

  useEffect(() => {
    if (!enterprise_logo) return
    setLogo(enterprise_logo)
  }, [enterprise_logo])

  useEffect(() => {
    if (!enterprise_background) return
    setEnterpriseSignatureImage(enterprise_background)
  }, [enterprise_background])

  return {
    logo,
    isLogoModifyStatus,
    enterpriseSignatureImage,
    isSignatureModifyStatus,
    handleFileUpload,
    handleRemoveLogo,
    handleChangeLogo,
    handleLogoModify,
    handleSignatureDim,
    handleChangeEnterpriseImage,
    handleRemoveEnterpriseImage,
    handleSubmitForm,
    handleSignatureUpdate,
    handleAddressAdd,
  }
}

export default useEnterpriseContainer
