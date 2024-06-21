import * as yup from 'yup'

export const createEmailFormSchema = yup.object().shape({
  enterprise_email: yup
    .string()
    .required('영문 혹은 영문+숫자 조합으로 입력해 주세요.')
    .matches(/[a-zA-Z0-9]/g, '영문 혹은 영문+숫자 조합으로 입력해 주세요.'),
})
