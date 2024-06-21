'use client'

import ApplicantSearch from '@/app/[locale]/applicants/_components/ApplicantSearch'
import { API_URL, BASE_URL } from '@/shared/constants'
import fileDownload from '@/services/fileDownload'
import * as Styles from './styles'
import { IconBoxButton } from '@/shared/ui'

const ApplicantsMenu = () => {
  const handleExcelDownload = async () => {
    const file = {
      file_url: `${BASE_URL}${API_URL.APPLICANT_EXCEL}`,
      file_name: 'applicant_pool.xlsx',
    }
    await fileDownload(file, 'excel')
  }

  return (
    <Styles.Wrapper>
      <IconBoxButton
        onClick={handleExcelDownload}
        icon="icon/excel-solid"
        state="standard"
        style="line"
      />
      <ApplicantSearch />
    </Styles.Wrapper>
  )
}

export default ApplicantsMenu
