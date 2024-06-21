import { useModal } from '@/shared/hooks'
import { withAuth } from '@/shared/lib'
import { Dropdown } from '@/shared/ui'
import { API_URL, BASE_URL, MODAL } from '@/shared/constants'
import { Icon } from '@repo/ui'
import useAddStep from '@/app/[locale]/postings/_hooks/useAddStep'
import fileDownload from '@/services/fileDownload'

import React from 'react'
import { useTranslations } from 'next-intl'

interface PostingMenuDropdownAuthProps {
  id: string
  handleClosedToggle: (status: boolean) => void
}

const PostingMenuDropdownAuth = ({ id, handleClosedToggle }: PostingMenuDropdownAuthProps) => {
  const { openModal } = useModal()
  const { addStepMutate } = useAddStep(id, handleClosedToggle)
  const $t = useTranslations('announcement_detail.features')

  const handleApplicantAdd = () => {
    openModal(MODAL.ADD_APPLICANT)
    handleClosedToggle(false)
  }
  const handleStepAdd = () => addStepMutate()

  const handleExcelDownload = async () => {
    const file = {
      file_url: `${BASE_URL}${API_URL.APPLICANT_EXCEL}/${id}`,
      file_name: 'posting_applicants.xlsx',
    }
    await fileDownload(file, 'excel')
    handleClosedToggle(false)
  }

  return (
    <>
      <Dropdown.Item size={'lg'} onClick={handleApplicantAdd}>
        <Icon icon="icon/add-member-solid" color="neutralGray500" />
        {$t('add_direct_applicant')}
      </Dropdown.Item>
      <Dropdown.Item size={'lg'} onClick={handleStepAdd}>
        <Icon icon="icon/add-column-solid" color="neutralGray500" />
        {$t('add_step')}
      </Dropdown.Item>
      <Dropdown.Item size={'lg'} onClick={handleExcelDownload}>
        <Icon icon="icon/excel-solid" color="neutralGray500" />
        {$t('excel_down')}
      </Dropdown.Item>
      <Dropdown.Divider />
    </>
  )
}

export default withAuth(PostingMenuDropdownAuth)
