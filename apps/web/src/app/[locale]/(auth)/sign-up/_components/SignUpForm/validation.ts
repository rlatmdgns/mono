import * as yup from 'yup'

export const signUpFormSchema = yup.object({
  user_email: yup.string(),
  enterprise_name: yup.string().required('회사명을 입력해 주세요.'),
  user_name: yup
    .string()
    .trim()
    .matches(/^[가-힣a-zA-Z]+$/g, '올바른 성함을 입력해주세요.')
    .required('올바른 성함을 입력해주세요.'),
  user_phone: yup
    .string()
    .trim()
    .matches(/^\d{3}\d{4}\d{4}$/g, '-를 제외한 11자를 입력해주세요.')
    .required('연락처를 입력해 주세요.'),
  user_password: yup
    .string()
    .trim()
    .required('비밀번호를 입력해 주세요.')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{7,}$/g,
      '영문 대소문자, 숫자, 특수문자를 포함하여 7자 이상 입력해주세요.',
    ),
  user_re_password: yup
    .string()
    .trim()
    .oneOf([yup.ref('user_password')], '비밀번호를 입력해 주세요.')
    .required('비밀번호를 입력해 주세요.'),
  user_access_path: yup.string().required('스테드를 알게된 경로를 선택해주세요.'),
  user_access_path_direct_input: yup.string().when('user_access_path', {
    is: '직접입력',
    then: (schema) => schema.required('스테드를 알게된 경로를 입력해주세요.'),
  }),
  service_agreement: yup
    .boolean()
    .required('서비스 약관을 동의해 주세요.')
    .oneOf([true], '서비스 약관을 동의해 주세요.'),
  consent_to_marketing: yup.boolean(),
})
