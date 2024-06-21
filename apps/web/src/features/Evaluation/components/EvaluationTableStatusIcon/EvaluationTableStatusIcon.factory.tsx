import { EvaluationTableStatusItem } from '@/features/Evaluation/Evaluation.interface'
import { IMAGES } from '@/shared/constants'
import { Icon } from '@repo/ui'
import Image from 'next/image'

export const getEvaluationTableStatusIcon = (status: string) => {
  const statusList: EvaluationTableStatusItem = {
    proceeding: {
      icon: <Image src={IMAGES.THREE_DOTS_HORIZONTAL_GRAY} width={26} height={26} alt="" />,
      bgColor: 'neutralGray100',
    },
    closed: {
      icon: <Icon icon="icon/check-solid" color="blue500" />,
      bgColor: 'blue100',
    },
  }

  return statusList[status]
}
