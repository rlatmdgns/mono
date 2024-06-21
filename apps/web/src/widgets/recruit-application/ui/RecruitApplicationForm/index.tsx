import {
  ApplicationBasicItem,
  ApplicationPrivacyConsent,
  ApplicationSteadPrivacyConsent,
  DocumentInputListForApply,
  PreQuestionInputListForApply,
} from '@/features/Application/ui'
import { ApplicantAddForm } from '@/features/Recruit'
import { APPLICANT_BASIC_INFO_LIST } from '@/widgets/Application/constants'
import { Controller, useFormContext } from 'react-hook-form'
import * as Styles from './styles'
import {
  BasicApplicationItem,
  RecruitApplicationItem,
} from '@/entities/build-application/types/applicationItem'

interface RecruitApplicationFormProps {
  customApplicantItems: RecruitApplicationItem[]
  enterpriseName: string
  policy: string
  isAddDirect?: boolean
}

export const RecruitApplicationForm = ({
  customApplicantItems,
  enterpriseName,
  policy,
  isAddDirect,
}: RecruitApplicationFormProps) => {
  const methods = useFormContext()
  const { control } = methods

  return (
    <Styles.FormWrapper>
      {APPLICANT_BASIC_INFO_LIST.map((item: BasicApplicationItem) => {
        return (
          <Controller
            key={item.key}
            name={item.key}
            control={control}
            render={({ field }) => {
              return (
                <ApplicationBasicItem item={item} value={field.value} onChange={field.onChange} />
              )
            }}
          />
        )
      })}
      {customApplicantItems?.map((item: RecruitApplicationItem, index: number) => {
        if (item.key === 'address' || item.key === 'profile') {
          return (
            <ApplicantAddForm
              key={item.key}
              name={item.key}
              index={index}
              note={item.note}
              isRequired={item.isRequired || item.is_required}
              isCanView={item.is_canview}
            />
          )
        }
        return (
          <Controller
            key={item.key}
            name={item.key}
            control={control}
            render={({ field }) => {
              if (item.key === 'documents') {
                return <DocumentInputListForApply documents={item.documents} />
              }
              if (item.key === 'pre_questions') {
                return <PreQuestionInputListForApply preQuestions={item.questions} />
              }
              return (
                <ApplicantAddForm
                  value={field.value}
                  name={item.key}
                  index={index}
                  note={item.note}
                  isRequired={item.isRequired || item.is_required}
                  isCanView={item.is_canview}
                  onChange={field.onChange}
                />
              )
            }}
          />
        )
      })}
      {!isAddDirect && (
        <Styles.PrivacyWrapper>
          <Controller
            render={({ field }) => (
              <ApplicationPrivacyConsent
                isChecked={field.value}
                onChange={field.onChange}
                enterpriseName={enterpriseName}
                policy={policy}
              />
            )}
            name="enterprise_required_personal_terms"
          />
          <Controller
            render={({ field }) => (
              <ApplicationSteadPrivacyConsent isChecked={field.value} onChange={field.onChange} />
            )}
            name="enterprise_select_personal_terms"
          />
        </Styles.PrivacyWrapper>
      )}
    </Styles.FormWrapper>
  )
}
