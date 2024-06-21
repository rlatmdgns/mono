import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 24px 16px;
`

export const Input = styled.input`
  width: 100%;
  border: none;
  color: ${(props) => props.theme.colors.neutralGray800};
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: 0;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutralGray300};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }
`
