import * as yup from 'yup'

export const changePasswordSchema = yup.object({
  password: yup.string().required('비밀번호를 입력해주세요.'),
  new_password: yup
    .string()
    .required('새로운 비밀번호를 입력해주세요.')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/g,
      '영문 대소문자, 숫자, 특수문자를 포함하여 7자 이상 입력해주세요.',
    ),
  new_password_check: yup
    .string()
    .oneOf([yup.ref('new_password')], '비밀번호가 다릅니다.')
    .required('비밀번호를 한번 더 입력해주세요.'),
})
