import styled from 'styled-components'

export const PlanInformationForm = styled.div`
  width: 473px;
  padding: 24px 20px;
`

export const Footer = styled.div`
  margin-top: 20px;

  button {
    height: 56px;
    ${(props) => props.theme.fonts[18]};
  }
`
