import * as Styles from './styles'
import { ApplicationViewerItemDataType } from '../../types'
import { isDocument } from '../../lib'
import { useRecoilValue } from 'recoil'
import { applicantNameAtom } from '@/modals/ApplicantModal/recoil'
import { EmptyData } from '@/entities/application-viewer/ui/EmptyData'
import { Icon } from '@repo/ui'

interface DocumentDataProps {
  name: string
  type?: string
  data: ApplicationViewerItemDataType
}

export const DocumentData = ({ name, type, data }: DocumentDataProps) => {
  const applicantName = useRecoilValue(applicantNameAtom)
  if (type !== 'file') return null
  if (!isDocument(data)) return null

  const { file_url, is_deleted, is_submitted } = data

  const fileName = name === 'resume' ? `${applicantName}_이력서 ` : data.file_name

  if ((!file_url && !is_deleted) || !is_submitted) {
    return <EmptyData text="미제출" />
  }
  return (
    <Styles.Wrapper>
      <Styles.FileBox $isDeleted={is_deleted}>
        <Styles.FileContent>
          <Icon icon="icon/document-solid" size={16} color="neutralGray500" />
          <Styles.FileName>{fileName}</Styles.FileName>
        </Styles.FileContent>
        {is_deleted ? (
          <Styles.FileStateChip>
            <Icon icon="icon/warning-solid" size={16} color="neutralGray700" />
            삭제됨
          </Styles.FileStateChip>
        ) : (
          <Styles.FileStateChip>
            <Icon icon="icon/check-line1" size={16} color="neutralGray700" />
            제출됨
          </Styles.FileStateChip>
        )}
      </Styles.FileBox>
    </Styles.Wrapper>
  )
}
