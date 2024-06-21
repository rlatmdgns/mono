import * as Styles from './styles'
import { FILES } from '@/shared/constants'
import fileDownload from '@/services/fileDownload'
import { useTranslations } from 'next-intl'

const MemberBatchInformation = () => {
  const $t = useTranslations()
  const handleFileDownload = async () => {
    const file = {
      file_url: FILES.ENTERPRISE_MEMBER_FORM,
      file_name: 'enterprise_member_form.xlsx',
    }
    await fileDownload(file, 'excel')
  }

  return (
    <Styles.MemberBatchInformation>
      <Styles.Title>{$t('setting.member_setting.add_batch_member_method')}</Styles.Title>
      <Styles.InformationList>
        <Styles.InfoItem>
          {$t('setting.member_setting.excel_download_description')}
          <Styles.FileDownload onClick={handleFileDownload}>
            {$t('common.file_download')}
          </Styles.FileDownload>
        </Styles.InfoItem>
        <Styles.InfoItem>{$t('setting.member_setting.excel_insert_information')}</Styles.InfoItem>
        <Styles.InfoItem>
          {$t('setting.member_setting.excel_upload_after_button_description')}
        </Styles.InfoItem>
      </Styles.InformationList>
    </Styles.MemberBatchInformation>
  )
}
export default MemberBatchInformation
