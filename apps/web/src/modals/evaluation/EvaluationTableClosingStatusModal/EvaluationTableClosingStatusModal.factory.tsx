import { EvaluationTableStatus } from '@/services/evaluation/getEvaluationTableApplicantStatus/getEvaluationTableApplicantStatus.interface'
import { Icon } from '@repo/ui'
import { IMAGES } from '@/shared/constants'
import Image from 'next/image'

export const getClosingStatusContent = (table_applicant_status: EvaluationTableStatus) => {
  switch (table_applicant_status) {
    case 'TA_CLOSED':
      return {
        icon: <Icon icon="icon/check-solid" color="blue500" />,
        bgColor: 'blue100',
        text: '평가 마감',
      }
    default:
      return {
        icon: <Image src={IMAGES.THREE_DOTS_HORIZONTAL_GRAY} width={16} height={16} alt="" />,
        bgColor: 'neutralGray100',
        text: '평가 진행중',
      }
  }
}
