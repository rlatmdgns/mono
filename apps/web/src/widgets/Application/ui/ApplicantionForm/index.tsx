import { ApplicationHeader } from '@/entities/Application'
import { ApplicationTemplateTitle } from '@/entities/Application/ui/ApplicationTemplateTitle'
import { SaveApplicationTemplate } from '@/entities/Application/ui/SaveApplicationTemplate'
import { SelectApplicationTemplate } from '@/entities/Application/ui/SelectApplicationTemplate'
import { ApplicationFormBody } from '../ApplicationFormBody'
import * as Styles from './styles'
import { Template } from '@/interface/template'
import {
  BasicApplicationItem,
  RecruitApplicationItem,
} from '@/entities/build-application/types/applicationItem'

interface ApplicationFormProps {
  postingTitle?: string
  basicItems?: BasicApplicationItem[]
  applicantItems?: RecruitApplicationItem[]
  onMoveUp: (index: number, type?: 'documents' | 'questions') => void
  onMoveDown: (index: number, type?: 'documents' | 'questions') => void
  onDelete: (index: number, type?: 'documents' | 'questions') => void
  onContentChange: (key: string, value: string) => void
  isTemplate?: boolean
  templates?: Template[]
}

export const ApplicationForm = ({
  postingTitle,
  basicItems = [],
  applicantItems = [],
  onMoveUp,
  onMoveDown,
  onDelete,
  onContentChange,
  isTemplate,
  templates,
}: ApplicationFormProps) => {
  return (
    <Styles.Wrapper>
      <ApplicationTemplateTitle isTemplate={isTemplate} onContentChange={onContentChange} />
      <SelectApplicationTemplate isTemplate={isTemplate} templates={templates} />
      <Styles.Form>
        <Styles.Header>
          <ApplicationHeader postingTitle={postingTitle} />
        </Styles.Header>
        <ApplicationFormBody
          basicItems={basicItems}
          applicantItems={applicantItems}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
          onDelete={onDelete}
          onContentChange={onContentChange}
        />
      </Styles.Form>
      <SaveApplicationTemplate isTemplate={isTemplate} />
    </Styles.Wrapper>
  )
}
