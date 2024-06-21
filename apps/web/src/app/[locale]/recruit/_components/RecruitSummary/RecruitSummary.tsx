import { RecruitPage } from '@/interface/recruitPage'
import * as Styles from './styles'
import { scheduleDayJs } from '@/shared/lib'
import { useTranslations } from 'next-intl'
import { useRecruitContentFactory } from '@/app/[locale]/recruit/_components/RecruitContent/hooks/useRecruitContentFactory'

interface RecruitSummaryProps {
  recruit?: RecruitPage
  isTemplate?: boolean
}

const RecruitSummary = ({ recruit, isTemplate }: RecruitSummaryProps) => {
  const $t = useTranslations()
  const { getCareer } = useRecruitContentFactory()

  if (!recruit) return null
  const {
    posting_field,
    is_irrelevant,
    is_newcomer,
    is_experienced,
    min_experience_years,
    max_experience_years,
    posting_deadline,
    days_remaining,
  } = recruit

  const getRemainDay = () => {
    if (days_remaining === 0) return ` (${$t('announcement_detail.deadline_today')})`
    return ` (${$t('announcement_detail.deadline_d_day', { remaining: days_remaining })})`
  }

  const fields = [
    { title: $t('common.recruitment_position'), value: posting_field },
    {
      title: $t('common.work_experience'),
      value: getCareer(
        is_irrelevant,
        is_newcomer,
        is_experienced,
        min_experience_years,
        max_experience_years,
      ),
    },
    {
      title: $t('common.announce_deadline'),
      value: !posting_deadline
        ? $t('common.open_recruitment')
        : scheduleDayJs(posting_deadline).format($t('date_format.two_year_date_month_minutes')) +
          getRemainDay(),
    },
  ]
  return (
    <Styles.RecruitSummary $isTemplate={isTemplate}>
      {fields.map((field) => (
        <Styles.Summary key={field.title}>
          <Styles.SummaryTitle>{field.title}</Styles.SummaryTitle>
          <Styles.SummaryInfo>{field.value}</Styles.SummaryInfo>
        </Styles.Summary>
      ))}
    </Styles.RecruitSummary>
  )
}

export default RecruitSummary
