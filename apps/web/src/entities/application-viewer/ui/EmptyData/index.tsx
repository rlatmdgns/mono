import * as Styles from '../styles'

interface UnSubmittedProps {
  text: string
}

export const EmptyData = ({ text }: UnSubmittedProps) => {
  return (
    <Styles.Content>
      <Styles.Disabled>{text}</Styles.Disabled>
    </Styles.Content>
  )
}
