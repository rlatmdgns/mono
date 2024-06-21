import * as Styles from './styles'
import { DetailItem } from '@/app/[locale]/settings/payment/container/PaymentContainer.interface'
import { Icon } from '@repo/ui'

interface PlanListProps {
  detail: DetailItem
}

const PlanDetailList = ({ detail }: PlanListProps) => {
  return (
    <Styles.PlanDetailList>
      <Styles.PlanTitle>{detail.title}</Styles.PlanTitle>
      {detail.details.map((detail, index) => (
        <Styles.PlanItem key={`detail_${index}`}>
          <Icon icon="icon/check-line1" color="blue500" />
          {detail}
        </Styles.PlanItem>
      ))}
    </Styles.PlanDetailList>
  )
}
export default PlanDetailList
