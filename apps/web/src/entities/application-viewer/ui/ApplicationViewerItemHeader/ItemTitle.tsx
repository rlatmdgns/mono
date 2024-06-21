import * as Styles from './styles'

interface ItemTitleProps {
  text: string
  isRequired?: boolean
}

export const ItemTitle = ({ text, isRequired }: ItemTitleProps) => {
  return (
    <Styles.Text>
      {text}
      {isRequired && <Styles.RequiredDot>*</Styles.RequiredDot>}
    </Styles.Text>
  )
}
