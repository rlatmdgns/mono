import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/shared/constants'
import { Button, Toast } from '@/shared/ui'
import * as Styles from './styles'
import ConfirmModal from '@/modals/ConfirmModal'
import deleteUser from '@/services/auth/user/deleteUser'
import { useTranslations } from 'next-intl'
import { signOut } from '@/widgets/HomeSettingModal/api/signOut'

const AccountFooter = () => {
  const [isConfirm, setIsConfirm] = useState(false)
  const router = useRouter()
  const $t = useTranslations()

  const handleConfirmStatus = (status: boolean) => {
    setIsConfirm(status)
  }

  const handleLogout = async () => {
    const response = await signOut()
    if (response.status === 200) {
      router.push(PAGE.SIGN_IN)
    }
  }

  const handleExpire = async () => {
    try {
      await deleteUser()
      Toast.success($t('messages.expired_done'))
      router.push(PAGE.SIGN_IN)
    } catch (error: any) {
      Toast.error(error.message)
    }
  }

  return (
    <Styles.ButtonList>
      <Button text={$t('login.logout')} style="mono" state="standard" onClick={handleLogout} />
      <Button
        text={$t('setting.my_account.account_withdrawal')}
        style="mono"
        state="warning"
        onClick={() => handleConfirmStatus(true)}
      />
      {isConfirm && (
        <ConfirmModal
          title={$t('setting.my_account.withdrawal_desc')}
          textCancel={$t('common.close')}
          textConfirm={$t('setting.my_account.withdrawal')}
          onClick={handleExpire}
          onClose={() => handleConfirmStatus(false)}
        />
      )}
    </Styles.ButtonList>
  )
}
export default AccountFooter
