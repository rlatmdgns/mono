import * as Styles from './styles'
import { Icon } from '@repo/ui'

export const EmptyProfile = () => {
  return (
    <Styles.Empty>
      <Icon icon="icon/person-solid" color="neutralGray300" size={48} />
      <Styles.EmptyText>사진 미제출</Styles.EmptyText>
    </Styles.Empty>
  )
}
