import styled from 'styled-components'

export const PlanPayment = styled.div`
  margin: 0 0 20px;
  padding: 20px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.neutralGray100};
  ${(props) => props.theme.fonts[14]};
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`

export const Title = styled.span`
  width: 96px;
  ${(props) => props.theme.fonts[14]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`
export const Desc = styled.div``

export const TotalDesc = styled(Desc)`
  ${(props) => props.theme.fonts[18]};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`
