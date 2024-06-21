import * as yup from 'yup'

export const sendEmailSchema = yup.object().shape({
  title: yup
    .string()
    .required('제목을 입력해 주세요.')
    .test('title-check', '제목을 입력해주세요', (title) => {
      const value = title.replace(/\s/g, '').replace('&nbsp;', '')
      return !(value === '<p></p>' || value === '<p><br></p>')
    }),
  posting: yup.object().required('공고를  선택해 주세요.'),
  mail_to: yup.array().min(1).required('받는 사람을 선택해 주세요.'),
})

export const sendPostingEmailSchema = yup.object().shape({
  title: yup
    .string()
    .required('제목을 입력해 주세요.')
    .test('title-check', '제목을 입력해주세요', (title) => {
      const value = title.replace(/\s/g, '').replace('&nbsp;', '')
      return !(value === '<p></p>' || value === '<p><br></p>')
    }),
  mail_to: yup.array().min(1).required('받는 사람을 선택해 주세요.'),
})
