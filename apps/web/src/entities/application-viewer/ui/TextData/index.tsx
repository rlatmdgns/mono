import * as Styles from '../styles'

interface TextDataProps {
  data: string
}

export const TextData = ({ data }: TextDataProps) => {
  return (
    <Styles.Content>
      <Styles.Text>{data}</Styles.Text>
    </Styles.Content>
  )
}
