import * as Styles from './styles'
import { useLocale } from 'next-intl'

interface EvaluationTitleAndScoreProps {
  title: string
  score?: number | string
  totalScore?: number
  isEssay?: boolean
}

const EvaluationTitleAndScore = ({
  title,
  isEssay = false,
  score,
  totalScore = 10,
}: EvaluationTitleAndScoreProps) => {
  const currentLocale = useLocale()

  return (
    <Styles.Wrapper>
      <Styles.Title>{title}</Styles.Title>
      {!isEssay && (
        <Styles.Scores>
          {score !== undefined && (
            <Styles.Score>
              {score} {currentLocale === 'ko' ? '점' : ''}
            </Styles.Score>
          )}
          <Styles.TotalScore>
            {score !== undefined && '/'} {totalScore}
            {currentLocale === 'ko' ? '점' : ''}
          </Styles.TotalScore>
        </Styles.Scores>
      )}
    </Styles.Wrapper>
  )
}

export default EvaluationTitleAndScore
