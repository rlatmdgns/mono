import * as Styles from './styles'
import { useRecoilValue } from 'recoil'
import { SuccessStatusAtom } from '@/app/[locale]/file-request/[fileId]/[applicantId]/_recoil/atom'
import { useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

const FileRequestHeader = () => {
  const successStatus = useRecoilValue(SuccessStatusAtom)
  const $t = useTranslations('file_request')

  return (
    <Styles.ScheduleHeader>
      <Icon icon="icon/recruitment-solid" color="blue500" size={64} />
      <Styles.Title>{successStatus ? $t('completed') : $t('submit')}</Styles.Title>
    </Styles.ScheduleHeader>
  )
}

export default FileRequestHeader
