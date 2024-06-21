import * as Styles from './styles'

import { MODAL } from '@/shared/constants'
import { Dropdown, IconBoxButton } from '@/shared/ui'
import { useModal } from '@/shared/hooks'

import {
  PaymentInformationAtom,
  PlanInformationAtom,
} from '@/app/[locale]/settings/payment/recoil/atom'

import ConfirmModal from '@/modals/ConfirmModal'
import BillingEmail from '@/features/Card/components/BillingEmail/BillingEmail'
import useDeleteCard from '@/features/Card/hooks/useDeleteCard'

import { getDayFormat } from '@/shared/lib/utils'

import dayjs from 'dayjs'
import { ChangeEvent, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { useLocale, useTranslations } from 'next-intl'
import { Icon } from '@repo/ui'

interface CardProps {
  email?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Card = ({ email, onChange }: CardProps) => {
  const paymentInformation = useRecoilValue(PaymentInformationAtom)
  const planInformation = useRecoilValue(PlanInformationAtom)
  const [isDeleteCardConfirm, setIsDeleteCardConfirm] = useState(false)
  const { openModal, closeModal } = useModal()
  const { deleteCardMutate } = useDeleteCard()
  const $t = useTranslations()
  const currentLocale = useLocale()

  const endPlanDate = getDayFormat(
    dayjs(planInformation.plan_end_date).toDate(),
    currentLocale === 'ko' ? 'YY년  MM월  DD일' : 'YY.MM.DD',
  )

  /**
   * 카드 삭제 시, 서브 타이틀
   * @returns string
   */
  const getCardDeleteSubTitle = () => {
    if (planInformation.is_free_plan) return
    return $t('messages.delete_card_description', { endPlanDate })
  }

  const handleCardDelete = () => {
    deleteCardMutate()
    setIsDeleteCardConfirm(false)
  }

  /**
   * 카드 추가, 수정 모달 오픈
   * @param submitType 'add' | 'modify' 카드 추가, 수정에 따라, string 전달
   */
  const handleCardAdd = (submitType: string) => {
    openModal(MODAL.ADD_CARD, {
      submitType: submitType,
      onClick: closeModal(MODAL.ADD_CARD),
    })
  }

  const handleCardDeleteConfirm = (status: boolean) => {
    setIsDeleteCardConfirm(status)
  }

  if (!paymentInformation) {
    return (
      <>
        <Styles.AddCard onClick={() => handleCardAdd('add')}>
          <Icon icon="icon/add-solid" color="neutralGray700" />
          {$t('setting.card.register_action')}
        </Styles.AddCard>
      </>
    )
  }

  return (
    <>
      <Styles.CardWrap>
        <Styles.ModifyCard>
          <Styles.ModifyText>
            <Icon icon="icon/card-solid" color="neutralGray500" />
            {paymentInformation.card_name} {paymentInformation.card_number}
          </Styles.ModifyText>
          <Dropdown
            button={<IconBoxButton icon="icon/more-solid" state="standard" size="xs" />}
            direction={'left'}
            isNotPortal
          >
            <Dropdown.Item onClick={() => handleCardAdd('modify')}>
              {$t('payment.card.change')}
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => handleCardDeleteConfirm(true)}
              isWarning
              disabled={!!paymentInformation?.is_subscribed}
            >
              {$t('payment.card.delete')}
            </Dropdown.Item>
          </Dropdown>
        </Styles.ModifyCard>
        <BillingEmail email={email} onChange={onChange} />
      </Styles.CardWrap>
      {isDeleteCardConfirm && (
        <ConfirmModal
          title={$t('messages.delete_card_confirm')}
          subtitle={getCardDeleteSubTitle()}
          textConfirm={$t('common.delete_action')}
          textCancel={'$t(common.close)'}
          onClick={handleCardDelete}
          onClose={() => handleCardDeleteConfirm(false)}
        />
      )}
    </>
  )
}
export default Card
