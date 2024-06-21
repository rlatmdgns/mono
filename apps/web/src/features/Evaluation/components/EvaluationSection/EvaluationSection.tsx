import * as Styles from './styles'

interface EvaluationSectionProps {
  title?: string
  desc?: string
}

const EvaluationSection = ({ title, desc }: EvaluationSectionProps) => {
  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      {desc && <Styles.Desc>{desc}</Styles.Desc>}
    </Styles.Wrapper>
  )
}

export default EvaluationSection
