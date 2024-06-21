import { useEvaluationMemberViewerAuthorityFunctions } from './hooks/useEvaluationMemberViewerAuthorityFunctions'
import { Icon } from '@repo/ui'
import * as Styles from './styles'
import { IconNames } from "@repo/ui/src/components/Icon";

interface EvaluationMemberViewerAuthorityProps {
  access?: boolean
}

const EvaluationMemberViewerAuthority = ({access}: EvaluationMemberViewerAuthorityProps) => {
  const {getViewerAuthority} = useEvaluationMemberViewerAuthorityFunctions()
  const {readingIcon, readingText} = getViewerAuthority(access)
  const icon = readingIcon as IconNames

  return (
    <Styles.Wrapper>
      <Icon icon={icon}/>
      <Styles.ReadingText>{readingText}</Styles.ReadingText>
    </Styles.Wrapper>
  )
}

export default EvaluationMemberViewerAuthority
