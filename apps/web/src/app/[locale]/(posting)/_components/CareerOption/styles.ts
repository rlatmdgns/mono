import styled from 'styled-components'

export const Text = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  padding: 0 10px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutralGray200};
  color: ${({ theme }) => theme.colors.neutralGray500};
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const Label = styled.label`
  input {
    display: none;
  }

  input:checked + ${Text} {
    background-color: ${({ theme }) => theme.colors.neutralGray100};
    border-color: ${({ theme }) => theme.colors.neutralGray100};
  }
`
