import * as Styles from './styles'

interface EvaluationTabItemProps {
  isPoints: boolean
  title?: string | number
  percent: number
}

const EvaluationTabItem = ({ isPoints, title, percent }: EvaluationTabItemProps) => {
  return (
    <Styles.Wrapper $isPoints={isPoints}>
      {title}
      <Styles.Percent>{percent}%</Styles.Percent>
    </Styles.Wrapper>
  )
}

export default EvaluationTabItem
