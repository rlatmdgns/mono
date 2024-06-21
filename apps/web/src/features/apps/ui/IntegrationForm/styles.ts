import styled from 'styled-components'

export const Form = styled.form`
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};
  margin-left: 48px;
  margin-top: 14px;
  padding-top: 14px;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 24px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.neutralGray200};
  background: ${(props) => props.theme.colors.background200};

  & + & {
    margin-top: 12px;
  }
`
export const Title = styled.p`
  display: flex;
  gap: 4px;
  align-items: center;
  ${(props) => props.theme.fonts[15]};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const FormButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 24px;

  > button {
    ${(props) => props.theme.fonts[14]};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`

export const InputBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray800};
`
