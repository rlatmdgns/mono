import styled from 'styled-components'

export const TextBox = styled.span`
  display: flex;
  flex-direction: column;
`

export const Title = styled.em`
  height: 16px;
  ${(props) => props.theme.fonts[12]};
  font-style: normal;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.neutralGray800};
`

export const Desc = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 16px;
`

export const Status = styled.span`
  ${(props) => props.theme.fonts[11]};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.neutralGray500};
`

export const StatusCount = styled(Status)`
  color: ${(props) => props.theme.colors.neutralGray300};
`
