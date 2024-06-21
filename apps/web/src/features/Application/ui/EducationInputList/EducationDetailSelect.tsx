import { useEffect, useState } from 'react'
import { getForeignUniversity } from '@/features/Application/lib'
import { DEPARTMENT_SELECT } from '@/features/Application/constants/departmentSelect'
import { ENTER_TYPE, FOREIGN_UNIVERSITIES, LEAVE_TYPE } from '@/features/Application/constants'
import { CheckBox, Select, SelectDatePicker, TextInput, Toast } from '@/shared/ui'
import * as Styles from '@/features/Application/ui/EducationInputList/styles'
import {
  getGraduateUniversity,
  getHighSchool,
  getUniversity,
  getUniversityMajor,
} from '@/features/Application/api'
import { useFormContext } from 'react-hook-form'
import { Education } from '@/entities/Application/types/ApplicantRequest'
import {
  HighSchoolSearch,
  UniversityMajorSearch,
  UniversitySearch,
} from '@/entities/Application/types'
import { InputActionMeta } from 'react-select'

interface SchoolDetailSelectProps {
  education: Education
  educationIndex: number
  onChange: (key: string, value: string | boolean | Date | null) => void
}

interface Options {
  label: string
  value: string
  line?: string
}

export const EducationDetailSelect = ({
  educationIndex,
  education,
  onChange,
}: SchoolDetailSelectProps) => {
  const [schoolOptions, setSchoolOptions] = useState<Options[]>([])
  const [majorOptions, setMajorOptions] = useState<Options[]>([])
  const [currentValues, setCurrentValues] = useState({
    name: '',
    major: '',
    double_major: '',
    minor: '',
  })

  const { setValue, getValues } = useFormContext()

  const educationType = education?.education_type
  const isGeneralEducational = education?.is_general_educational
  const disabled = !educationType || educationType === '해당없음'

  const onCurrentValueChange = (key: string, value: string) => {
    setCurrentValues({
      ...currentValues,
      [key]: value,
    })
  }

  const handleValuesChange = (key: string, option: Options) => {
    onChange(key, option.label)
    onCurrentValueChange(key, option.label)
  }

  const handleMajorValuesChange = (name: string, key: string, option: Options) => {
    handleValuesChange(key, option)
    if (!option?.line) return
    setValue(`educations[${educationIndex}].${name}`, option.line)
  }

  const getSelectValue = (key: keyof Education) => {
    if (!education[key]) return
    return { label: education[key], value: education[key] }
  }

  const setSelectOptions = (
    res: HighSchoolSearch[] | UniversitySearch[] | UniversityMajorSearch[],
    option_key: 'school_name' | 'univ_name' | 'university_department_name',
  ) => {
    if (res.length < 1) return

    return res.map((item: any) => {
      return {
        label: `${item[option_key]}`,
        value: `${item[option_key]}`,
        line: `${item['university_univ_own_major_category']}`,
      }
    })
  }

  const getSearchSchool = (value: string, action: InputActionMeta) => {
    if (action.action === 'input-change') {
      onCurrentValueChange('name', value)
    }

    const koreanRegExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣].*/
    const englishRegExp = /^[a-zA-Z]*/
    const isKorean = value && value?.match(koreanRegExp)
    const isUniversity = educationType === 'university'
    const isCollege = educationType === 'college'
    const isKoreaUniversity = isKorean && isUniversity
    const isKoreanCollege = isKorean && isCollege
    const isKoreaGraduateUniversity = isKorean && educationType.includes('grade_university')
    const isDoctor = educationType === 'grade_university_phd'
    const isKoreaHighSchool = isKorean && educationType === 'highschool'

    if (isKoreaGraduateUniversity) {
      const type = isDoctor ? '박사' : '석사'
      return getSearchKoreaGraduateUniversity(value, type)
    }

    if (isKoreaUniversity) {
      return getSearchKoreaUniversity(value, 4)
    }
    if (isKoreanCollege) {
      return getSearchKoreaUniversity(value, 2)
    }

    if (isKoreaHighSchool) {
      return getSearchHighSchool(value)
    }

    if (englishRegExp && isUniversity) {
      return setSearchEnglishUniversity(value)
    }
  }

  const getSearchHighSchool = (value: string) => {
    getHighSchool(value)
      .then((res: HighSchoolSearch[]) => {
        const options = setSelectOptions(res, 'school_name') || []
        setSchoolOptions(options)
      })
      .catch(() => {
        Toast.error('학교 검색에 실패했습니다.')
      })
  }

  const getSearchKoreaGraduateUniversity = (value: string, type: string) => {
    getGraduateUniversity(value, type)
      .then((res: UniversitySearch[]) => {
        const options = setSelectOptions(res, 'univ_name') || []
        setSchoolOptions(options)
      })
      .catch(() => {
        Toast.error('학교 검색에 실패했습니다.')
      })
  }

  const getSearchKoreaUniversity = (value: string, duration?: number) => {
    getUniversity(value, duration)
      .then((res: UniversitySearch[]) => {
        const options = setSelectOptions(res, 'univ_name') || []
        setSchoolOptions(options)
      })
      .catch(() => {
        Toast.error('학교 검색에 실패했습니다.')
      })
  }

  const getSearchKoreaUniversityMajor = (university_type: string, value: string) => {
    const universityName = getSelectValue('name')?.value
      ? String(getSelectValue('name')?.value)
      : ''
    getUniversityMajor(university_type, universityName, value)
      .then((res: UniversityMajorSearch[]) => {
        const options = setSelectOptions(res, 'university_department_name') || []
        setMajorOptions(options)
      })
      .catch(() => {
        Toast.error('전공 검색에 실패했습니다.')
      })
  }

  const setSearchEnglishUniversity = (value: string) => {
    // 한글일때에는 국내 대학교 검색, 영문일때에는 외국 대학교를 검색 (고등학교일때에는 영어 검색 안함)
    const EnglishRegExp = /^[a-zA-Z]*/

    if (!value) {
      setSchoolOptions([])
      return
    }

    if (value?.match(EnglishRegExp)) {
      const options = getForeignUniversity(FOREIGN_UNIVERSITIES, value)
      setSchoolOptions(options)
    }
  }

  const getSearchUniversityMajor = (key: string, value: string, action: InputActionMeta) => {
    if (action.action === 'input-change') {
      onCurrentValueChange(key, value)
    }

    const koreanRegExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣].*/
    const isKorean = value && value?.match(koreanRegExp)
    const isKoreaUniversity = isKorean && educationType === 'university'
    const isKoreanCollege = isKorean && educationType === 'college'
    const isKoreaGraduateUniversity = isKorean && educationType.includes('grade_university')

    if (isKoreaUniversity) {
      getSearchKoreaUniversityMajor('대학', value)
    }
    if (isKoreanCollege) {
      getSearchKoreaUniversityMajor('전문대학', value)
    }

    if (isKoreaGraduateUniversity) {
      getSearchKoreaUniversityMajor('대학원', value)
    }
  }

  const handleGradeChange = (key: string, value: string) => {
    const maxGrade = getValues(`educations.${educationIndex}.maximum_grade`)
    const currentGrade = getValues(`educations.${educationIndex}.grade`)

    if (key === 'grade' && parseFloat(value) > parseFloat(maxGrade)) {
      return onChange('grade', maxGrade)
    }
    if (key === 'maximum_grade' && parseFloat(value) < parseFloat(currentGrade)) {
      return onChange('maximum_grade', currentGrade)
    }

    return onChange(key, value)
  }

  useEffect(() => {
    setSchoolOptions([])
    setCurrentValues({
      name: '',
      major: '',
      double_major: '',
      minor: '',
    })
  }, [educationType])

  if (disabled) return null
  return (
    <Styles.SchoolDetailSelectWrapper>
      <Styles.SectionWrapper>
        <Styles.TitleWrapper>
          <Styles.SectionTitle>학교명</Styles.SectionTitle>
          {educationType === 'highschool' && (
            <Styles.CheckboxWrapper>
              <CheckBox
                isChecked={isGeneralEducational || false}
                onChange={(checked) => onChange('is_general_educational', checked)}
                size="sm"
              />
              대입 검정고시
            </Styles.CheckboxWrapper>
          )}
          {educationType === 'university' && (
            <Styles.CheckboxWrapper>
              <CheckBox
                isChecked={education?.is_night_school || false}
                onChange={(checked) => onChange('is_night_school', checked)}
                size="sm"
              />
              야간
            </Styles.CheckboxWrapper>
          )}
        </Styles.TitleWrapper>
        <Select
          value={getSelectValue('name')}
          options={schoolOptions}
          placeholder="학교를 입력해주세요. (고등학교 제외 해외학교는 영문으로 입력)"
          isSearchable
          onInputChange={(value: string, action: InputActionMeta) => getSearchSchool(value, action)}
          onChange={(options) => {
            handleValuesChange('name', options)
          }}
          disabled={isGeneralEducational}
          closeMenuOnScroll
          isCreatable
        />
      </Styles.SectionWrapper>
      {!isGeneralEducational && (
        <>
          {educationType === 'highschool' && (
            <Styles.SectionWrapper>
              <Styles.SectionTitle>계열</Styles.SectionTitle>
              <Select
                options={DEPARTMENT_SELECT}
                placeholder="계열을 선택해주세요."
                onChange={(option) => onChange('classfication', option.label)}
                closeMenuOnScroll
              />
            </Styles.SectionWrapper>
          )}
          {educationType !== 'highschool' && (
            <>
              <Styles.SectionMajorWrapper>
                <Styles.MajorWrapper>
                  <Styles.MajorTitleWrapper>
                    <Styles.SectionTitle>전공</Styles.SectionTitle>
                    <Styles.MajorList>
                      <Styles.CheckboxWrapper>
                        <CheckBox
                          isChecked={education.is_minor || false}
                          onChange={(checked) => onChange('is_minor', checked)}
                          size="sm"
                          disabled={!education.major}
                        />
                        부전공
                      </Styles.CheckboxWrapper>
                      <Styles.CheckboxWrapper>
                        <CheckBox
                          isChecked={education.is_double_major || false}
                          onChange={(checked) => onChange('is_double_major', checked)}
                          size="sm"
                          disabled={!education.major}
                        />
                        복수 전공
                      </Styles.CheckboxWrapper>
                    </Styles.MajorList>
                  </Styles.MajorTitleWrapper>
                  <Select
                    value={getSelectValue('major')}
                    options={majorOptions}
                    placeholder={'주전공'}
                    onInputChange={(value: string, action: InputActionMeta) =>
                      getSearchUniversityMajor('major', value, action)
                    }
                    onChange={(option) => handleMajorValuesChange('line', 'major', option)}
                    disabled={!getSelectValue('name')}
                    isSearchable
                    closeMenuOnScroll
                    isCreatable
                  />
                </Styles.MajorWrapper>
                <Styles.MajorWrapper>
                  <Styles.MajorTitleWrapper>
                    <Styles.SectionTitle>계열</Styles.SectionTitle>
                  </Styles.MajorTitleWrapper>
                  <TextInput
                    onChange={(event) => onChange('line', event.target.value)}
                    value={getValues(`educations.${educationIndex}.line`)}
                    placeholder="계열을 입력해주세요."
                  />
                </Styles.MajorWrapper>
              </Styles.SectionMajorWrapper>
              {getSelectValue('is_minor') && (
                <Styles.SectionMajorWrapper>
                  <Styles.MajorWrapper>
                    <Styles.MajorTitleWrapper>
                      <Styles.SectionTitle>부전공</Styles.SectionTitle>
                    </Styles.MajorTitleWrapper>
                    <Select
                      value={getSelectValue('minor')}
                      options={majorOptions}
                      placeholder={'부전공'}
                      onInputChange={(value: string, action: InputActionMeta) =>
                        getSearchUniversityMajor('minor', value, action)
                      }
                      onChange={(option) => handleMajorValuesChange('minor_line', 'minor', option)}
                      disabled={!getSelectValue('is_minor')}
                      isSearchable
                      closeMenuOnScroll
                      isCreatable
                    />
                  </Styles.MajorWrapper>
                  <Styles.MajorWrapper>
                    <Styles.MajorTitleWrapper>
                      <Styles.SectionTitle>계열</Styles.SectionTitle>
                    </Styles.MajorTitleWrapper>
                    <TextInput
                      disabled={!getSelectValue('is_minor')}
                      onChange={(event) => onChange('minor_line', event.target.value)}
                      value={getValues(`educations.${educationIndex}.minor_line`)}
                      placeholder="계열을 입력해주세요."
                    />
                  </Styles.MajorWrapper>
                </Styles.SectionMajorWrapper>
              )}
              {getSelectValue('is_double_major') && (
                <Styles.SectionMajorWrapper>
                  <Styles.MajorWrapper>
                    <Styles.MajorTitleWrapper>
                      <Styles.SectionTitle>복수 전공</Styles.SectionTitle>
                    </Styles.MajorTitleWrapper>
                    <Select
                      value={getSelectValue('double_major')}
                      options={majorOptions}
                      placeholder={'복수전공'}
                      onInputChange={(value: string, action: InputActionMeta) =>
                        getSearchUniversityMajor('double_major', value, action)
                      }
                      onChange={(option) =>
                        handleMajorValuesChange('double_major_line', 'double_major', option)
                      }
                      disabled={!getSelectValue('is_double_major')}
                      isSearchable
                      closeMenuOnScroll
                      isCreatable
                    />
                  </Styles.MajorWrapper>
                  <Styles.MajorWrapper>
                    <Styles.MajorTitleWrapper>
                      <Styles.SectionTitle>계열</Styles.SectionTitle>
                    </Styles.MajorTitleWrapper>
                    <TextInput
                      disabled={!getSelectValue('is_double_major')}
                      value={getValues(`educations.${educationIndex}.double_major_line`)}
                      onChange={(event) => onChange('double_major_line', event.target.value)}
                      placeholder="계열을 입력해주세요."
                    />
                  </Styles.MajorWrapper>
                </Styles.SectionMajorWrapper>
              )}
            </>
          )}
          <Styles.SectionWrapper>
            <Styles.SectionTitle>재학 기간</Styles.SectionTitle>
            <Styles.FormWrapper>
              <Select
                options={ENTER_TYPE}
                placeholder={'입학'}
                defaultValue={ENTER_TYPE[0]}
                onChange={(option) => onChange('period_enrollment', option.label)}
                closeMenuOnScroll
              />
              <SelectDatePicker
                value={education.enrollment_date}
                placeholder={'연월'}
                onChange={(date) => onChange('enrollment_date', date)}
                closeOnScroll
              />
              <Select
                options={LEAVE_TYPE}
                placeholder={'졸업'}
                defaultValue={LEAVE_TYPE[0]}
                onChange={(option) => onChange('period_graduation', option.label)}
                closeMenuOnScroll
              />
              <SelectDatePicker
                value={education.graduation_date}
                placeholder={'연월'}
                disabled={education.period_graduation === '재학 중'}
                onChange={(date) => onChange('graduation_date', date)}
                minDate={education.enrollment_date}
                closeOnScroll
              />
            </Styles.FormWrapper>
          </Styles.SectionWrapper>
          {educationType !== 'highschool' && (
            <Styles.SectionWrapper>
              <Styles.SectionTitle>학점</Styles.SectionTitle>
              <Styles.FormWrapper>
                <TextInput
                  type="number"
                  placeholder={'학점'}
                  onChange={(event) => handleGradeChange('grade', event.target.value)}
                  value={getValues(`educations.${educationIndex}.grade`)}
                  step="0.1"
                  max={getValues(`educations.${educationIndex}.maximum_grade`)}
                />
                /
                <TextInput
                  type="number"
                  placeholder={'만점'}
                  onChange={(event) => handleGradeChange('maximum_grade', event.target.value)}
                  value={getValues(`educations.${educationIndex}.maximum_grade`)}
                  step="0.1"
                  min={getValues(`educations.${educationIndex}.grade`)}
                />
              </Styles.FormWrapper>
            </Styles.SectionWrapper>
          )}
        </>
      )}
      {isGeneralEducational && (
        <Styles.SectionWrapper>
          <Styles.SectionTitle>합격연월</Styles.SectionTitle>
          <Styles.FormWrapper>
            <SelectDatePicker
              value={education.passing_date}
              placeholder={'연월'}
              onChange={(date) => onChange('passing_date', date)}
              closeOnScroll
            />
          </Styles.FormWrapper>
        </Styles.SectionWrapper>
      )}
    </Styles.SchoolDetailSelectWrapper>
  )
}
