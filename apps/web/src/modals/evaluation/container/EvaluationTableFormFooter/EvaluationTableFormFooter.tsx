import * as Styles from './styles'
import useTemplates from '@/app/[locale]/settings/template/_hooks/useTemplates'
import { Button } from '@/shared/ui'
import { MODAL } from '@/shared/constants'
import { Template } from '@/interface/template'
import { useModal } from '@/shared/hooks'
import { useTranslations } from 'next-intl'

interface CreateEvaluationTableFooterProps {
  onClose: () => void
  isTemplate?: boolean
  onTemplateSelect?: (templateId: number) => void
}

const EvaluationTableFormFooter = ({
  onClose,
  isTemplate,
  onTemplateSelect,
}: CreateEvaluationTableFooterProps) => {
  const { openModal } = useModal()
  const $t = useTranslations('common')
  const { data } = useTemplates({
    template_type: 'evaluation',
  })

  const templates =
    (data &&
      data?.map((template: Template) => {
        return {
          label: template.template_title,
          value: template.template_id,
        }
      })) ||
    []

  const handleModalOpen = () =>
    onTemplateSelect &&
    openModal(MODAL.SELECT_TEMPLATE, {
      templates: templates,
      onSubmit: (id: number) => onTemplateSelect(id),
    })

  return (
    <Styles.Wrapper>
      <div>
        {isTemplate && (
          <Button
            onClick={handleModalOpen}
            text={$t('load_template')}
            state="standard"
            style="line"
            width="fit-content"
          />
        )}
      </div>
      <Styles.ButtonBox>
        <Button
          onClick={onClose}
          text={$t('cancel')}
          state="standard"
          style="mono"
          width="fit-content"
        />
        <Button type="submit" text={$t('confirm')} width="74px" />
      </Styles.ButtonBox>
    </Styles.Wrapper>
  )
}

export default EvaluationTableFormFooter
