import styled from 'styled-components'

export const ApplicantSelectWrapper = styled.div`
  margin-bottom: 24px;
`

export const Title = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 10px;
  align-items: center;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: #374a6a;
`

export const Required = styled.span`
  color: #ff5b46;
`
