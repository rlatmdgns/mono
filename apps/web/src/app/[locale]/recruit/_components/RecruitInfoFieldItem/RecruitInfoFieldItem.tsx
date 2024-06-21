import * as Styles from '../RecruitInfo/styles'

interface RecruitInfoFieldItemProps {
  item: {
    title: string
    text: string
  }
}

const RecruitInfoFieldItem = ({ item }: RecruitInfoFieldItemProps) => {
  if (!item.text) return null

  return (
    <Styles.Field>
      <Styles.FieldTitle>{item.title}</Styles.FieldTitle>
      <Styles.FieldInfo>{item.text}</Styles.FieldInfo>
    </Styles.Field>
  )
}

export default RecruitInfoFieldItem
