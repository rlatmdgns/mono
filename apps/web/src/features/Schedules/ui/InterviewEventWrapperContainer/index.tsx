import * as Styles from './styles'

interface InterviewEventWrapperContainerProps {
  childrenComponent: any
}
export const InterviewEventWrapperContainer = ({
  childrenComponent,
}: InterviewEventWrapperContainerProps) => {
  return (
    <Styles.InterviewEventWrapperContainer>
      {childrenComponent}
    </Styles.InterviewEventWrapperContainer>
  )
}
