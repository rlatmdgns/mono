import { Button } from '@/shared/ui'
import { EvaluationViewState } from '@/features/Evaluation/Evaluation.interface'
import * as Styles from '../styles'
import { useTranslations } from 'next-intl'

export const useEvaluationTableButtonBoxFunctions = () => {
  const $t = useTranslations('evaluation')
  const getButton = (
    handleStateChange: (state: EvaluationViewState) => void,
    handleEvaluationTableCloseToggle: () => void,
    authority: string,
    isMyEvaluationSubmitted: boolean,
    status: string,
  ) => {
    const isEvaluationCompleted = status === 'complete'
    const isEvaluationClosed = status === 'closed'

    if (authority === 'evaluationMember')
      return getEvaluationButton(isEvaluationClosed, handleStateChange, isMyEvaluationSubmitted)

    return getAdminButton(
      isEvaluationCompleted,
      isEvaluationClosed,
      handleStateChange,
      handleEvaluationTableCloseToggle,
      isMyEvaluationSubmitted,
    )
  }
  const getEvaluationButton = (
    isEvaluationClosed: boolean,
    handleStateChange: (state: EvaluationViewState) => void,
    isMyEvaluationSubmitted: boolean,
  ) => {
    if (!isMyEvaluationSubmitted && !isEvaluationClosed) {
      return (
        <Button
          onClick={() => handleStateChange('submitForm')}
          text={$t('evaluate')}
          state="standard"
          style="fill-weak"
          size="xs"
        />
      )
    }

    if (isMyEvaluationSubmitted && !isEvaluationClosed) {
      return (
        <Button
          onClick={() => handleStateChange('my_result')}
          text={$t('view_my_evaluation')}
          state="standard"
          style="line"
          size="xs"
        />
      )
    }
  }
  const getAdminButton = (
    isEvaluationCompleted: boolean,
    isEvaluationClosed: boolean,
    handleStateChange: (state: EvaluationViewState) => void,
    handleEvaluationTableCloseToggle: () => void,
    isMyEvaluationSubmitted: boolean,
  ) => {
    if (isEvaluationClosed) {
      return (
        <Button
          onClick={handleEvaluationTableCloseToggle}
          text={$t('cancel_evaluation_deadline')}
          style="fill-weak"
          size="xs"
        />
      )
    }
    if (!isMyEvaluationSubmitted) {
      return (
        <Styles.Container>
          <Button
            onClick={() => handleStateChange('submitForm')}
            text={$t('evaluate')}
            state="standard"
            style="fill-weak"
            size="xs"
          />
          <Button
            onClick={() => handleStateChange('member_result_list')}
            text={$t('evaluation_status')}
            state="standard"
            style="line"
            size="xs"
          />
        </Styles.Container>
      )
    }

    if (isMyEvaluationSubmitted && !isEvaluationCompleted) {
      return (
        <Button
          onClick={() => handleStateChange('member_result_list')}
          text={$t('evaluation_status')}
          state="standard"
          style="line"
          size="xs"
        />
      )
    }

    if (isMyEvaluationSubmitted && isEvaluationCompleted) {
      return (
        <Styles.Container>
          <Button
            onClick={handleEvaluationTableCloseToggle}
            text={$t('evaluation_deadline')}
            style="fill-weak"
            size="xs"
          />
          <Button
            onClick={() => handleStateChange('member_result_list')}
            text={$t('evaluation_status')}
            state="standard"
            style="line"
            size="xs"
          />
        </Styles.Container>
      )
    }
  }
  return {
    getButton,
    getEvaluationButton,
    getAdminButton,
  }
}
