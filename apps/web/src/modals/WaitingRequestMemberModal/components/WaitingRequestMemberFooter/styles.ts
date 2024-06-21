import styled from 'styled-components'

export const Footer = styled.div`
  display: flex;
  justify-content: end;
  padding: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.neutralGray200};

  button {
    width: 100px;
  }
`
