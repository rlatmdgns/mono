import * as Styles from './styles'
import { Tooltip } from '@/shared/ui'
import { Icon } from '@repo/ui'
import { TotalCareer } from './TotalCareer'
import { HighestEducationLevel } from './HighestEducationLevel'
import { ItemTitle } from './ItemTitle'
import { ApplicationViewerItemDataType } from '../../types'

interface ApplicationViewerItemHeaderProps {
  text: string
  data: ApplicationViewerItemDataType
  isRequired?: boolean
  isCanView?: boolean
}

export const ApplicationViewerItemHeader = ({
  text,
  data,
  isRequired,
  isCanView,
}: ApplicationViewerItemHeaderProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Content>
        {!isCanView && (
          <Tooltip text="평가 담당자는 열람 권한이 없습니다." direction="left">
            <Icon icon="icon/lock-line" color="neutralGray500" />
          </Tooltip>
        )}
        <ItemTitle text={text} isRequired={isRequired} />
      </Styles.Content>
      <TotalCareer text={text} data={data} />
      <HighestEducationLevel text={text} data={data} />
    </Styles.Wrapper>
  )
}
