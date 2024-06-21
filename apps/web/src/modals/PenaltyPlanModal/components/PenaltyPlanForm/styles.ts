import styled from 'styled-components'

export const AddPlanForm = styled.div`
  width: 473px;
  padding: 24px 20px;
`

export const PenaltyPlanEnd = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 11px;
  border-radius: 6px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  ${(props) => props.theme.fonts[14]};
  background: ${(props) => props.theme.colors.neutralGray100};
  color: ${(props) => props.theme.colors.red600};
`
export const Footer = styled.div`
  margin-top: 20px;

  button {
    height: 56px;
    ${(props) => props.theme.fonts[18]};
  }
`
