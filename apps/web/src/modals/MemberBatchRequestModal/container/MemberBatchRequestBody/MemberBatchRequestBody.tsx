import * as Styles from './styles'
import MemberBatchInformation from '@/modals/MemberBatchRequestModal/components/MemberBatchInfomation'
import ExcelUpload from '@/features/ExcelUpload'
import {
  MemberBatchRequestExcelDataAtom,
  MemberBatchResetStateAtom,
} from '@/modals/MemberBatchRequestModal/recoil/atom'
import { MEMBER_BATCH_REQUEST_SHEETS } from '@/modals/MemberBatchRequestModal/container/MemberBatchRequestBody/MemberBatchRequestBody.constant'
import MemberBatchList from '@/modals/MemberBatchRequestModal/container/MemberBatchList'

const MemberBatchRequestBody = () => {
  return (
    <Styles.BodyWrap>
      <ExcelUpload
        atomName={MemberBatchRequestExcelDataAtom}
        resetAtomName={MemberBatchResetStateAtom}
        cellList={MEMBER_BATCH_REQUEST_SHEETS}
      />
      <MemberBatchInformation />
      <MemberBatchList />
    </Styles.BodyWrap>
  )
}
export default MemberBatchRequestBody
