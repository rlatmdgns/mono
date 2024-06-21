import ValidationBadge from '../ValidationBadge/ValidationBadge'
import * as Styles from './styles'

interface ValidationBadgesProps {
  conditions: any
}

const ValidationBadges = ({ conditions }: ValidationBadgesProps) => {
  return (
    <Styles.Wrapper>
      {conditions.map((condition: any, index: number) => {
        return <ValidationBadge isChecked={condition.isChecked} text={condition.text} key={index} />
      })}
    </Styles.Wrapper>
  )
}

export default ValidationBadges
