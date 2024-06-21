import * as Styles from './styles'
import dayjs from 'dayjs'

export const DateCellWrapper = (props: any) => {
  const today = dayjs().subtract(1, 'day')
  return (
    <Styles.Wrapper $isBefore={dayjs(props.value).isBefore(today)}>{props.children}</Styles.Wrapper>
  )
}
