import styled from 'styled-components'

export const PlanPayment = styled.div`
  margin: 24px 0 20px;
  padding: 20px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray100};
  ${(props) => props.theme.fonts[14]};
`

export const PenaltyInformation = styled.p`
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

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`
export const Title = styled.span`
  width: 130px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const Desc = styled.div``
export const TotalDesc = styled(Desc)`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
