import * as Styles from './styles'

import { useAuthority } from '@/shared/hooks'
import { Profile } from '../Profile'
import { PersonalInfo } from './PersonalInfo'
import { AUTHORITY } from '@/shared/constants'
import { ApplicationViewerItemDataType } from '../../types'
import { isPersonal } from '@/entities/application-viewer/lib'

interface PersonalDataProps {
  name: string
  data: ApplicationViewerItemDataType
}

export const PersonalData = ({ name, data }: PersonalDataProps) => {
  const { authority } = useAuthority()
  const isEvaluator = authority === AUTHORITY.EVALUATOR

  if (name !== 'default') return null
  if (!isPersonal(data)) return null
  return (
    <Styles.Wrapper>
      <Styles.Content>
        <Styles.Name>{data.name}</Styles.Name>
        <PersonalInfo
          email={data.email}
          phone={data.phone}
          date={data.date}
          reUrl={data.re_url}
          isCanView={!isEvaluator}
        />
      </Styles.Content>
      <Profile profile={data.profile} isEvaluator={isEvaluator} />
    </Styles.Wrapper>
  )
}
