import * as Styles from './styles'
import React from 'react'
import { Icon } from '@repo/ui'
import { useTranslations } from 'next-intl'

interface ScoreBadgeProps {
  score: React.ReactNode
  percentage?: string
}

const ScoreBadge = ({ score, percentage }: ScoreBadgeProps) => {
  const $t = useTranslations('evaluation')
  return (
    <Styles.Wrapper>
      <Icon icon="icon/document-solid" color="blue500" />
      <Styles.Text>
        {score}
        {percentage && (
          <Styles.Percentage>
            ({$t('converted_score_percentage', { percentage })})
          </Styles.Percentage>
        )}
      </Styles.Text>
    </Styles.Wrapper>
  )
}

export default ScoreBadge
