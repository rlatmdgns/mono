import styled from 'styled-components'

export const AddCardForm = styled.form`
  width: 578px;
`

export const Filed = styled.fieldset`
  padding: 34px 155px;
  border: none;
`

export const Label = styled.label`
  display: block;
  ${(props) => props.theme.fonts[14]};

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`

export const Text = styled.p`
  margin-bottom: 8px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  > div {
    flex: 0 0 36px;

    input {
      padding: 12px 0;
      text-align: center;
    }
  }
`
export const AfterPassword = styled.div`
  position: relative;
  top: 2px;
  ${(props) => props.theme.fonts[12]};
`
